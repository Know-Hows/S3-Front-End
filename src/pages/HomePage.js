import React from "react";
import { Link } from "react-router-dom";

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
        </>
    );
}

export default HomePage