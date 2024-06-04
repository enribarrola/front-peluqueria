import { useEffect, useRef } from "react";
import { obtenerProductosFiltrado } from "../../../api/productos";
import { useProductoStore } from "../../../store/productoStore";

function BuscarProducto() {
	let timeout: NodeJS.Timeout;
	const setProductos = useProductoStore((state) => state.setProductos);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearTimeout(timeout);
		if (e.target.value.length > 3 || e.target.value.length == 0) {
			timeout = setTimeout(() => {
				fetchProducto(e.target.value)
			}, 1000);
		}
	}
	const fetchProducto = async (producto: string) => {
		const response = await obtenerProductosFiltrado(producto);
		if (!response?.ok) {
			return setProductos([]);
		}
		const data = await response?.json();
		setProductos(data);
	}

	return (
		<input
			type="text"
			className="form-control mb-3"
			placeholder="Buscar productos..."
			aria-label="Buscar productos"
			aria-describedby="buscador-productos"
			id="buscador-productos"
			readOnly={false}
			onChange={handleChange}
			autoFocus
		/>
	)
}

export default BuscarProducto