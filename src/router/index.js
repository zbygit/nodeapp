import Vue from 'vue'
import Router from 'vue-router'
import addUser from '../components/user/addUser'
import userList from '../components/user/userList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "", name: "userList", component: userList },
    { path: "/addUser", name: "addUser", component: addUser },
    { path: "/userList", name: "userList", component: userList },
    
  ]
})
