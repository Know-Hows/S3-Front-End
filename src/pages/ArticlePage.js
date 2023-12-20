import React from "react";
import AllArticlesComponent from "../components/AllArticlesComponent";
import NavBar from "../components/NavBarComponent";
import Sidebar from "../components/SideBarComponent";

const ArticlePage = () => {

  

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