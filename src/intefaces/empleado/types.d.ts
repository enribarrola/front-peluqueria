export interface Empleado {
	id_empleada: number
	nombre: string
	apellido: string
	correo_electronico: string
	telefono: string
	direccion: string
	fecha_registro: date
	fecha_nacimiento: date
	activa: boolean
}

export interface ListaEmpleadosProps {
	empleados: Empleado[]
}