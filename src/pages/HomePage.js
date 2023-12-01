import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButtonComponent";
import LogoutButton from "../components/LogoutButtonComponent";
import Profile from "../components/ProfileComponent";

import { GetToken } from "../services/TokenService";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";  
import Navbar from "../components/NavBarComponent";

const HomePage = () => {    
    return (
        <div >
            <Navbar/>
        </div>
    );
}

export default HomePage