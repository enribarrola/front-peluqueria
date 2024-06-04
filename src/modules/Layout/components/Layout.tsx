import '../../../App.css';
import React, { useState } from 'react';
import {Link,Outlet} from 'react-router-dom';
import { useAuthStore } from "../../../store/auth";
import { routes } from '../../../routes/routes';
function Layout() {
	const roles = useAuthStore((state) => state.roles);
	const [expanded, setExpanded] = useState(false);

	const toggleSidebar = () => {
	  setExpanded(!expanded);
	};
	
	return (
		<>
			<div className="wrapper">
				<aside id="sidebar" className={expanded ? 'expand' : ''}>
					<div className="d-flex">
						<button className="toggle-btn" type="button" onClick={toggleSidebar} >
							<i className="bi bi-grid"></i>
						</button>
						<div className="sidebar-logo">
							<Link to="/">Sistema GG</Link>
						</div>
					</div>
					<ul className="sidebar-nav">
						{roles.some(role => ["admin"].includes(role)) && <li className="sidebar-item">
							<Link to={routes.LAYOUT.ATC} className="sidebar-link">
								<i className="bi bi-person"></i>
								<span>ATC</span>
							</Link>
						</li>}
						<li className="sidebar-item">
							<Link to={routes.LAYOUT.CAJA_REGISTRADORA} className="sidebar-link">
								<i className="bi bi-cart4"></i>
								<span>Caja Registradora</span>
							</Link>
						</li>
						<li className="sidebar-item">
							<a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
								data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
								<i className="bi bi-box-arrow-in-right"></i>
								<span>Auth</span>
							</a>
							<ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
								<li className="sidebar-item">
									<a href="#" className="sidebar-link">Login</a>
								</li>
								<li className="sidebar-item">
									<a href="#" className="sidebar-link">Register</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
								data-bs-target="#tesoreria" aria-expanded="false" aria-controls="tesoreria">
								<i className="bi bi-bank"></i>
								<span>Tesoreria</span>
							</a>
							<ul id="tesoreria" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
								<li className="sidebar-item">
									<Link to={routes.LAYOUT.TESORERIA} className="sidebar-link">Cuentas</Link>
								</li>
								<li className="sidebar-item">
									<a href="#" className="sidebar-link">Register</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
								data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
								<i className="bi bi-calendar4-week"></i>
								<span>Multi Level</span>
							</a>
							<ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
								<li className="sidebar-item">
									<a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
										data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
										Two Links
									</a>
									<ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
										<li className="sidebar-item">
											<a href="#" className="sidebar-link">Link 1</a>
										</li>
										<li className="sidebar-item">
											<a href="#" className="sidebar-link">Link 2</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a href="#" className="sidebar-link">
								<i className="bi bi-bell-fill"></i>
								<span>Notification</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a href="#" className="sidebar-link">
								<i className="bi bi-gear-wide"></i>
								<span>Setting</span>
							</a>
						</li>
					</ul>
					<div className="sidebar-footer">
						<Link to="/logout" className="sidebar-link">
							<i className="bi bi-box-arrow-left"></i>
							<span>Logout</span>
						</Link>
					</div>
				</aside>
				<div className="main p-3">
					
						<Outlet />
					
				</div>
			</div>
			
		</>
	)
}

export default Layout