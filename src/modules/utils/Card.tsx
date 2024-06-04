import React from 'react'
import { Outlet } from 'react-router-dom'
interface CardProps {
	titulo: string
	children: React.ReactNode
}
function Card({ titulo, children }: CardProps) {
	return (
		<div className="card mt-2">
			<h5 className="card-header">
				{titulo}
			</h5>
			<div className="card-body">
				{children}
			</div>
		</div>
	)
}

export default Card