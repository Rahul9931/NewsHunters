import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=29337f0874714e63b8c7e29abe9c28a7'
const getTopHeadline = api.get('/top-headlines'+apiKey)

export default{
    getTopHeadline
}