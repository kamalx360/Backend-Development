const express= require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, (req, res) => {
    console.log(`listening on ${port}`);
})
app.get('/login', (req,res)=>{
    res.send('Login Page');
})