import fetch from "../libs/fetch";

export const loginRequest = async (usuario: string, contraseña: string) =>{
	try {
		const requestOptions: RequestInit = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({usuario,contraseña})
		  };
		const response = await fetch("/auth/login", requestOptions);
		return response;
	  } catch (error) {
		console.error("Error:", error);
	  }
}
  /* axios.post("/auth/login", {}); */

/* export const profileRequest = async (token: string) =>
  axios.get("/auth/profile"); */
