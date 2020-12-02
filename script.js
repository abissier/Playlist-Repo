

//============ MusixMatch Info =================

var songID = "15753433";
var MusixMatchKey = "f87914fabf3b652d6e3500c66b6259d6";
var MusixMatchURL = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=" + MusixMatchKey + "&track_id=" + songID ;

$.ajax({
    url: MusixMatchURL,
    method: "GET"
}).then(function(LyricsResponse){
    console.log(LyricsResponse);


});

//=======================================================================