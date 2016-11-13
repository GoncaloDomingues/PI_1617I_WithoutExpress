'use strict'

const Artist = require('./Artist.js')
const Track = require('./Track.js')

function AlbumDetail(obj){
    this.name = obj.name
    this.release_date = obj.release_date
    this.image = obj.images[1].url
    this.artists = obj.artists
    //this.tracks = obj.tracks.items
    this.tracks = obj.tracks.items.map(item => new Track(item))
}

module.exports = AlbumDetail