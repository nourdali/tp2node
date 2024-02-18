const express = require('express');
const router = require('./Router/router')


const app = express()

app.use('/voiture', router)



app.listen(3000 , ()=>{
    console.log('server work');
})