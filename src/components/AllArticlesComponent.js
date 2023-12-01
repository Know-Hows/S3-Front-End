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
        <tr key={element.id}>
          <td>{articleTitle}</td>
          <td dangerouslySetInnerHTML={{ __html: articleBody || "" }}></td>
          <td>{likesComponent}</td>
        </tr>
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
        <h3 className="p-3 text-center" data-testid="CAC-ArticleNames">
          Articles
        </h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Article name</th>
            </tr>
          </thead>
          <tbody id="articleList" data-testid="CAC-ArticleList">
            {SetArticleList()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllArticlesComponent;
