import fetchWithAuth from "../libs/fetch";

export const obtenerProductosFiltrado = async (producto: string) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json'
			},
		  };
		const response = await fetchWithAuth(`/api/productos/${producto}`, requestOptions);
		return response;
	  } catch (error) {
		console.error("error:", error);
	  }
}