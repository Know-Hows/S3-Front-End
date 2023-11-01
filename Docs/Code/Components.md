# **Components Documentation**
This document gives insight on how the components are structured.

The components in this project are used to mainly seperate code and to re-use code. This makes the code easier to read and cleaner.

<br><br>

## **Reading guide**
- [Create Article component](#create-article-component)
- [Embed Component](#embed-component)

<br><br>

-------------------------------------------------------------------------------------

### **Create Article component**
The Create Article component is used to create a new article with the input values the user gives.

The code file can be found here: [CreateArticleComponent](https://github.com/Know-Hows/S3-Front-End/blob/main/src/components/CreateArticleComponent.js)

This component is seperated in multiple different functions, which each serve a different purpose. This part of the document will go over these functions from the top to the bottom. As such, first up are seEffects. <br><br>

UseEffects are so called React Hooks, which, depending on the type of Hook, can do various things that regular functions can't do. UseEffects are run every time the component renders, and as such it is used in our application to load or set certain variables before anything else can occur, as well as accessing external functions that have data that we absolutely need, such as database information. <br>

Next up, our regular functions come up, starting with async function PostArticle(). This function gathers information input by the user and prepares it to be added to our database, by passing it through to a function in a different component which actually manages the database connection regarding articles, or giving some information back if the article fails to post for any reason. <br>

Then comes the const SetArticleList(), which puts information from the database into a table to actually display it on the website later. This information is gathered through the useEffects as well as a function that will be discussed later. Additionally, SetArticleList() calls a component that is made to detect various kinds of links and change them to actually function as intended, such as making links to google's homepage clickable. <br>

Lastly for the functions in this component is async function GetAllArticleTitles(), which does as its name implies, and collects the titles of all articles that are currently within the database. It does this using a function from a different component. Additionally, it also collects the body of all articles.

Additionally, this component also renders something. It renders multiple input fields to allow users to input their own articles, as well as a button to actually send that data to the database. To finish things off, it loads a list of all articles in the database, displaying their title and body in the form of a table.

### **Embed component**

The Embed component is used to detect links in supplied text and change them to function as intended. It only has a single function, which will turn any http or https link into a clickable reference, and specific links such as ones that contain image file formats or youtube links will get their own changes. Images will be made to actually load into the website, albeit at a maximum size, and youtube videos get a similar embed but at a static size.


<br><br>

