import React, { useState, useEffect } from "react";
import { CreateArticle, GetAllArticles } from "../services/ArticleService";
import { createRoot } from "react-dom/client";
import TextToLinksConverter from "./EmbedComponent";
import LikesComponent from "./LikesComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";

const CreateArticleComponent = () => {
  const [articles, setArticles] = useState(null);
  var htmlArticleList;
  var htmlMakeArticleName;
  var htmlMakeArticleBody;

  useEffect(() => {
    async function AsignValue() {
      setArticles(await GetAllArticleTitles());
    }
    AsignValue();
  }, []);
  useEffect(() => {
    htmlArticleList = document.getElementById("articleList");
    htmlMakeArticleName = document.getElementById("makearticlenames");
    htmlMakeArticleBody = document.getElementById("makearticlebody");
  }, []);

  async function PostArticle() {
    let articleName = htmlMakeArticleName.value;
    let articleBody = htmlMakeArticleBody.value;
    if (articleName <= 0) {
      console.log("article name can't be empty");
      return;
    }

    let articlebody = {
      Title: articleName,
      Body: articleBody,
    };

    try {
      await CreateArticle(articlebody).then((response) => {
        if (response.id !== null) {
          console.log("Succesfully created a article");
          GetAllArticleTitles();
        } else {
          console.log("Failed to create a game");
        }
      });
    } catch (error) {}
  }

  const SetArticleList = (Articles) => {
    const root = createRoot(document.getElementById("articleList"));
  
    const articleRows = Articles.map((element) => {
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
  
    root.render(articleRows);
  };
  
  async function GetAllArticleTitles() {
    var articleTitles = [];
    await GetAllArticles().then((response) => {
      articleTitles = response;
      SetArticleList(articleTitles);
    });
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
          <tbody id="articleList" data-testid="CAC-ArticleList"></tbody>
        </table>
      </div>
    </>
  );
};

export default CreateArticleComponent;
