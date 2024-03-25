import axios from 'axios'

export default function requestApi(endpoint, method, body, responseType = 'json') {
    const headers = {
        "Access-Control-Allow-Origin": "*"
    }

    const instance = axios.create({ headers });

    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('user_token')
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }
            return config;
        },
        (error) => {
            return Promise.reject(error)
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        async (error) => {
            return Promise.reject(error.response)
        }
    )

    return instance.request({
        method: method,
        url: `${process.env.REACT_APP_API_URL}${endpoint}`,
        data: body,
        responseType: responseType
    })
}