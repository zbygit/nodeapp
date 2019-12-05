let fs = require('fs'), url = require("url"), http = require('http');
let server = (req, res) => {
    // 获取请求的url相关内容
    let { pathname, query } = url.parse(req.url, true);
    let methods = req.method;
    if (pathname === '/getUserList' && methods === 'GET') {
        fs.readFile('./data/user.json', 'utf8', (error, data) => {

            let CurrentPage = +query.CurrentPage;
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                res.end("暂无该方法");
            } else {
                res.writeHead(200, { 'Content-Type': "text/plain;charset=utf-8;" });
                let currentdate = JSON.parse(data).slice((CurrentPage - 1) * 15, CurrentPage * 15);
                console.log(currentdate);
                
                let resultData = {
                    num: JSON.parse(data).length,
                    data: currentdate

                }
                res.end(JSON.stringify(resultData));
            }
        })

    }


    if (pathname === '/addUser' && methods === 'POST') {
        // 使用req.on方法将传递过来的参数赋值给一个变量
        let rece;
        req.on('data', function (data) {
            rece = data
        });
        req.on('end', function () {
            //读取文件，再写入文件
            fs.readFile('./data/user.json', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                    res.end("添加失败");
                } else {
                    //读取的json是字符串格式的，需要转成对象格式的操作
                    let oldData = JSON.parse(data),

                        receData = JSON.parse(rece);

                    let newdatas = {
                        id: 0,
                        userName: "",
                        time: new Date().toLocaleString( ),
                        phone: "",
                        describe: "",
                        ...receData
                    }
                    newdatas.id = oldData.length + 1;

                    oldData.push(newdatas);

                    fs.writeFile('./data/user.json', JSON.stringify(oldData), 'utf8', (err) => {
                 
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                            res.end("添加失败");
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
                            res.end("添加成功");
                        }
                    })


                }
            })

        });
    }


}
// 创建服务
http.createServer(server).listen(3000, () => {
    console.log('服务已启动');
})