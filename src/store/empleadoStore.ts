import { create } from "zustand";
import { Empleado } from "../intefaces/empleado/types";

interface State {
	empleado: Empleado[] | [];
};

interface Actions {
	setEmpleados: (empleado: Empleado[]) => void;
}

export const useEmpleadoStore = create<State & Actions>((set) => ({
	empleado: [],
	setEmpleados: (empleado) =>
		set((state) => ({
			empleado
		}))
})
);