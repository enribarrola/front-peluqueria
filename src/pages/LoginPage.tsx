import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useState } from "react";

function LoginPage() {
	const setToken = useAuthStore((state) => state.setToken);
	const setProfile = useAuthStore((state) => state.setProfile);
	const navigate = useNavigate();
	const [error, setError] = useState(true);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const usuario = (e.currentTarget.elements[0] as HTMLInputElement).value;
		const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

		const resLogin = await loginRequest(usuario, password);	
		
		if (resLogin?.status == 200) {
			const resLoginJson = await resLogin?.json();
			setToken(resLoginJson.token, resLoginJson.roles);

			/* const resProfile = await profileRequest(resLogin.data.token);
			setProfile(resProfile.data); */
			navigate("/");
		} else{
			setError(false);
		}


	};

	return (
		<div className="container-sm mt-5" style={{ width: "20%" }}>
			<form onSubmit={handleSubmit} >
				<div className="mb-3">
					<label className="form-label" style={{ color: "white" }}>Usuario:</label>
					<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label className="form-label" style={{ color: "white" }}>Contraseña:</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
					<div id="emailHelp" className="form-text" style={{ color: "white" }}>No compartas tus credenciales con nadie.</div>
				</div>
				<div className="alert alert-danger" hidden={error} role="alert">
						Usuario o contraseña incorrectos.
				</div>
				<button type="submit" className="btn btn-primary">Iniciar Sesión</button>
			</form >
		</div>
	);
}

export default LoginPage;
