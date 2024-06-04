import { Productos } from "../producto/types"
import { Empleado } from "../empleado/types"
import { Cliente } from "../cliente/types"

interface ServicioRealizado {
	producto: Productos
	empleado: Empleado
}

export interface Caja {
	serviciosRealizados: ServicioRealizado[]
	cliente: Cliente
	total: number

}