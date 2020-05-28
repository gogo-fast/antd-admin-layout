import axios from 'axios';


function getUserList(page, size) {
    return axios.get(`http://127.0.0.1:8000/v1/user/list?page=${page}&size=${size}`)
}


export {getUserList}
