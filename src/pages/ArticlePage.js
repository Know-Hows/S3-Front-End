import React from "react";
import { useNavigate } from "react-router-dom";
import AllArticlesComponent from "../components/AllArticlesComponent";
import NavBar from "../components/NavBarComponent";
import Sidebar from "../components/SideBarComponent";

const ArticlePage = () => {
    const navigate = useNavigate();

    function GoToHome() {
        navigate("/");
    }
    function GoToCreateArticle() {
        navigate("/CreateArticlePage");
    }

    return (
      <>
        <div>
          <NavBar />
          <div className="flex">
            <Sidebar />
            <AllArticlesComponent />
          </div>
          
        </div>
      </>
    );
}

export default ArticlePage