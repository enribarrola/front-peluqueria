
interface InputFormularioProps {
	label: string;
	value: string;
	disabled: boolean;
}
export default function Input({ label, value, disabled }: InputFormularioProps) {
	return (
		<>
			<div className="mb-3">
				<label htmlFor={label} className="form-label">{label}</label>
				<input type="text" className="form-control" id={label} placeholder="" disabled={disabled} value={value} />
			</div>
		</>
	)
}
