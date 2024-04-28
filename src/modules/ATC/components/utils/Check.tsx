interface InputFormularioProps {
	label: string;
	isChecked: boolean;
}

export default function Check({label,isChecked}: InputFormularioProps) {
	return (
		<div className="form-check mb-3">
			<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} disabled/>
				<label className="form-check-label" htmlFor="flexCheckChecked">
					{label}
				</label>
		</div>
	)
}
