import React from 'react'
import { obtenerCliente, obtenerClientes } from '../../../api/cliente/cliente'
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import Paginacion from './utils/Paginacion';

interface Cliente {
	id_cliente: number,
	razon_social: string,
	nro_documento: string,
	estado: boolean,
	fantasia: string,

}
interface RespuestaBack {
	result:Cliente[]
	page: number;
	totalPages: number;

}


export default function HeaderCliente() {
	let timeout: NodeJS.Timeout;

	const [clientes, setClientes] = React.useState<RespuestaBack | null>(null);
	const [currentPage, setCurrentPage] = React.useState(1);
	//useEffect

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	  };

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearTimeout(timeout);
		if (e.target.value.length > 3 || e.target.value.length == 0) {
			timeout = setTimeout(() => {
				fetchCliente(e.target.value)
			}, 2000);
		}
	}
	const fetchCliente = async (id: string) => {
		const response = await obtenerCliente(id);
		if (!response?.ok) {
			return setClientes(null);
		}
		const data = await response?.json();
		setClientes(data);

	}
	const fetchClientes = async () => {
		const response = await obtenerClientes(currentPage);
		if (!response?.ok) {
			return setClientes(null);
		}
		const data = await response?.json();
		
		setClientes(data);
	}
	React.useEffect(() => {

		fetchClientes();
	}, [currentPage]);
	return (
		<>
			<h1>Clientes</h1>
			<div className="row">
				<div className="col-auto p-2" style={{ "background": "#ebebeb" }}>
					<input className="form-control" id={"Buscar-cliente"} type="text" placeholder="Buscar por nombre o CI" onChange={handleChange} />
				</div>
				<div className="col p-2" style={{ "background": "#ebebeb" }}>
					<div className="text-end">
						<Link type="button" className="btn btn-primary" to={routes.ATC.NUEVO_CLIENTE}>
							Nuevo Cliente <i className="bi bi-plus-square-fill"></i>
						</Link>

					</div>
				</div>
			</div>
			<div className="row pt-2">
				<div className="col-12">
					<table className="table table-striped table-hover table-bordered">
						<thead className="table-dark">
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Razon Social</th>
								<th scope="col">Fantasia</th>
								<th scope="col">Documento</th>
								<th scope="col">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{clientes?.result == null ? (
								<tr>
									<td colSpan={6}>No se encontraron datos.</td>
								</tr>
							) : (
								clientes?.result.map((cliente, index) => (
									<tr key={index}>
										<th scope="row">{cliente.id_cliente}</th>
										<td>{cliente.razon_social}</td>
										<td>{cliente.fantasia}</td>
										<td>{cliente.nro_documento}</td>
										<td><Link to={cliente.id_cliente.toString()}><i className="bi bi-eye-fill"></i></Link></td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
			<Paginacion
			currentPage={clientes?.page || 1}
            totalPages={clientes?.totalPages || 1}
            onPageChange={handlePageChange}
			isVisible={clientes?.result.length == 0 ? true : false}
			/>



		</>


	)
}
