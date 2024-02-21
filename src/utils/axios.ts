import axios from "axios";

const Axios = axios.create({
    baseURL : 'https://dummyjson.com/',
    timeout: 6000,
    headers : {
        "Authorization" : 'Bearer',
        "Content-Type" : 'application/json'
    }
})

export {Axios}