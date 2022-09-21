import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {

    const {signOut} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <div>Contact Us</div>
            <button onClick={() => signOut(() =>navigate("/" , {replace : true}))}>Sign Out</button>
        </div>
    )
}
export {ContactPage }

//replace true -n istoryaic jnjuma u het galu hnaravourtyuny hanuma