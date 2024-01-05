import axios from 'axios';

const authenticateUser  = (userName, password) => {
    return axios.post('https://jsonplaceholder.typicode.com/users', {
        userName: userName,
        email: password,
      }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*',
        }
      })
}

export {authenticateUser}
