import Card from '../../utils/Card'
import HandleModal from '../../utils/HandleModal'
import Table from '../../utils/Table'
import Informacion from './Informacion'
import ResumenPago from './ResumenPago'
import DatoCliente from './DatoCliente'
import { Link } from 'react-router-dom'
import ListaProductos from './ListaProductos'
import BuscarProducto from './BuscarProducto'
import { useEffect } from 'react'
import { obtenerEmpleados } from '../../../api/empleados'
import { useEmpleadoStore } from '../../../store/empleadoStore'
import { useCajaStore } from '../../../store/cajaStore'
import BuscarCliente from './BuscarCliente'
import ListaClientes from './ListaClientes'

const Columnas = ["Servicio/Producto", "Precio", "Cantidad", "Encargado", "Subtotal", "Acciones"]

export default function Index() {
	const setEmpleados = useEmpleadoStore((state) => state.setEmpleados);
	const caja = useCajaStore((state) => state.caja);
	const eliminarServicio = useCajaStore((state) => state.removeServicioRealizado);
	var totalPagar = 0;

	function handlePagar() {
		if(caja.serviciosRealizados.length === 0) {
			return console.log('No hay servicios para pagar');
			
		}
		if(!caja.cliente.id_cliente) {
			return console.log('No hay cliente seleccionado');
		}
		console.log({'Pagar': caja});
		
	}

	useEffect(() => {
		const fetchEmpleados = async () => {
			const response = await obtenerEmpleados();
			if (!response?.ok) {
				return setEmpleados([]);
			}
			const data = await response?.json();
			setEmpleados(data);
		}
		fetchEmpleados();
	}, [])

	const Rows = caja.serviciosRealizados.map((servicio, index) => {
		totalPagar += servicio.producto.costo_servicio * 1;
		return (
			<>
				<td>{servicio.producto.nombre_servicio}</td>
				<td>{servicio.producto.costo_servicio}</td>
				<td>{1}</td>
				<td>{servicio.empleado.nombre}</td>
				<td>{servicio.producto.costo_servicio * 1}</td>
				<td>
					<button className="btn btn-danger" onClick={() => eliminarServicio(servicio.producto.id_servicio)}>Eliminar</button>
				</td>
			</>
		)
	}
	)

	
	return (
		<Card titulo='Registrar Venta'>
			<div className='container-fluid'>
				<div className="row">
					<div className='col-9'>
						<HandleModal placeholder='Buscar Prodcuto...' children={<ListaProductos/>} buscador={<BuscarProducto/>}/>
						<Table columnas={Columnas} tbody={Rows} MensajePredeterminado='Agregue productos para realizar una venta.' />
						<div className="row">
							<div className='col-9'>
								<Card titulo='Cliente'>
									<HandleModal placeholder='Buscar Cliente...' children={<ListaClientes/>} buscador={<BuscarCliente/>}/>
									<DatoCliente/>
								</Card>
							</div>
							<div className='col-3'>
								<Card titulo='Resumen de pago'>
									<ResumenPago total={totalPagar} iva={Math.round(totalPagar/11)} subtotal={totalPagar}/>
								</Card>
							</div>
						</div>
					</div>
					<div className='col-3'>
						<Card titulo='Informacion'>
							<Informacion />
						</Card>
						<button type="button" className="btn btn-primary mt-2" onClick={handlePagar}>Pagar <i className="bi bi-credit-card"></i> </button>
					</div>
				</div>
			</div>
		</Card>
	)
}
