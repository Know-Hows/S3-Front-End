import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllArticles } from "../services/ArticleService";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import CreateArticle from "../components/CreateArticleComponent";

const CreateArticlePage = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState(null);

    function GoToHome() {
        navigate("/");
    }

    useEffect(() => {
        async function AsignValue() {          
          setArticles(await GetAllArticles());
        }
        AsignValue();
    }, []);

    return(
        <>
            <div className="btn btn-primary" onClick={GoToHome}>
                Go home
            </div>

            <div>
                <CreateArticle articles={articles}></CreateArticle>
            </div>
        </>
    )
}

export default CreateArticlePage