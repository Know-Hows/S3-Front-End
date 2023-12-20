import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="text-deepBlue rounded-full py-1 px-2  font-bold border-4 hover:border-4 hover:border-x-pink-500 bg-white hover:rounded-lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;