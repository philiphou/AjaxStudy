// 1.引入 express
const express = require('express')
    // 2. 创建对象
const app = express();
// 3.创建路由规则
// request 是对请求报文的封装； respnse 是对响应报文的封装
app.all('/server-delay', (request, response) => {
        // 设置一个响应头，设置允许跨域
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Headers", "*")
            // 加一个定时器
        setTimeout(() => { // 设置一个响应：
            let data = { name: "beijing" }
            response.send(JSON.stringify(data))
        }, 20)
    })
    // 设置jQuery 响应
app.all('/server-jquery', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let data = { name: "yunhui", age: 30, home: "beijing" }
    res.send(JSON.stringify(data))
})

app.post('/server', (request, response) => {
        // 设置一个响应头，设置允许跨域
        response.setHeader("Access-Control-Allow-Origin", "*")
            // 设置一个响应：
        response.send('hello json hphilip')
    })
    // 设置所有请求都可以接受处理
    // app.all('/server', (request, response) => {
    //     // 设置一个响应头，设置允许跨域
    //     response.setHeader("Access-Control-Allow-Origin", "*")
    //         // 设置接受任何请求头信息
    //     response.setHeader('Access-Control-Allow-Headers', "*")
    //         // 设置一个响应：
    //     response.send('hello AJAX POST')


// })
app.all('/json-server', (request, response) => {
    // 设置一个响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Headers", "*")
        // 设置一个响应数据对象：
    const student = { name: "philip" }
        // 对响应数据对象做一个转换：进行字符串转换
    let str = JSON.stringify(student)
        //  response.send 传递的参数只能是字符串，所以要进行json转换
    response.send(str)

})

//4.监听端口启动服务
app.listen(8000, () => { console.log('server is running at port 8000....') })