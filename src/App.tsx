import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { useAuthStore } from "./store/auth";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import Logout from "./pages/Logout";
import Layout from "./components/Layout";
import AgregarClientePage from "./pages/cliente/AgregarClientePage";

function App() {
	const isAuth = useAuthStore((state) => state.isAuth);
	const roles = useAuthStore((state) => state.roles);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute isAllowed={isAuth} />}>
					<Route path="/" element={<Layout />}>
						<Route path="" element={< HomePage />} />
					</Route>
				</Route>

				<Route path="/login" element={<LoginPage />} />

				<Route path="/register" element={<RegisterPage />} />

				<Route element={<ProtectedRoute isAllowed={isAuth && roles.includes("admin")} />}>
					<Route path="/" element={<Layout />}>
						<Route path="profile" element={<ProfilePage />} />
					</Route>
				</Route>
				<Route element={<ProtectedRoute isAllowed={isAuth && roles.includes("admin"||"cajero")} />}>
					<Route path="/" element={<Layout />}>
						<Route path="agregar-cliente" element={<AgregarClientePage />} />
					</Route>
				</Route>

				<Route path="/logout" element={<Logout />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;
