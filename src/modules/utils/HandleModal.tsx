import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import { useProductoStore } from '../../store/productoStore';
interface SearchProps {
	placeholder: string
	children: React.ReactNode
	buscador: React.ReactNode
}
import './../Caja/css/index.css'
import { useClienteStore } from '../../store/cliente';

function HandleModal({ placeholder, children, buscador }: SearchProps) {

	const [showModal, setShowModal] = useState(false);
	const setProductos = useProductoStore((state) => state.setProductos);
	const setClientes = useClienteStore((state) => state.setClientes);

	const handleShow = () => setShowModal(true);
	const handleClose = () => {
		setProductos([]);
		setClientes([]);
		setShowModal(false);
	}

	return (
		<>
		{/* <div className="input-group mb-3">
			<span className="input-group-text" id="handle-modal">
				<i className="bi bi-search"></i>
			</span>
			<input
				type="text"
				className="form-control"
				placeholder={placeholder}
				aria-describedby="handle-modal"
				name="cualquiercosa"
				onClick={handleShow}
				readOnly={true}
			/>
		</div> */}
		<button className="search-button" onClick={handleShow}>
      <span className="search-icon">🔍</span> {placeholder}
    </button>
		<Modal titulo={placeholder} showModal={showModal} handleClose={handleClose} buscador={buscador}>
			{children}
		</Modal>
		</>
	)
}

export default HandleModal