import fetchWithAuth from "../libs/fetch";

export const obtenerEmpleados = async () =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			},
		  };
		const response = await fetchWithAuth(`/api/empleados`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}