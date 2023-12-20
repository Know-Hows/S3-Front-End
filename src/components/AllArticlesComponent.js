import React, { useState, useEffect } from "react";
import { GetAllArticles } from "../services/ArticleService";
import TextToLinksConverter from "./EmbedComponent";
import LikesComponent from "./LikesComponent";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AllArticlesComponent = () => {
  const [articleTitles, setArticleTitles] = useState([]);
  const navigate = useNavigate();

    function GoToCreateArticlePage() {
        navigate("/CreateArticlePage");
    }
  

  useEffect(() => {
    GetAllArticleTitles();
  }, []);

  function SetArticleList() {
    return articleTitles.map((element) => {
      const articleTitle = element.title;
      let articleBody = element.body;

      if (articleBody) {
        articleBody = TextToLinksConverter(articleBody);
      }

      const likesComponent = <LikesComponent articleId={element.id} />;

      return (
        <>
          
          
          <div key={element.id} className="w-full p-4 h-full md:ml-32 ">
            <div className="bg-lightBlue text-white rounded-xl overflow-hidden h-full shadow shadow-black border-4 border-lightBlue hover:border-4 hover:border-x-deepBlue">
              <div>
                <div className="md:flex-shrink-0">
                  {/* Add any image or icon for the article if needed */}
                  {/* <img className="h-48 w-full object-cover md:w-48" src="article-image.jpg" alt="Article" /> */}
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-white font-semibold">
                    {articleTitle}
                    <br></br>
                    <br></br>
                    {articleBody}
                  </div>
                  <div className="mt-4">{likesComponent}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      
    });
    
  }

  async function GetAllArticleTitles() {
    try {
      const response = await GetAllArticles();
      setArticleTitles(response);
    } catch (error) {
      console.error("Error getting article titles:", error);
    }
  }
  // grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4
  return (
    <>
      <div className="container">
        <h3 className="p-3 md:ml-32 text-center" data-testid="CAC-ArticleNames">
          Articles
        </h3>
        <div className="btn btn-primary" onClick={GoToCreateArticlePage}>
                Create Article
            </div>
        <div className="flex flex-row flex-wrap">
          {SetArticleList()}
        </div>
      </div>
    </>
  );
};

export default AllArticlesComponent;
