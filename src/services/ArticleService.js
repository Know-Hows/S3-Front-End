import axios from "axios";
const api = 'https://localhost:7119/api';

export async function GetAllArticles(){
    try {
        console.log("service getAllArticles");
        const response = await axios.get(`${api}/Article`
            );
        console.log("response", response);
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function CreateArticle(data){
    try {
        const response = axios.post(`${api}/Article`, data)
        .catch(function (error) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                // The request was made but no response was received
                console.log(error.request);
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}