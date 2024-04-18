import Caja from "../modules/Caja/components/Caja";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
	const profile = useAuthStore((state) => state.profile);
	const logout = useAuthStore((state) => state.logout);
	const navigate = useNavigate();

	return (
		<>
			<Caja/>
		</>
	);
}

export default ProfilePage;
