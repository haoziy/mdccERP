/**
 * Created by shenqiao on 2017/12/25.
 */
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const root = __dirname

app.all('*', (req, res,next)=> {
    res.sendFile('../template.html',{root:root}).end();
})
app.listen(8080,()=>{
    console.log("开始web服务器");
})