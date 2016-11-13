"use strict"
const Album = require("./Album.js")
function ArtistDetail(obj1,obj){
    this.name = obj1.name;
    this.albums = obj.items.map(item => new Album(item));
    this.image = obj1.images[2];
}

module.exports=ArtistDetail
