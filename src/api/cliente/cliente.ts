import fetchWithAuth from "../../libs/fetch";
import { Cliente } from "../../intefaces/cliente/types";

export const crearCliente = async (cliente: Cliente) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(cliente)
		  };
		const response = await fetchWithAuth("/api/cliente", requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}

export const obtenerClientes = async (page:number) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth(`/api/cliente?page=${page}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}

export const obtenerCliente = async (id: number | string) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth(`/api/cliente/${id}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}

export const obtenerFichaCliente = async (id: number) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth(`/api/cliente/ficha/${id}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}