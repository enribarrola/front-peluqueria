
	<div>
	{/* Modal de Bootstrap */}
	<div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} role="dialog" data-bs-backdrop="static" style={{ display: showModal ? 'block' : 'none' }}>
	  <div className="modal-dialog modal-lg">
		<div className="modal-content">
		  <div className="modal-header">
			<h5 className="modal-title w-100">
			{buscador}
			</h5>
			<button type="button" className="btn-close" onClick={handleClose}>
			</button>
		  </div>
		  <div className="modal-body">
			{children}
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