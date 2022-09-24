const axios = require('axios').default;
const baseUrl = 'http://localhost:4002/api/v1';


export const getData = async (url) => {
    try {
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

export const getDataByID = async (url, id) => {
    try {
        console.log(`${baseUrl}/${url}/${id}`);
        const getDataById = await axios.get(`${baseUrl}/${url}/${id}`);
        return getDataById;
    } catch (err) {
        console.error('fuck')
        throw new Error(err);
    }
}

export const updateData = async (url, id, params) => {
    try {
        const updateData = await axios.put(`${baseUrl}/${url}/${id}`, params);
        return updateData;
    } catch (err) {
        console.error('fuck')
        throw new Error(err);
    }
}


