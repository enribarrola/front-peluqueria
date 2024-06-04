

function Informacion() {
	return (
		<>
			<p>Tipo de comprobante</p>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="flexRadioDefault" id="ticket" />
				<label className="form-check-label" htmlFor="ticket">
					Ticket
				</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="flexRadioDefault" id="boleta" />
				<label className="form-check-label" htmlFor="boleta">
					Boleta
				</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="flexRadioDefault" id="factura" />
				<label className="form-check-label" htmlFor="factura">
					Factura
				</label>
			</div>
			<p>Numero Factura</p>
			<div className="input-group mb-3">
				<span className="input-group-text" id="numero-factura">
					<i className="bi bi-receipt-cutoff"></i>
				</span>
				<input
					id="numero-factura"
					type="text"
					className="form-control"
					readOnly
					value={"1000"}
				/>
			</div>
			<p>Fecha</p>
			<div className="input-group mb-3">
				<span className="input-group-text" id="fecha-comprobante">
					<i className="bi bi-calendar"></i>
				</span>
				<input
					type="date"
					className="form-control"
					readOnly
					value={new Date().toISOString().split('T')[0]}
				/>
			</div>
		</>
	)
}

export default Informacion