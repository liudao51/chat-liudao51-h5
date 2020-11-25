import React from 'react';
import Login from '../pages/user/login/Login';
import Error404 from '../pages/error/Error404';

/**
 * function: 路由配置
 */
/*
//这里的path都是相对于pages文件，例如：
    routes:[{
        path:'/box',  //指定路由地址(url)
        component:'Box/index'  //引用的组件路径
    }]
//引用的就是pages文件夹下 Box/index.js文件
*/
const routes = [
    {
        path: "/user/login",
        component: Login,
        exact: true
    },
    {
        path: "/error/404",
        component: Error404,
        exact: true
    }
];

export default routes;
