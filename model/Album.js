"use strict"

function Album(obj){
    this.type = obj.album_type;
    this.id = obj.id;
    this.name=obj.name
    this.image = obj.images[2].url;
}

module.exports=Album