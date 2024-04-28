
interface PaginationProps {
	currentPage: number;
	totalPages: number;
	isVisible: boolean;
	onPageChange: (pageNumber: number) => void;
  }
export default function Paginacion({ currentPage, totalPages, onPageChange,isVisible }: PaginationProps) {
	const isFirstPage = currentPage === 1;
  	const isLastPage = currentPage === totalPages;
	if (isVisible) {
		return null;
	}
	return (
		<div className="d-flex justify-content-end">
			<nav aria-label="...">
				<ul className="pagination pagination-sm">
					<li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
						<button
							className="page-link"
							onClick={() => onPageChange(currentPage - 1)}
							disabled={isFirstPage}
						>
							Previous
						</button>
					</li>
					{/* Generate page numbers dynamically */}
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
						<li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
							<button
								className="page-link"
								onClick={() => onPageChange(pageNumber)}
								aria-current={pageNumber === currentPage ? 'page' : undefined}
							>
								{pageNumber}
							</button>
						</li>
					))}
					<li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
						<button
							className="page-link"
							onClick={() => onPageChange(currentPage + 1)}
							disabled={isLastPage}
						>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
