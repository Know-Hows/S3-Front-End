import React from "react";
import { useNavigate } from "react-router-dom";
import AllArticlesComponent from "../components/AllArticlesComponent";

const CreateArticlePage = () => {
    const navigate = useNavigate();

    function GoToHome() {
        navigate("/");
    }
    function GoToCreateArticle() {
        navigate("/CreateArticlePage");
    }

    return(
        <>
            <div className="btn btn-primary" onClick={GoToHome}>
                Go home
            </div>
            <div className="btn btn-primary" onClick={GoToCreateArticle}>
                Create an article
            </div>

            <div>
                <AllArticlesComponent></AllArticlesComponent>
            </div>
        </>
    )
}

export default CreateArticlePage