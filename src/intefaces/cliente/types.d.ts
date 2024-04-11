export interface Cliente {
	id_cliente?: number
	contribuyente: boolean
	razonSocial: string
	nacionalidad: number
	correo: string
	tipoContribuyente: string | null
	tipoDocumento: string | null
	numeroDocumento: number | null
	numeroTelefono: number | null
	fechaNacimiento: string
	RUC: string | null
	tipoOperacion: string
	//PASAR A UNA INTERFAZ

}