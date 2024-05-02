export const routes = {
	LAYOUT: {
		ATC: "/atc/cliente",
		HOME: "/",
		LOGIN: "/login",
		REGISTER: "/register",
		PROFILE: "/profile",
		TESORERIA: "/tesoreria/cuentas",
		LOGOUT: "/logout",
	},
	PADRE:{
		URL_ATC: "/atc",
		URL_TESORERIA: "/tesoreria",
	},
	ATC: {
		URL_ATC: "atc",
		URL_LISTAR_CLIENTE: "/cliente",
		URL_NUEVO_CLIENTE: "/cliente/nuevo",
		URL_DETALLE_CLIENTE: "/cliente/:id",
		NUEVO_CLIENTE: "nuevo"
	},
	TESORERIA: {
		URL_TESORERIA: "/cuentas",
	}
}