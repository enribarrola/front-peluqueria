import { useState } from "react";
import Input from "../utils/Input";
import Tabs from "./Tabs";
import Check from "../utils/Check";
import { useClienteStore } from "../../../../store/cliente";


export default function TabDetalles() {
	const cliente = useClienteStore((state) => state.cliente);
	
	const [disabledInputs, setDisabledInputs] = useState<boolean>(true);
	const handleEnableInputs = () => {
		setDisabledInputs(!disabledInputs);
	};
	return (
		<>
			<div className="container-fluid pt-3">

				<div className="card">
					<div className="card-body">
						<div className="row align-items-start">
							<div className="col">
								<Input label="Razon Social" value={cliente?.razon_social || ""} disabled={disabledInputs} />
								<Input label="Correo" value={cliente?.correo_electronico || ""} disabled={disabledInputs} />
							</div>
							<div className="col">
								<Input label="Fantasia" value={cliente?.fantasia || ""} disabled={disabledInputs} />
								<Input label="Nro Documento" value={cliente?.nro_documento?.toString() || ""} disabled={disabledInputs} />
							</div>
							<div className="col">
								<Input label="Telefono" value={cliente?.celular?.toString() || ""} disabled={disabledInputs} />
							</div>
							<div className="col">
								<Check label="Es Contribuyente?" isChecked={cliente?.contribuyente || false} />
								<button className="mb-3" onClick={handleEnableInputs}>editar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
