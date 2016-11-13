"use strict"
const Artist = require("./Artist.js");
function Search(name,obj){
    this.SearchName = name;
    this.artists = obj.artists.items.map(item => new Artist(item));
    this.total = obj.artists.total;
    if(obj.artists.offset===0){
        this.first=true;
        this.left=false;
        this.right=true;

    }else {
        this.first = true;
        this.left = true;
        this.right = true;
    }
    this.page=obj.artists.offset/20;

    this.previousPage = obj.artists.offset-20;
    this.nextPage=obj.artists.offset+20;
    this.lastPage = this.total-20;
}

module.exports = Search