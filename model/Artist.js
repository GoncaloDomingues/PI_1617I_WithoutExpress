"use strict"

function Artist(obj){
    this.name = obj.name;
    this.id = obj.id;
    this.image = obj.images[2];
}

module.exports=Artist;