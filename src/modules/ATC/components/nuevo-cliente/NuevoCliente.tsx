import { Link } from "react-router-dom";
import AgregarCliente from "../AgregarCliente";


export default function NuevoCliente() {
  return (
	<>
	<Link to={".."} relative="path">atras</Link>
	<AgregarCliente/>
	
	</>
  )
}
