import axios from 'axios'

axios.defaults.baseURL = "/api";
export let getUserList = function (val) {
    return axios.get('/getUserList', { params: { CurrentPage: val } });
}

export let addUser = function (data) {
    return axios.post('/addUser', data);
}