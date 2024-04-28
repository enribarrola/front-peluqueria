import { useEffect } from "react";
import { obtenerFichaCliente } from "../../../../api/cliente/cliente";
import { useParams } from "react-router-dom";
import { useClienteStore } from "../../../../store/cliente";

export default function TabFicha() {
	const { id } = useParams();
	const setFicha = useClienteStore((state) => state.setFicha);
	const ficha = useClienteStore((state) => state.ficha);
	const fetchClientes = async (id_cliente: number) => {
		const response = await obtenerFichaCliente(id_cliente);
		if (!response?.ok) {
			return setFicha([]);
		}
		const data = await response?.json();
		setFicha(data);

	}

	useEffect(() => {
		fetchClientes(Number(id))
	}, []);
	return (
		<>
			<div className="container-fluid pt-3">
				<div className="card">
					<div className="card-body">
						<div className="row pt-2">
							<div className="col-12">
								<table className="table table-striped table-hover table-bordered">

									<thead className="table-dark">
										<tr>
											<th scope="col">Fecha Servicio</th>
											<th scope="col">Servicio</th>
											<th scope="col">Precio</th>
										</tr>
									</thead>
									<tbody>
										{ficha?.length === 0 ? (
											<tr>
												<td colSpan={6}>No se encontraron datos.</td>
											</tr>
										) : (ficha?.map((ficha, index) => (
											<tr key={index}>
												<th scope="row">{ficha.fecha}</th>
												<td>{ficha.nombre_servicio}</td>
												<td>{ficha.precio}</td>
											</tr>
										)))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
