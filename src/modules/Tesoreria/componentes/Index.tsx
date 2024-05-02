import { Link } from "react-router-dom";
import Table from "../utils/Table";
import React, { useEffect, useState } from 'react';

export default function Index() {
	const apiUrl = 'https://jsonplaceholder.typicode.com/users';

	const [data, setData] = useState<any[]>([]); // State to store fetched data

	useEffect(() => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((responseData) => setData(responseData));
	}, []); // Fetch data on component mount

	/* if (!data.length) {
		return <div>Loading...</div>; // Display loading indicator while data is fetched
	} */
	const columnas = ["ID", "Acciones"]


	const tbody = data.map((user,index) => {
		return [
		  <th scope="row" key={user.id}>{user.id}</th>,
		  <td key={user.name}><Link to={user.id.toString()}><i className="bi bi-eye-fill"></i></Link></td>,
		 
		];
	  });
	  
	  
	return (
		<Table columnas={columnas} tbody={tbody} />
	)
}
