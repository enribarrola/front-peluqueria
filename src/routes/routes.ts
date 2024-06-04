export const routes = {
	LAYOUT: {
		ATC: "/atc/cliente",
		HOME: "/",
		LOGIN: "/login",
		CAJA_REGISTRADORA: "/caja-registradora",
		PROFILE: "/profile",
		TESORERIA: "/tesoreria/cuentas",
		LOGOUT: "/logout",
	},
	PADRE:{
		URL_ATC: "/atc",
		URL_TESORERIA: "/tesoreria",
		URL_CAJA_REGISTRADORA: "/caja-registradora",
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
		URL_DETALLE_CUENTA: "/cuentas/:id",
	},
	CAJA_REGISTRADORA: {
		URL_CAJA_REGISTRADORA: "/",
		URL_DETALLE_CAJA: "/caja-registradora/:id",
	},
}