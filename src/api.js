//não passe path pro 'axios', assim o js entende que ele está na pasta node_modules 
import axios from 'axios' 

const api = axios.create({
  baseURL: 'https://api.github.com',
})


export default api;

/**
  
  class Api {
    static async getUserInfo(username){
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(response)
      } catch(err) {
        console.warn(err);
      }
    }
  }
*/