# **Services Documentation**
This document gives insight on how the services are structured.

The services in this project are dedicated to sent information to the back-end or API to perform CRUD-actions.

<br><br>

## **Reading guide**
- [Article service](#article-service)


<br><br>

-------------------------------------------------------------------------------------

### **Article service**
The Article services primary use is to get the articles from the database and making new articles if requested. Currently the Article services has two function called **GetAllArticles** and **CreateArticle**.
<br><br>

- The **GetAllArticles** function is used to get all the articles from the database as data to use in the pages to view.  
- The **CreateArticle** function is used to create a new article and POST it in the the database. This function requires a **data** parameter to send the data to the Back-end or API. The data body has the variables: Title.

The code file can be found here: [ArticleService](https://github.com/Know-Hows/S3-Front-End/blob/main/src/services/ArticleService.js)
<br><br>

