const axios = require("axios");
require("dotenv").config();


exports.handler = (event, context, callback) =>{
    const mailchimpApi = process.env.GATSBY_MAILCHIMP_API;
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
                error : err.response.data
            })
        })
    })
}