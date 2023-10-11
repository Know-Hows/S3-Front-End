import axios from "axios";
const api = 'http://localhost:7119/api';

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
        const response = axios.post(`${api}/Article`, data
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}