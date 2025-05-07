console.log("This is routing in Node js");
import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('<h1>This is server </h1>')
})
const PORT = 1232;
server.listen(PORT, () => console.log(`server is running on ${PORT}`))