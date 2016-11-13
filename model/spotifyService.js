
"use strict"
const handlebars = require('handlebars')
const Search = require("./Search.js");
const Artist = require("./Artist.js");
const fs = require('fs')
const spotifyUri = "https://api.spotify.com"
const httpGetAsJson=require("./../httpGetAsJson.js")
const ArtistDetail= require("./ArtistDetail.js");

function spotifyService(httpGetAsJson){

   this.getSearchName = function(name,cb){
       const path = spotifyUri + "/v1/search?query="+name+"&type=artist";
       httpGetAsJson(path,(err,obj)=>{
           if(err)
               return cb(err);

           cb(null,new Search(name,obj));
       })
   }

   this.getArtist = function(id,cb){
       const path = spotifyUri + "/v1/artists/"+id;
        const pathAlbuns = spotifyUri + "/v1/artists/"+id+"/albums"
       httpGetAsJson(path,(err,obj1)=>{

           if(err)
               return cb(err);

           httpGetAsJson(pathAlbuns,(err,obj)=>{
               if(err)
                   return cb(err)

               cb(null,new ArtistDetail(obj1,obj));
           })


       })
   }
}


module.exports = spotifyService