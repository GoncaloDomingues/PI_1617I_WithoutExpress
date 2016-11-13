"use strict"

const http = require("request");

module.exports= function(path,cb){
    http(path,(error,response,body)=>{
        if(!error && response.statusCode==200){
            cb(null,JSON.parse(body));
        }
    })
}