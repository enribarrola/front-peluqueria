import React, { useState } from 'react'
import Input from '../../ATC/components/utils/Input'
import Check from '../../ATC/components/utils/Check'

interface Banco {
	id_cuenta: number
	tipo_cuenta: string
	nombre: string
	numero_cuenta: string
	saldo: number
}
interface Props {
	banco: Banco
}

export default function DetalleBanco({banco}: Props) {
	const [disabledInputs, setDisabledInputs] = useState<boolean>(true);
	const handleEnableInputs = () => {
		setDisabledInputs(!disabledInputs);
	};
	return (
		<div className="row align-items-start">
			<div className="col">
				<Input label="ID Cuenta" value={banco?.id_cuenta.toString() || ""} disabled={disabledInputs} />
				{/* <Input label="" value={cliente?.correo_electronico || ""} disabled={disabledInputs} /> */}
			</div>
			<div className="col">
				<Input label="Cuenta N°" value={banco?.numero_cuenta || ""} disabled={disabledInputs} />
				<Input label="Saldo" value={banco?.saldo?.toString() || ""} disabled={disabledInputs} />
			</div>
			<div className="col">
				<Input label="Descripcion" value={banco?.tipo_cuenta?.toString() || ""} disabled={disabledInputs} />
			</div>
			{/* <div className="col">
				<Check label="Es Contribuyente?" isChecked={cliente?.contribuyente || false} />
				<button className="mb-3" onClick={handleEnableInputs}>editar</button>
			</div> */}
		</div>
	)
}
