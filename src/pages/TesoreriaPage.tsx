import React from 'react'
import { routes } from '../routes/routes'
import { Route, Routes } from 'react-router-dom'
import Index from '../modules/Tesoreria/componentes/Index'
import DetalleCuenta from '../modules/Tesoreria/componentes/DetalleCuenta'

export default function TesoreriaPage() {
  return (
	<>
		<Routes>
			<Route path={routes.TESORERIA.URL_TESORERIA} element={<Index/>}/>
			<Route path={routes.TESORERIA.URL_DETALLE_CUENTA} element={<DetalleCuenta/>}/>
		</Routes>
	</>
  )
}
