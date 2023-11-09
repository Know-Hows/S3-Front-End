import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButtonComponent";
import LogoutButton from "../components/LogoutButtonComponent";
import Profile from "../components/ProfileComponent";

import { GetToken } from "../services/TokenService";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const HomePage = () => {    
    return (
        <>
            <li className="nav-item p-3 fs-5">
                <Link to="/CreateArticle">
                    <p className="h5">New article</p>
                </Link>
            </li>
            <div>
                <LoginButton/>
            </div>
            <div>
                <LogoutButton/>
            </div>
            <div>
                <Profile/>
            </div>
            <div>
                <button onClick={GetToken}></button>
            </div>
        </>
    );
}

export default HomePage