import React from 'react'
import { addThousandSeparators } from '../../../utils/helpers'
interface ResumenPagoProps {
	subtotal: number
	iva: number
	total: number
}

function ResumenPago({ subtotal, iva, total }: ResumenPagoProps) {
	return (
		<>
			<div className="d-flex justify-content-between">
				<span>Subtotal:</span>
				<span>{addThousandSeparators(subtotal)} Gs.</span>
			</div>
			<div className="d-flex justify-content-between">
				<span>IVA(10%):</span>
				<span>{addThousandSeparators(iva)} Gs.</span>
			</div>
			<hr />
			<div className="d-flex justify-content-between font-weight-bold">
				<span>Total:</span>
				<span>{addThousandSeparators(total)} Gs.</span>
			</div>
		</>
	)
}

export default ResumenPago