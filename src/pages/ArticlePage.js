import React from "react";
import { useNavigate } from "react-router-dom";
import AllArticlesComponent from "../components/AllArticlesComponent";
import NavBar from "../components/NavBarComponent";
import Sidebar from "../components/SideBarComponent";

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
        <NavBar/>
        <Sidebar />
            <div className="btn btn-primary" onClick={GoToHome}>
                Go home
            </div>
            <div className="btn btn-primary" onClick={GoToCreateArticle}>
                Create an article
            </div>

            
                <AllArticlesComponent></AllArticlesComponent>
            
        </>
    )
}

export default CreateArticlePage