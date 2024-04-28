import TabDetalles from "./TabDetalles";
import TabFicha from "./TabFicha";
import "../../index.css"
import { useClienteStore } from "../../../../store/cliente";
import React, { Suspense, useState } from "react";

export default function Tabs() {
	const cliente = useClienteStore((state) => state.cliente);
	const LazyTabDetalles = React.lazy(() => import("./TabDetalles"));
	const LazyTabFicha = React.lazy(() => import('./TabFicha'));
	const [datosCargadosFicha, setDatosCargadosFicha] = useState(false);
	const handleBtn = () => {
		setDatosCargadosFicha(true);
	}
	return (
		<>
			<div className="card">
				<h5 className="card-header">
					Cliente - {cliente?.fantasia}
				</h5>
				<div className="card-body">
					<nav>
						<div className="nav nav-tabs" id="nav-tab" role="tablist">
							<button className="nav-link active" id="nav-general-tab" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true">General</button>
							<button className="nav-link" id="nav-ficha-tab" data-bs-toggle="tab" data-bs-target="#nav-ficha" type="button" role="tab" aria-controls="nav-ficha" aria-selected="false" onClick={handleBtn}>Ficha</button>
						</div>
					</nav>
					<div className="tab-content" id="nav-tabContent">
						<div className="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab" tabIndex={0}>
							<Suspense fallback={<div>Loading...</div>}>
								<LazyTabDetalles />
							</Suspense>
						</div>

						<div className="tab-pane fade" id="nav-ficha" role="tabpanel" aria-labelledby="nav-ficha-tab" tabIndex={0}>
						{datosCargadosFicha && (
							<Suspense fallback={<div>Loading...</div>}>
								<LazyTabFicha />
							</Suspense>
						)}
						</div>
					</div>
				</div>
			</div>
		</>

	)
}
