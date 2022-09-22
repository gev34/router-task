import { Navigate , useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
   // console.log({user})
   //console.log(location)
    if(!user) {
        return <Navigate to = '/login' state={{from:location}}/>
    }
    return children
}

export {RequireAuth}