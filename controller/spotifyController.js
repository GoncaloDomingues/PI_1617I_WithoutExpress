"use strict"

const fs = require('fs')
const handlebars = require('handlebars')
const SpotifyService = require('./../model/spotifyService.js')
const httpGetAsJson = require('./../httpGetAsJson.js')
const service = new SpotifyService(httpGetAsJson)

const viewSearch = handlebars.compile(fs.readFileSync('./views/searchView.hbs').toString())
const viewResults= handlebars.compile(fs.readFileSync('./views/resultSearch.hbs').toString())
const viewArtists= handlebars.compile(fs.readFileSync('./views/artists.hbs').toString())
const viewAlbums = handlebars.compile(fs.readFileSync('./views/albums.hbs').toString())

const handlers={}


handlers.home = function(cb){
    cb(null,viewSearch({}));
}

handlers.search = function(query,cb){
    const name = query.artist;
    const offset = query.offset||0;
    service.getSearchName(name,offset,(err,results)=>{
        if(err)
            return cb(err)
        cb(null,viewResults(results));
    })

}

handlers.artists=function(query,cb){
    const id = query;

    service.getArtist(id,(err,results)=>{
        if(err)
            return cb(err)
        cb(null,viewArtists(results));
    })
}

handlers.albums = function(query, cb){
    const id = query

    service.getAlbum(id, (err, results) => {
        if(err)
            return cb(err)
        cb(null, viewAlbums(results))
    })
}

module.exports=handlers