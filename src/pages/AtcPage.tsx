import { Navigate, Route, Routes } from "react-router-dom";
import HeaderCliente from "../modules/ATC/components/HeaderCliente";
import NuevoCliente from "../modules/ATC/components/nuevo-cliente/NuevoCliente";
import { routes } from "../routes/routes";
import DetalleCliente from "../modules/ATC/components/detalle-cliente/DetalleCliente";


export default function AtcPage() {
  return (
	<>
		<Routes>
			<Route path={routes.ATC.URL_LISTAR_CLIENTE} element={<HeaderCliente/>}/>
			<Route path={routes.ATC.URL_NUEVO_CLIENTE} element={<NuevoCliente/>}/>
			<Route path={routes.ATC.URL_DETALLE_CLIENTE} element={<DetalleCliente/>}/>
		</Routes>
	</>
  )
}