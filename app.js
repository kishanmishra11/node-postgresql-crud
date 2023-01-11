const express = require('express')
const app = express();
const port = 3000;
const studentRoutes = require('./src/routes/routes')


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use(express.json())
app.use('/api/v1/students',studentRoutes);
app.listen(port,() => {
    console.log(`app is running on port ${port}`);
})