
import { useEffect, useState } from "react";
import { useProductoStore } from "../../../store/productoStore"
import { semaforoStock } from "../../../utils/helpers"
import { addThousandSeparators } from "../../../utils/helpers"
import { useEmpleadoStore } from "../../../store/empleadoStore";
import { Productos } from "../../../intefaces/producto/types"
import { Empleado } from "../../../intefaces/empleado/types"
import Alert from "../../utils/Alert";
import { useCajaStore } from "../../../store/cajaStore";
import { useClienteStore } from "../../../store/cliente";
import { Cliente } from "../../../intefaces/cliente/types";


function ListaClientes() {

	const clientes = useClienteStore((state) => state.clientes);
	const setCliente = useCajaStore((state) => state.setCliente);

	const click = (cliente: Cliente) => {
		setCliente(cliente);
		
	};

	return (
		<>

			<div className="list-group">
				{clientes.length > 0 ? clientes.map((cliente, index) => (
					<div className="list-group-item list-group-item-action" key={index} onClick={() => click(cliente)}>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">{cliente.fantasia}</h5>
							<h5 className="">{cliente.ruc}</h5>
						</div>
					</div>
				)) : <p className="text-warning text-center"><i className="bi bi-exclamation-triangle"></i> No hay clientes que coincidan con la busqueda.</p>}
			</div>
		</>
	)
}

export default ListaClientes