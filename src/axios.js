import axios from "axios"

const instance = axios.create({
    baseURL: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
})

export default instance