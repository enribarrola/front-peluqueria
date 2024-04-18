import React from 'react'
import AgregarCliente from './AgregarCliente'
interface ModalProps  {
	showModal: boolean;
	handleClose: () => void;
}
const ModalRegistrarCliente: React.FC<ModalProps> = ({ showModal, handleClose }) => {
  return (
	<div>
	{/* Modal de Bootstrap */}
	<div className={`modal ${showModal ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
	  <div className="modal-dialog" role="document">
		<div className="modal-content">
		  <div className="modal-header">
			<h5 className="modal-title">Modal de Ejemplo</h5>
			<button type="button" className="close" onClick={handleClose}>
			  <span>&times;</span>
			</button>
		  </div>
		  <div className="modal-body">
			<AgregarCliente />
		  </div>
		  <div className="modal-footer">
			<button type="button" className="btn btn-secondary" onClick={handleClose}>
			  Cerrar
			</button>
			{/* Agrega aquí otros botones de acción si es necesario */}
		  </div>
		</div>
	  </div>
	</div>
	{/* Fondo oscuro cuando el modal está abierto */}
	{showModal && <div className="modal-backdrop show" onClick={handleClose}></div>}
  </div>
  )
}
export default ModalRegistrarCliente;