let http=require('http');
let server = http.createServer((req, res)=>{
    console.log(req.headers);
    console.log(res.headers);
    res.statusCode = 201;
    res.write("learning http server\n");
    res.write("100 - 199    =    information\n")
    res.write("200 - 299    =    success\n")
    res.write("300 - 399    =    redirect\n")
    res.write("400 - 499    =    client side error\n")
    res.write("500 - 599    =    server side error\n")
    res.end();

})

server.listen(3000, ()=>{
    console.log("app is running at port 3000");
})C:\Users\saura\.VS Code\git\GLA-Backend-using-node.js\U\Lecture_13\http.js