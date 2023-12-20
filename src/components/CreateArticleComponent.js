import React, { useState, useEffect } from "react";
import { CreateArticle, GetAllArticles } from "../services/ArticleService";
import "react-toastify/dist/ReactToastify.css";

const CreateArticleComponent = () => { 

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
      } else {
        console.log("Failed to create an article");
      }
  }


  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Enter your article name:
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
          Enter information of your article:
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
          Create your article
        </div>
      </div>
    </>
  );
};

export default CreateArticleComponent;
