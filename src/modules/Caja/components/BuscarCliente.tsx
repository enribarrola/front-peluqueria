import { useEffect, useRef } from "react";
import { obtenerCliente } from "../../../api/cliente/cliente";
import { useClienteStore } from "../../../store/cliente";

function BuscarCliente() {
	let timeout: NodeJS.Timeout;
	const setClientes = useClienteStore((state) => state.setClientes);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearTimeout(timeout);
		if (e.target.value.length > 3 || e.target.value.length == 0) {
			timeout = setTimeout(() => {
				fetchClientes(e.target.value)
			}, 1000);
		}
	}
	const fetchClientes = async (cliente: string) => {
		const response = await obtenerCliente(cliente);
		if (!response?.ok) {
			return setClientes([]);
		}
		const data = await response?.json();
		setClientes(data);
	}

	return (
		<input
			type="text"
			className="form-control mb-3"
			placeholder="Buscar clientes..."
			aria-label="Buscar clientes"
			aria-describedby="buscador-clientes"
			id="buscador-clientes"
			readOnly={false}
			onChange={handleChange}
			autoFocus
		/>
	)
}

export default BuscarCliente