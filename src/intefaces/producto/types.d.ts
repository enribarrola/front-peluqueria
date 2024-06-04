interface Productos {
	id_servicio: number
	nombre_servicio: string
	costo_servicio: number
	descripcion?: string
	id_tipo_servicio: number
}

export interface ListaProductosProps {
	productos: Productos[]
}