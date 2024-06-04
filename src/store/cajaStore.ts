import { create } from "zustand";
import { Caja, ServicioRealizado } from "../intefaces/caja/types";
import { Cliente } from "../intefaces/cliente/types"

// Estado inicial de Caja con valores vacíos o predeterminados
const initialCaja: Caja = {
  serviciosRealizados: [],
  cliente: {} as Cliente,
  total: 0,
};

interface State {
  caja: Caja;
}

interface Actions {
  setServicioRealizado: (servicio: ServicioRealizado) => void;
  setCliente: (cliente: Cliente) => void;
  setTotal: (total: number) => void;
  removeServicioRealizado: (id: number) => void; 
}

export const useCajaStore = create<State & Actions>((set) => ({
  caja: initialCaja,
  setServicioRealizado: (servicio) =>
    set((state) => ({
      caja: {
        ...state.caja,
        serviciosRealizados: [...state.caja.serviciosRealizados, servicio],
      },
    })),
  setCliente: (cliente) =>
    set((state) => ({
      caja: {
        ...state.caja,
        cliente,
      },
    })),
  setTotal: (total) =>
    set((state) => ({
      caja: {
        ...state.caja,
        total,
      },
    })),
	removeServicioRealizado: (id) =>
		set((state) => ({
		  caja: {
			...state.caja,
			serviciosRealizados: state.caja.serviciosRealizados.filter(
			  (servicio) => servicio.producto.id_servicio !== id
			),
		  },
		})),
}));