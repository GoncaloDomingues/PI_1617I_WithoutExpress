'use strict'

function Track(obj){
    this.name = obj.name
    this.track_number = obj.track_number
    this.artists = obj.artists
    this.duration = (obj.duration_ms /60000).toFixed(2)
}

module.exports = Track