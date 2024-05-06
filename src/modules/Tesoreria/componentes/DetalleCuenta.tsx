import React, { useEffect, useState } from 'react'
import Card from '../utils/Card'
import Table from '../utils/Table'
import { obtenerBanco, obtenerMovimientosBancarios } from '../../../api/bancos/bancos'
import { useParams } from 'react-router-dom'
import DetalleBanco from '../utils/DetalleBanco'

interface Movimientos {
	fecha_transferencia: string
	comprobante: string
	monto: number
	tipo_movimiento: string
	descripcion: string
}

interface Banco {
	id_cuenta: number
	tipo_cuenta: string
	nombre: string
	numero_cuenta: string
	saldo: number
}
const InitialBanco: Banco = {
	id_cuenta: 0,
	tipo_cuenta: "",
	nombre: "",
	numero_cuenta: "",
	saldo: 0
}
export default function DetalleCuenta() {
	const { id } = useParams<{ id: string }>();
	const [movimientos, setMovimientos] = useState<Movimientos[]>([]);
	const [banco, setBanco] = useState<Banco>(InitialBanco);

	const columnas = ["Fecha", "Comprobante", "Conecpto", "Credito", "Debito"]
	const tbody = movimientos.map((movimiento) => {
		let credito = 0;
		let debito = 0;

		if (movimiento.tipo_movimiento === "Ingreso") {
			credito = movimiento.monto;
		} else if (movimiento.tipo_movimiento === "Egreso") {
			debito = movimiento.monto;
		}
		return [
			<th scope="row" key={movimiento.fecha_transferencia}>{movimiento.fecha_transferencia}</th>,
			<th key={movimiento.comprobante}>{movimiento.comprobante}</th>,
			<th key={movimiento.descripcion}>{movimiento.descripcion}</th>,
			<th key={credito}>{credito.toLocaleString()}</th>,
			<th key={debito}>{debito.toLocaleString()}</th>,

		];
	});

	const fetchMovimientos = async (id: string) => {
		const response = await obtenerMovimientosBancarios(id);
		if (!response?.ok) {
			return setMovimientos([]);
		}
		const data = await response?.json();
		setMovimientos(data);
	}

	const fetchBancoDetalle = async (id: string) => {
		const response = await obtenerBanco(id);
		if (!response?.ok) {
			return setBanco(InitialBanco);
		}
		const data = await response?.json();
		setBanco(data);
	}

	useEffect(() => {
		fetchMovimientos(id || "");
		fetchBancoDetalle(id || "");
	}, []);
	return (
		<>
			<Card titulo='General'>
				<DetalleBanco banco={banco}/>
			</Card>
			<Card titulo='Movimientos'>
				<Table columnas={columnas} tbody={tbody}></Table>
			</Card>
		</>
	)
}
