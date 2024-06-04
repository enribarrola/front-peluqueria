import { useCajaStore } from "../../../store/cajaStore"



function DatoCliente() {
    const cliente = useCajaStore((state) => state.caja.cliente);
    return (
        <>
            {cliente.fantasia ? (
                <div className="fw-bold">
                    <span>Nombre: </span>
                    <span>{cliente.fantasia} </span>
                </div>
            ) : (
                <div className="fw-bold">
					<span>Nombre: </span>
					<span>Cliente no seleccionado.</span>
				</div>
            )}
        </>
    );
}

export default DatoCliente