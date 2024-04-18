import React, { useEffect, useState } from 'react'
import { Cliente } from '../../../intefaces/cliente/types'
import { obtenerPorCI } from '../../../api/cliente/agregar-cliente'
import ModalRegistrarCliente from '../../ATC/components/ModalRegistrarCliente'
import AgregarCliente from '../../ATC/components/AgregarCliente'


interface FormState {
	inputValues: Cliente
	error: {
		error: boolean
		type: string
		descripcion: string
	}
}

const ESTADO_INICIAL_INPUTS: FormState["inputValues"] = {
	contribuyente: false,
	razonSocial: '',
	nacionalidad: 177,
	correo: '',
	tipoContribuyente: "1",
	tipoDocumento: "1",
	numeroDocumento: null,
	numeroTelefono: null,
	fechaNacimiento: '',
	RUC: null,
	tipoOperacion: "1"
}




export default function Caja() {
	const [inputValues, setInputValues] = useState<FormState["inputValues"]>(ESTADO_INICIAL_INPUTS);

	const [error, setError] = useState<FormState["error"]>({ error: false, descripcion: '', type: '' });

	const [showModal, setShowModal] = useState(false);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);
	useEffect(() => {
		// Actualizar el valor de los imputs dependiendo de si es contribuyente o no
		setInputValues({ ...inputValues, tipoOperacion: inputValues.contribuyente ? "1" : "2", RUC: inputValues.contribuyente ? inputValues.RUC : null, tipoContribuyente: !inputValues.contribuyente ? null : "1" });
	}, [inputValues.contribuyente]);

	const handleBlur = async () => {
		const res = await obtenerPorCI(inputValues.numeroDocumento || 1)
		if (res?.status === 200) {
			const data = await res.json();
			setInputValues({
				...inputValues,
				contribuyente: data.contribuyente,
				razonSocial: data.razon_social,
				nacionalidad: data.pais,
				correo: data.correo_electronico,
				tipoContribuyente: data.tipo_contribuyente,
				tipoDocumento: data.documento_tipo,
				numeroDocumento: data.nro_documento,
				numeroTelefono: data.celular,
				fechaNacimiento: data.fecha_nacimiento,
				RUC: data.ruc,
				tipoOperacion: data.tipo_operacion
			})

		} else {
			handleShow()
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await obtenerPorCI(inputValues.numeroDocumento || 1)

		if (res?.status === 200) {
			setInputValues(await res.json())


		} else {
			const data = await res?.json();
			setError({ error: true, descripcion: data, type: 'alert alert-danger mt-4' });
			setTimeout(() => {
				setError({ error: false, descripcion: '', type: '' });
			}, 5000);
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		});

	}
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className="col">

						<input type="text" onChange={handleChange} onBlur={handleBlur} name='numeroDocumento' />
						<div className="input-group input-group-sm mb-3">
							<span className="input-group-text" id="inputGroup-sizing-sm">Razon Social</span>
							<input type="text" className="form-control" aria-label="Sizing example input" value={inputValues.razonSocial} aria-describedby="inputGroup-sizing-sm" disabled />
						</div>
						{/* Botón para abrir el modal */}
						<ModalRegistrarCliente showModal={showModal} handleClose={handleClose} />
					</div>
				</div>
			</div>



		</>

	)
}
