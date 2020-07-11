const axios = require('axios');

export const getCategories = (setCategories) => {
    
  const options = {
    headers:{
      "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjA2NmNhNjIyMzNmMzE3Zjg3NGY4YTkiLCJpYXQiOjE1OTQyNTY4Njh9.4ralXhOhzl4hZVLiL0iR9JUIouAh1INJFe0atI3O4xk"
    }
  }

  axios.get('/categories', options)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));


}