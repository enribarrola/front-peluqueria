import { useParams } from "react-router-dom";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import { obtenerCliente } from "../../../../api/cliente/cliente";
import { Cliente } from "../../../../intefaces/cliente/types";
import { useClienteStore } from "../../../../store/cliente";


export default function DetalleCliente() {
	const { id } = useParams();
	const setCliente = useClienteStore((state) => state.setCliente);
	

	const fetchClientes = async (id_cliente:number) => {
		const response = await obtenerCliente(id_cliente);
		const data = await response?.json();
		setCliente(data);
	}
	useEffect(() => {
		fetchClientes(Number(id))
	}, []);
	
	return (
		<>
			<Tabs></Tabs>
		</>
	)
}
