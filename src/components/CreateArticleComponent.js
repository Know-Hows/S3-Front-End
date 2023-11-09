import React, { useState, useEffect } from "react";
import { CreateArticle, GetAllArticles } from "../services/ArticleService";
import TextToLinksConverter from "./EmbedComponent";
import LikesComponent from "./LikesComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";

const CreateArticleComponent = () => {
  const [articleTitles, setArticleTitles] = useState([]);

  useEffect(() => {
    GetAllArticleTitles();
  }, []);

  async function PostArticle() {
    const articleNameInput = document.getElementById("makearticlenames");
    const articleBodyInput = document.getElementById("makearticlebody");

    if (!articleNameInput || !articleBodyInput) {
      console.log("Article name or body input not found");
      return;
    }

    const articleName = articleNameInput.value;
    const articleBody = articleBodyInput.value;

    if (articleName <= 0) {
      console.log("Article name can't be empty");
      return;
    }

    const articleBodyObject = {
      Title: articleName,
      Body: articleBody,
    };
      const response = await CreateArticle(articleBodyObject);

      if (response.id !== null) {
        console.log("Successfully created an article");
        GetAllArticleTitles();
      } else {
        console.log("Failed to create an article");
      }
  }

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
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Make article names
        </span>
        <input
          id="makearticlenames"
          data-testid="CAC-MakeArticleNames"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Make article body
        </span>
        <input
          id="makearticlebody"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div>
        <div
          className="btn btn-info"
          data-testid="CAC-MakeArticleButton"
          onClick={PostArticle}
        >
          Make articles
        </div>
      </div>

      <div className="container">
        <h3 className="p-3 text-center" data-testid="CAC-ArticleNames">
          Article Names
        </h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Articles</th>
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

export default CreateArticleComponent;
