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
        const response = axios.post(`${api}/Article`, data
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function UpdateLikes(id, likeCreditParam) {
    try {
        const response = await axios.put(`${api}/Article/updateLikes/${id}?likeCredit=${likeCreditParam}`)
        return response;
    } catch (error) {
        console.log(error);
    }
  }

export async function GetLikes(id) {
    try {
        const response = await axios.get(`${api}/Article/getLikes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
  }