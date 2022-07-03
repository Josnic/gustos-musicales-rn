import axios from 'axios';

const API = axios.create({
    baseURL: 'http://192.168.0.5:8080/apiv1/',
    timeout: 4000,
    headers: {'apiKey': '1d68089ac25a6bfe801546e561339e0c6d452b1e'}
})

const errorHandler = (error) => {
    if (error.response){
        return {
            type: "response",
            error: error.response
        }
    }else if (error.request){
        return {
            type: "request",
            error: error.request
        }
    }else{
        return {
            type: "unknown",
            error: error.message
        }
    }
}

export const clientMethod = {
    post: async (path, payload) => {
        try{
            return await API.post(path, payload);
        }catch(e){
            return {
                data: errorHandler(e),
                error: true
            }
        }
        
    },
    get: async (path) => {
        try{
            return await API.get(path);
        }catch(e){
            return {
                data: errorHandler(e),
                error: true
            }
        }
    }
}