#  ===================== Ajax 学习 ========================
1. Ajax 简介
    - AJAX 全称为 Asynchronous JavaScript And XML 就是异步的 JS 和 XML
    - 通过AJAX 可以在浏览器中向服务器发送异步请求，最大的优势是： 无刷新获取数据
    - AJAX 不是一门新的编程语言，而是一种将现有的标准组合在一起的新方式；
2. XML 可扩展标记语言
    - XML 被设计用来传输和存储数据
    - XML 和 HTML 类似，不同的是 HTML中都是预定义标签，而XML中没有预定义标签，全都是自定义标签，用来表示一些数据：比如： 
      一个学生数据： name ="孙悟空"； age = 18; gender="男"
      用XML 表示： 
        <student>
            <name>孙悟空</name>
            <age>18</age>
            <gender>男</gender>
        </student>
3. 现在的数据储存与传输已经改成了JSON格式；{"name":孙悟空，"age":18,"gender":男}
4. AJAX 优缺点
    优点: 1. 可以无需刷新页面与服务器进行通信
          2. 允许你根据用户事件来更新部分页面内容
    缺点： 1. 没有浏览历史，不能回退
          2. 存在跨域问题
          3. SEO 不友好 搜索引擎优化；
5. HTTP 协议： (Hypertext transport protocol) 超文本传输协议 详细规定了浏览器和万维网服务器直接互相通信的规则
    协议就是一种约定和规则；
    # 请求报文
        重点是格式与参数：
            行：  请求类型（GET/POST); URL 路径； HTTP/1.1 协议版本
            头： HOST:atguigu.com; 
                 Cookie: name=guigu; 
                 Content-type: application/x-www-form-urlencoded;
                 User-Agent: chrome 83
            空行

            请求体 : username=admin&password=admin
             

    # 响应报文

        行： HTTP/1.1 200 OK
        头 : Content-type: text/html; charset=utf-8
             Content-length:2048
             Content-encoding:gzip
        空行
        体:    <html>
                  .....
               </html>
    # Nodemon 帮助自动重启服务器的应用；
        1. 安装
            npm install -g nodemon
        2. 运行： 
            nodemon server.js
        3. 如果运行错误，可以尝试： 
                nodemon.cmd server.js 
                或者
                npx nodemon server.js
              

