const axios = require('axios').default;
const baseUrl = 'http://localhost:4002/api/v1';


export const getData = async (url) => {
    try {
        console.log("get data url:",`${baseUrl}/${url}`)
        const getData = await axios.get(`${baseUrl}/${url}`);
        return getData;
    } catch (err) {
        throw new Error(err);
    }
}

export const postData = async(url, params) => {
    try {
        const postData = await axios.post(`${baseUrl}/${url}`, params);
        return postData;
    }  catch (err) {
        console.error('fuck')
        throw new Error(err);
    }
}