import { create } from "zustand";
import { Cliente, ClienteFicha } from "../intefaces/cliente/types";

interface State {
	cliente: Cliente | null;
	ficha: ClienteFicha[] | null;
	clientes: Cliente[] | [];
};

interface Actions {
	setCliente: (cliente: Cliente) => void;
	setFicha: (ficha: ClienteFicha[]) => void;
	setClientes: (clientes: Cliente[]) => void;
}

export const useClienteStore = create<State & Actions>((set) => ({
	cliente: null,
	setCliente: (cliente) =>
		set((state) => ({
			cliente
		})),
	ficha: null,
	setFicha: (ficha) =>
		set((state) => ({
			ficha
		})),
		clientes: [],
	setClientes: (clientes) =>
		set((state) => ({
			clientes
		})),
})
);