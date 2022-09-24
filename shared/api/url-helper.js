const axios = require('axios').default;
const baseUrl = 'http://localhost:4002/api/v1';


export const getData = async (url, params) => {
    try {
        const getData = await axios.get(`${baseUrl}/${url}`, { params });
        return getData;
    } catch (err) {
        throw new Error(err);
    }
}

export const postData = async (url, params) => {
    try {
        const postData = await axios.post(`${baseUrl}/${url}`, params);
        return postData;
    } catch (err) {
        throw new Error(err);
    }
}