import fetchWithAuth from "../../libs/fetch";
import { Cliente } from "../../intefaces/cliente/types";

export const agregarCliente = async (cliente: Cliente) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(cliente)
		  };
		const response = await fetchWithAuth("/api/create-client", requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}

export const obtenerPorCI = async (ci: number) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth(`/api/get-client/${ci}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}