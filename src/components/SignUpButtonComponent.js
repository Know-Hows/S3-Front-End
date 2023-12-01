import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button 
      className="text-deepBlue rounded-full py-1 px-2 border-4 font-bold hover:border-4 hover:border-x-pink-500 bg-white hover:rounded-lg"
      onClick={() => 
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
