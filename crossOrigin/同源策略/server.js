const express = require('express')
const app = express()
app.get("/apple", (req, res) => {
    // 响应一个页面
    res.sendFile(__dirname + "/index.html")
})
app.get("/data", (req, res) => {
    // 响应一个页面
    res.send("用户数据")
})
app.listen(8100, () => {
    console.log("server is running at 8100 port")
})