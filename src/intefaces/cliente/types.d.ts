export interface Cliente {
	id_cliente?: number
	contribuyente: boolean
	razon_social: string
	nacionalidad: number
	correo_electronico: string
	tipoContribuyente: string | null
	tipoDocumento: string | null
	nro_documento: number | null
	celular: number | null
	fechaNacimiento: string
	ruc: string | null
	tipoOperacion: string,
	fantasia: string
	//PASAR A UNA INTERFAZ
}

export interface ClienteFicha {
	fecha: string
	nombre_servicio: string
	precio: number
}