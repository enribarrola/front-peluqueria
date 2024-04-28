import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { useAuthStore } from "./store/auth";


import Logout from "./pages/Logout";
import { routes } from "./routes/routes";
import React, { lazy, Suspense } from "react";

function App() {
	const isAuth = useAuthStore((state) => state.isAuth);
	const roles = useAuthStore((state) => state.roles);
	const Layout = React.lazy(() => import("./modules/Layout/components/Layout"));
	const HomePage = React.lazy(() => import('./pages/HomePage'));
	const LoginPage = React.lazy(() => import('./pages/LoginPage'));
	const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
	const AgregarClientePage = React.lazy(() => import('./pages/cliente/AgregarClientePage'));
	const AtcPage = React.lazy(() => import('./pages/AtcPage'));

	return (
		<BrowserRouter>
			<Suspense fallback={<>Cargando...</>}>
				<Routes>
					<Route element={<ProtectedRoute isAllowed={isAuth} />}>
						<Route path="/" element={<Layout />}>
							<Route path="" element={< HomePage />} />
						</Route>
					</Route>

					<Route path="/login" element={<LoginPage />} />

					{/* <Route path="/register" element={<RegisterPage />} /> */}

					<Route element={<ProtectedRoute isAllowed={isAuth && roles.includes("admin")} />}>
						<Route path="/" element={<Layout />}>
							<Route path="profile" element={<ProfilePage />} />
						</Route>
					</Route>
					<Route element={<ProtectedRoute isAllowed={isAuth && roles.includes("admin" || "cajero")} />}>
						<Route path="/" element={<Layout />}>
							<Route path="agregar-cliente" element={<AgregarClientePage />} />
						</Route>
					</Route>
					<Route element={<ProtectedRoute isAllowed={isAuth && roles.includes("admin" || "cajero")} />}>
						<Route path="/" element={<Layout />}>
							<Route path={`${routes.PADRE.URL_ATC}/*`} element={<AtcPage />} />
						</Route>
					</Route>

					<Route path="/logout" element={<Logout />} />

				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
