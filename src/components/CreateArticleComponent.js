import React, { useState, useEffect } from "react";
import { CreateArticle, GetAllArticles } from "../services/ArticleService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        htmlArticleList = document.getElementById('articleList');
        htmlMakeArticleName = document.getElementById('makearticlenames');
        htmlMakeArticleBody = document.getElementById('makearticlebody');
    }, []);

    async function PostArticle () {
        let articleName = htmlMakeArticleName.value;
        let articleBody = htmlMakeArticleBody.value;
        if(articleName <= 0) {
            console.log("article name can't be empty")
            ChangeMessage(2);
            return;
        }

        let articlebody = {
            Title: articleName,
            Body: articleBody
        };

        console.log("New article: ", articleBody);

        try {
            await CreateArticle(articlebody).then((response) => {
                if(response.id !== null) {
                    console.log("Succesfully created a article");
                    toastMessage("Succes", "Succesfully created a game.");
                    GetAllArticleTitles();
                } else {
                    console.log("Failed to create a game");
                }
            });
        } catch (error) {
        }
    }

    async function SetArticleList(Articles) {
        htmlArticleList.innerHTML = "Loading data"
        Articles.forEach(element => {

            let articleTitle = element.title

            htmlArticleList.innerHTML += '<tr><td>' + articleTitle + '</td></tr>';
        });        
    }

    async function GetAllArticleTitles() {
        var articleTitles = []
        await GetAllArticles().then((response) => {
            articleTitles = response
            SetArticleList(articleTitles);
        });
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

    async function toastMessage(type, message) {
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
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Make article names</span>
                <input id='makearticlenames' data-testid="CAC-MakeArticleNames" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Make article body</span>
                <input id='makearticlebody' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div>            
                <div className="btn btn-info" data-testid='CAC-MakeArticleButton' onClick={PostArticle}>Make articles</div>
            </div>

            <div className="container">
                <h3 className="p-3 text-center"  data-testid="CAC-ArticleNames">Article Names</h3>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Articles</th>
                    </tr>
                </thead>
                <tbody  id="articleList" data-testid="CAC-ArticleList">
                </tbody>
                </table>
            </div>
        </>
    );
}

export default CreateArticleComponent;