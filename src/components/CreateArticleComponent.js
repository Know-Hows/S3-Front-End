import React, { useState, useEffect } from "react";
import { CreateArticle, GetAllArticles } from "../services/ArticleService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateArticleComponent = (props) => {

    async function PostArticle () {
        let articleName = document.getElementById('makearticlenames').value;
        console.log("getting new article name");

        if(articleName <= 0) {
            console.log("article name can't be empty")
            ChangeMessage(2);
            return;
        }

        let articlebody = {
            Title: articleName
        };

        try {
            await CreateArticle(articlebody).then((response) => {
                console.log(response);
                if(response.id !== null) {
                    console.log("Succesfully created a article");
                    toastMessage("Succes", "Succesfully created a game.");
                    SetArticleList(articleName);
                } else {
                    console.log("Failed to create a game");
                }
            });
        } catch (error) {
            console.log("Error", error);
        }
    }

    function SetArticleList(Articles) {
        Articles.forEach(element => {
            console.log(element)

            let articleTitle = element.title

            document.getElementById('articleList').innerHTML += '<tr><td>' + articleTitle + '</td></tr>';
            console.log("New article name: ", articleTitle);            
        });        
    }

    async function GetAllArticleTitles() {
        console.log("Get article titles")
        var articleTitles = []
        await GetAllArticles().then((response) => {
            articleTitles = response
            console.log(articleTitles)
        }) 
        return articleTitles;
    }

    function ChangeMessage(typeMessage){
        switch(typeMessage) {
            case 0:          
            toastMessage("error","Rounds can't be negative.")
              break;
            case 1:          
            toastMessage("error","Rounds can't be over 10.")
              break;
            case 2:            
              toastMessage("error","Players can't be less then 2.")
              break;
            case 3:            
                toastMessage("Succes","Succesfully created a game.")
              break;
            default:
              console.log("There isn't a switch case for this", typeMessage)
          } 
      }

    function toastMessage(type, message) {
        if (type === "error") {
          toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
        } else {
          toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
        }
      }

    return (
        <>
            <div>            
                <div className="btn btn-info" onClick={PostArticle}>Make articles</div>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Make article names</span>
                <input id='makearticlenames' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="container">
                <h3 className="p-3 text-center">Article Names</h3>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Articles</th>
                    </tr>
                </thead>
                <tbody  id="articleList">
                    {SetArticleList(props.articles)}
                </tbody>
                </table>
            </div>
        </>
    );
}

export default CreateArticleComponent;