import React, { useEffect, useState } from 'react'
import { Cliente } from '../../../intefaces/cliente/types'
import { PAISES } from '../../../constants/paises';
import { TIPO_CONTRIBUYENTE } from '../../../constants/tipoContribuyente';
import { TIPO_DOCUMENTO } from '../../../constants/tipoDocumento';
import { agregarCliente } from '../../../api/cliente/agregar-cliente';
import Alert from './Alert';

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

function AgregarCliente() {
	const [inputValues, setInputValues] = useState<FormState["inputValues"]>(ESTADO_INICIAL_INPUTS);

	const [error, setError] = useState<FormState["error"]>({ error: false, descripcion: '', type: ''});

	useEffect(() => {
		// Actualizar el valor de los imputs dependiendo de si es contribuyente o no
		setInputValues({ ...inputValues, tipoOperacion: inputValues.contribuyente ? "1" : "2", RUC: inputValues.contribuyente ? inputValues.RUC : null, tipoContribuyente: !inputValues.contribuyente ? null : "1" });
	}, [inputValues.contribuyente]);


	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await agregarCliente(inputValues)
		
		if (res?.status === 200) {
			setInputValues(ESTADO_INICIAL_INPUTS);
			setError({ error: true, descripcion: "Cliente registrado correctamente", type: 'alert alert-success mt-4'});
			setTimeout(() => {
				setError({ error: false, descripcion: '' , type: ''});
			}, 5000);
		}else{
			const data = await res?.json();
			setError({ error: true, descripcion: data , type: 'alert alert-danger mt-4'});
			setTimeout(() => {
				setError({ error: false, descripcion: '' , type: ''});
			}, 5000);
		}

		





	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {

		if (e.target.name === 'contribuyente') {
			setInputValues({
				...inputValues,
				contribuyente: e.target.checked
			});
		} else {
			setInputValues({
				...inputValues,
				[e.target.name]: e.target.value
			});
		}
	}


	return (
		<div className='container'>
			<h1 className='text-center mt-1'>Agregar Cliente</h1>

			<form onSubmit={handleSubmit}>
				<div className='row justify-content-center'>
					<div className="col">
						<div className="form-check">
							<input checked={inputValues.contribuyente} className="form-check-input" type="checkbox" name="contribuyente" onChange={handleChange} />
							<label className="form-check-label" htmlFor="flexCheckDefault">
								¿Es contribuyente?
							</label>
						</div>
						{/*  */}
						<div className="form-floating mt-4">
							<input onChange={handleChange} value={inputValues.razonSocial} type="text" className="form-control" name="razonSocial" placeholder="" required />
							<label htmlFor="floatingInput">Razon social</label>
						</div>
						{/*  */}
						<div className="form-floating mt-4">
							<select className="form-select" name="nacionalidad" onChange={handleChange}>
								<option value={177}>Paraguay</option>
								{PAISES.map(pais => (
									<option key={pais.id_pais} value={pais.id_pais}>
										{pais.nombre_pais}
									</option>
								))}
							</select>
							<label htmlFor="floatingSelect">Nacionalidad</label>
						</div>
						{/*  */}
						<div className="form-floating mt-4" >
							<input onChange={handleChange} value={inputValues.correo} type="email" className="form-control " name="correo" placeholder="" required />
							<label htmlFor="floatingInput">Correo</label>
						</div>
						{/*  */}
						{inputValues.contribuyente && (
							<div className="form-floating mt-4">
								<select className="form-select" name="tipoContribuyente" onChange={handleChange}>
									{TIPO_CONTRIBUYENTE.map(tipo => (
										<option key={tipo.id} value={tipo.id}>
											{tipo.nombre}
										</option>))}
								</select>
								<label htmlFor="floatingSelect">Tipo Contribuyente</label>
							</div>
						)}
						{/*  */}
						<div className="form-floating mt-4">
							<select className="form-select" name="tipoDocumento" onChange={handleChange}>
								{TIPO_DOCUMENTO.map(tipo => (
									<option key={tipo.id_tipo_documento} value={tipo.id_tipo_documento}>
										{tipo.nombre_tipo_documento}
									</option>))}
							</select>
							<label htmlFor="floatingSelect">Tipo de Documento</label>
						</div>
						{/*  */}
						<div className="form-floating mt-4">
							<input onChange={handleChange} value={inputValues.numeroDocumento || ''} type="number" className="form-control" name="numeroDocumento" placeholder="" required />
							<label htmlFor="floatingInput">Numero de documento</label>
						</div>
						{/*  */}
						<div className="form-floating mt-4">
							<input onChange={handleChange} value={inputValues.numeroTelefono || ''} type="number" className="form-control" name="numeroTelefono" placeholder="" required />
							<label htmlFor="floatingInput">Numero de telefono</label>
						</div>
						{/*  */}
						<div className="form-floating mt-4" >
							<input onChange={handleChange} value={inputValues.fechaNacimiento} type="date" className="form-control " name="fechaNacimiento" placeholder="" required />
							<label htmlFor="floatingInput">Fecha de nacimiento</label>
						</div>
						{/*  */}
						{inputValues.contribuyente && (
							<div className="form-floating mt-4" >
								<input onChange={handleChange} value={inputValues.RUC || ''} type="text" className="form-control " name="RUC" placeholder="" />
								<label htmlFor="floatingInput">RUC</label>
							</div>
						)}
						{/*  */}

						<div className="form-floating mt-4">
							<select className="form-select" name="tipoOperacion" disabled>
								<option value={inputValues.contribuyente ? 1 : 2}>{inputValues.contribuyente ? "B2B " : "B2C"}</option>
							</select>
							<label htmlFor="floatingSelect">Tipo de Operacion</label>
						</div>
						{/*  */}
						{error.error && <Alert type={error.type} descripcion={error.descripcion} />}
						
						{/*  */}
						<div className='text-end'>
							<button className='btn btn-success mt-4'>Registrar cliente</button>
						</div>



					</div>

				</div>
			</form>

		</div>
	)
}

export default AgregarCliente