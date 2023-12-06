import React, { useState, useEffect } from "react";
import { CreateArticle, GetAllArticles } from "../services/ArticleService";
import TextToLinksConverter from "./EmbedComponent";
import LikesComponent from "./LikesComponent";
import "react-toastify/dist/ReactToastify.css";

const AllArticlesComponent = () => {
  const [articleTitles, setArticleTitles] = useState([]);

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
        <div key={element.id} className="w-full p-4 h-full ml-32">
          <div className="bg-lightBlue text-white rounded-xl overflow-hidden h-full">
            <div>
              <div className="md:flex-shrink-0">
                {/* Add any image or icon for the article if needed */}
                {/* <img className="h-48 w-full object-cover md:w-48" src="article-image.jpg" alt="Article" /> */}
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">{articleTitle}</div>
                <div className="mt-4">{likesComponent}</div>
              </div>
            </div>
          </div>
        </div>
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

  return (
    <>
      <div className="container">
        <h3 className="p-3 ml-32 text-center" data-testid="CAC-ArticleNames">
          Articles
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SetArticleList()}
        </div>
      </div>
    </>
  );
};

export default AllArticlesComponent;
