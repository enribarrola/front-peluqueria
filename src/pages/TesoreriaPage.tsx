import React from 'react'
import { routes } from '../routes/routes'
import { Route, Routes } from 'react-router-dom'
import Index from '../modules/Tesoreria/componentes/Index'

export default function TesoreriaPage() {
  return (
	<>
		<Routes>
			<Route path={routes.TESORERIA.URL_TESORERIA} element={<Index/>}/>
		</Routes>
	</>
  )
}
