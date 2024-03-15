import axios from 'axios';
import StorageUtils from 'utils/storage.utils';

export const api = axios.create({
    baseURL: 'https://0676-138-117-165-251.ngrok-free.app/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

api.interceptors.request.use(
    async (config) => {
        const token = await StorageUtils.get('accessToken')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
