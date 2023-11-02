import axios from "axios";
const api = process.env.REACT_APP_SERVER_URL;

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
      console.log(likeCreditParam)
      const response = await axios.put(`${api}/Article/updateLikes/${id}?likeCredit=${likeCreditParam}`)
      return response;
    } catch (error) {
      console.log(error);
    }
  }