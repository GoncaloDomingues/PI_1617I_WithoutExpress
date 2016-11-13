"use strict"
const Artist = require("./Artist.js");
function Search(name,obj){
    this.SearchName = name;
    this.artists = obj.artists.items.map(item => new Artist(item));
    this.total = obj.artists.total;

}

module.exports = Search