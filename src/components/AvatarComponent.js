
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
function AvatarComponent() {
  const { user, logout} = useAuth0();
  
  return (
    
      <img 
        src={user.picture}
        alt="logo"
        className=" rounded-full object-fill h-10 w-10"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      />
    
  );
}
export default AvatarComponent;