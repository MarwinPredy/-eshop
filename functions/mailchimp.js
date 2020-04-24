const axios = require("axios");
require("dotenv").config();

const API_ENDPOINT = process.env.GATSBY_API_KEY;

exports.handler = (event, context, callback) =>{
    const mailchimpApi ="e8c0b36fd8633473f9ab73fce1c700b4-us8";
    const memberListId ="08eea33d75";

    const formData = JSON.parse(event.body);
    //error

    //event.httpMethod (controle de la methode POST/GET etc)

    const data = {
        email_address: formData.email,
        status: "subscribed"
    }

    axios.post(`https://usX.api.mailchimp.com/3.0/lists/${memberListId}/members`, data, {
        headers:{
            'content-Type': 'application-json',
            'Authorization': `apikey ${mailchimpApi}`
        }
    })
    .then((res)=>{
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                status :"Members successfully added"
            })
        })
    })
    .catch((err)=>{
        callback(null, {
            statusCode: err.status,
            body: JSON.stringify({
                error : err
            })
        })
    })
}