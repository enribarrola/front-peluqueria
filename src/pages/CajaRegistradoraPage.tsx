import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes/routes'
import Index from '../modules/Caja/components/Index'

export default function CajaRegistradoraPage() {
	
  return (
	<>
		<Routes>
			<Route path={routes.CAJA_REGISTRADORA.URL_CAJA_REGISTRADORA} element={<Index/>}/>
		</Routes>
	</>
  )
}
