
import { useEffect, useState } from "react";
import { useProductoStore } from "../../../store/productoStore"
import { semaforoStock } from "../../../utils/helpers"
import { addThousandSeparators } from "../../../utils/helpers"
import { useEmpleadoStore } from "../../../store/empleadoStore";
import { Productos } from "../../../intefaces/producto/types"
import { Empleado } from "../../../intefaces/empleado/types"
import Alert from "../../utils/Alert";
import { useCajaStore } from "../../../store/cajaStore";

/* interface Producto {
	nombre_servicio: string;
	costo_servicio: number;
  }
  
  interface Empleado {
	id_empleada: number;
	nombre: string;
  } */


function ListaProductos() {
	const [selectedEmpleados, setSelectedEmpleados] = useState<{ [key: number]: number | null }>({});
	const [showAlert, setShowAlert] = useState(false);
	const productos = useProductoStore((state) => state.producto);
	const empleados = useEmpleadoStore((state) => state.empleado);
	const caja = useCajaStore((state) => state.setServicioRealizado);

	const manejarClickSelect = (productoIndex: number, empleadoId: number) => {
		setSelectedEmpleados(prevState => ({
			...prevState,
			[productoIndex]: empleadoId
		}));
	};

	const evitarPropagacion = (event: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
		event.stopPropagation();
	};

	const click = (productoIndex: number, producto: Productos) => {
		const selectedEmpleado = empleados.find((empleado) => empleado.id_empleada === selectedEmpleados[productoIndex]); 

		if (!selectedEmpleado) {
			setShowAlert(true);
			return;
		}
		caja({ producto, empleado: selectedEmpleado });
		setSelectedEmpleados({});
		// Aquí puedes añadir la lógica que necesites
	};

	return (
		<>

			<div className="list-group">
				{productos.length > 0 ? productos.map((producto, index) => (
					<div className="list-group-item list-group-item-action" key={index} onClick={() => click(index, producto)}>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">{producto.nombre_servicio}</h5>
							<small><select onChange={(e) => manejarClickSelect(index, Number(e.target.value))} onClick={evitarPropagacion} className="form-select form-select-sm" aria-label="Default select example" name={"select-empleado"} key={index}>
								<option defaultValue={0}>Empleado</option>
								{empleados.length > 0 ? empleados.map((empleado, index) => (
									<option value={empleado.id_empleada} key={index}>{empleado.nombre}</option>
								)) : <option value="">"Agregar empleados para continuar"</option>}
							</select></small>
						</div>
						<div className="d-flex w-100 justify-content-between">
							<p className="mb-1">Costo: {addThousandSeparators(producto.costo_servicio)} Gs. </p>
							<p className="mb-1">Stock: 3 </p>
						</div>
					</div>

				)) : <p className="text-warning text-center"><i className="bi bi-exclamation-triangle"></i> No hay productos que coincidan con la busqueda.</p>}
				<Alert
					type="alert alert-warning mt-2 h-25 d-inline-block"
					descripcion="Por favor, seleccione un empleado."
					show={showAlert}
					onClose={() => setShowAlert(false)}
				/>
			</div>
		</>
	)
}

export default ListaProductos