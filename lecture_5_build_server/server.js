console.log("In this tutorial we are going to build a server");
import http from 'http';
const server = http.createServer((req, res) => {
    res.end("You requested something..")
});
const PORT = 2123;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));             