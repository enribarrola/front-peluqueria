interface TableProps {
	columnas: String[] // Array of JSX elements for the table header
	tbody: React.ReactNode[]; // Array of rows, each row being an array of JSX elements
	MensajePredeterminado?: string; // Default message to show when tbody is empty
}
export default function Table({ columnas, tbody, MensajePredeterminado }: TableProps) {

	return (
		
				<table className="table table-striped table-hover table-bordered">
					<thead className="table-dark">
						<tr>
							{columnas.map((columna, index) => (
								<th key={index} scope="col">{columna}</th>
							))
							}
						</tr>
					</thead>
					<tbody>
						{tbody?.length ? (
							tbody.map((row, index) => (
								<tr key={index}>
									{row}
								</tr>
							))
						) : (
							<tr>
								<td colSpan={6}>{MensajePredeterminado || "No se encontraron datos."}</td>
							</tr>
						)}
					</tbody>
				</table>
		
	);
}
