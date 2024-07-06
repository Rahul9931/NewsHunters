
const getByCategory = (category)=>fetch('https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey=29337f0874714e63b8c7e29abe9c28a7')

export default{
    getByCategory
}