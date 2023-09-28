import React from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import CreateArticle from "../components/CreateArticleComponent";

const CreateArticlePage = () => {
    const navigate = useNavigate();

    function GoToHome() {
        navigate("/");
    }

    return(
        <>
            <div className="btn btn-primary" onClick={GoToHome}>
                Go home
            </div>

            <div>
                <CreateArticle></CreateArticle>
            </div>
        </>
    )
}

export default CreateArticlePage