import { useEffect } from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const profile = useAuthStore((state) => state.profile);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  useEffect(() => {
	logout();
	navigate("/login")
  }, []);
return (
	<>
	
	</>
)

}

export default Logout;