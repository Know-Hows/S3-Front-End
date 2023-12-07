import LoginButton from "./LoginButtonComponent";
import LogoutButton from "./LogoutButtonComponent";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpButton from "./SignUpButtonComponent";
import ImageLogo from "../Images/KnowHows Logo.png";
import AvatarComponent from "./AvatarComponent";
import { useState, useEffect, useRef } from "react";
const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();
    const [showAlert, setShowAlert] = useState(false);
    const [alertClass, setAlertClass] = useState("slide-out");


    const prevAuthState = useRef(isAuthenticated);

    useEffect(() => {
        
        if (isAuthenticated && !prevAuthState.current) {

            setShowAlert(true);
            setAlertClass("slide-in");

            const timer = setTimeout(() => {
                setAlertClass("slide-out");
                setTimeout(() => setShowAlert(false), 500);
            }, 5000);

            return () => clearTimeout(timer);
        }

        prevAuthState.current = isAuthenticated;
    }, [isAuthenticated]);

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(scroll);
        };

        window.addEventListener('scroll', handleScroll);
        

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [isTransparent, setIsTransparent] = useState(false); // New state for background transparency

    useEffect(() => {
        const handleScrolltransparency = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.clientHeight;

            if (totalScroll > windowHeight) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };

        window.addEventListener('scroll', handleScrolltransparency);

        return () => window.removeEventListener('scroll', handleScrolltransparency);
    }, []);

    return (

        <div className={`sticky top-0 h-20 z-50 flex flex-row justify-between items-center shadow-2xl shadow-black ${isTransparent ? 'bg-gradient-to-b from-deepBlue to-transparent shadow-none' : 'bg-deepBlue shadow-2xl shadow-black text-white'}`}>
            <div className="flex flex-row items-center gap-2 pr-4">
                <Link to="/" data-testid="ImageToWelcomePage">
                    <img
                        src={ImageLogo}
                        alt="logo"
                        className="h-14 w-14 rounded-full object-fill ml-2 "
                    />
                </Link>
                <Link
                    className={`p-2 no-underline hover:underline active:underline active:border-4 flex flex-row font-extrabold text-2xl active:border-x-pink-500 ${isTransparent ? 'text-white': 'text-white'}`}
                    to="/"
                >
                    Know-Hows
                </Link>
            </div>

            <div className="flex flex-row items-center gap-2 pr-4">
                {isAuthenticated && (
                    <div className="flex gap-1 ">
                        <Link
                            className={`p-2 font-bold no-underline hover:underline active:underline active:border-4 flex flex-row active:border-x-pink-500 ${isTransparent ? 'text-white': 'text-white'}`}
                            to="/ArticlePage"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                            </svg>
                            Articles
                        </Link>
                        <LogoutButton />
                        <AvatarComponent />
                    </div>
                )}
                {!isAuthenticated && (
                    <div className="flex gap-2">
                        <LoginButton /> <SignUpButton />
                    </div>
                )}
            </div>
            {showAlert && (
                <div
                    className={`fixed top-16 left-0 right-0 bg-green-500 text-white text-center py-2 rounded-bl-lg rounded-br-lg ${alertClass}`}
                >
                    Welcome back, {user.nickname || "User"}!
                </div>
            )}
            <div className="transition-all duration-500 ease-in-out fixed top-0 z-50 w-full bg-gray-300" style={{ height: '5px', width: `${scrollProgress * 100}%` }}></div>

        </div>

    );
};

export default NavBar;
