import { Link } from "react-router-dom";
import Table from "../utils/Table";
import { obtenerBancos } from "../../../api/bancos/bancos";
import React, { useEffect, useState } from 'react';

interface Bancos {
	id_cuenta: number
	tipo_cuenta: string
	nombre: string
	numero_cuenta: string
	saldo: number
}

export default function Index() {

	const [bancos, setBancos] = useState<Bancos[]>([]); // State to store fetched data
	const fetchBancos = async () => {
		const response = await obtenerBancos();
		if (!response?.ok) {
			return setBancos([]);
		}
		const data = await response?.json();
		setBancos(data);
	}

	useEffect(() => {
		fetchBancos();
	}, []); // Fetch data on component mount

	/* if (!data.length) {
		return <div>Loading...</div>; // Display loading indicator while data is fetched
	} */
	const columnas = ["Cuenta", "Banco","Cuenta N°","Saldo","Acciones"]


	const tbody = bancos.map((banco) => {
		return [
		  <th scope="row" key={banco.tipo_cuenta}>{banco.tipo_cuenta}</th>,
		  <th key={banco.nombre}>{banco.nombre}</th>,
		  <th key={banco.numero_cuenta}>{banco.numero_cuenta}</th>,
		  <th key={banco.saldo}>{banco.saldo}</th>,
		  <td key={banco.id_cuenta}><Link to={banco.id_cuenta.toString()}><i className="bi bi-eye-fill"></i></Link></td>,
		];
	  });
	  
	  
	return (
		<Table columnas={columnas} tbody={tbody} />
	)
}
