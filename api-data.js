/**
 * Created by Gonçalo on 12/11/2016.
 */

"use strict"
const request = require("request");

function getResults(opt,callback){
    request(
        {uri:opt.host+opt.path,
            method:"GET"},
        (error,response,body)=>{
        let data=JSON.parse(body);
    callback(data);
})
}

exports.getResults = getResults