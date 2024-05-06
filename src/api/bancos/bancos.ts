import fetchWithAuth from "../../libs/fetch";
import { Cliente } from "../../intefaces/cliente/types";

export const obtenerBancos = async () =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth("/api/bancos", requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}

export const obtenerMovimientosBancarios = async (id:string) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth(`/api/bancos/movimientos/${id}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}

export const obtenerBanco = async (id:string) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			}
		  };
		const response = await fetchWithAuth(`/api/bancos/${id}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}