import axios from "axios";

var options = {
    method: 'POST',
    url: 'http://dev-n6hluorismz6kc2k.eu.auth0.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*'},
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'oMksqmnGMQjEHzDjMhLV3GqPE7Hin6T8',
      client_secret: 'DI0hFvrepmTbYnsP8fCmgDikOYqwGPoAJGgOXfcCXO-KWPMc7x3xz9apw13jJ4IW',
      audience: 'http://localhost:5201'
    })
  };

export async function GetToken(){
    try {
        console.log("service GetToken");
        const response = axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
        return response.data;
    } catch (error) {
        return [];
    }
}