import {createRouter,createWebHistory}from 'vue-router'


import HomePage from '../views/Homepage'
import UserPage from '../views/Userspage'
import NotFound from '../views/NotFound'
import SignUp from '../views/Signup'
import Login from '../views/Login'


const router = createRouter({
    history:createWebHistory(),
        routes:[
            {
                path:'/',
                name:'Home',
                component:HomePage
            },
            {
                path:'/user',
                name:'Users',
                component:UserPage
            },
            {
                path:'/:catchAll(.*)',
                name:'NotFound',
                component:NotFound

            },
            {
                path:'/signup',
                name:'Signup',
                component:SignUp

            },
            {
                path:'/login',
                name:'Login',
                component:Login
            }
           
        ]
})

export default router