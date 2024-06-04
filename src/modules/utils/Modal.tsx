import { useEffect, useRef } from "react";

interface ModalProps {
	showModal: boolean;
	handleClose: () => void;
	children: React.ReactNode;
	titulo: string;
	buscador: React.ReactNode;
}
function Modal({ showModal, handleClose, children, titulo, buscador }: ModalProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleClose();
			}
		};

		if (showModal && inputRef.current) {
			inputRef.current.focus();
			document.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		  };
	}, [showModal]);

	if (!showModal) {
		return null;
	}

	return (

		<div className="modal" ref={inputRef}>
			<div className="modal-content">
				{buscador}
				{children}
				<div className="modal-footer">
					<button className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
				</div>
			</div>

		</div>

	)
}

export default Modal