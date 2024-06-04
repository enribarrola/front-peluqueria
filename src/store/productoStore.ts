import { create } from "zustand";
import { Productos } from "../intefaces/producto/types";

interface State {
	producto: Productos[] | [];
};

interface Actions {
	setProductos: (producto: Productos[]) => void;
}

export const useProductoStore = create<State & Actions>((set) => ({
	producto: [],
	setProductos: (producto) =>
		set((state) => ({
			producto
		}))
})
);