// 1.引入 express
const express = require('express')
    // 2. 创建对象
const app = express();
// 3.创建路由规则
// request 是对请求报文的封装； respnse 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置一个响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
        // 设置一个响应：
    response.send('hello AJAX')


})

//4.监听端口启动服务
app.listen(8000, () => { console.log('server is running at port 8000....') })