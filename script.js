

//============ MusixMatch Info =================

var songID;
var MusixMatchKey = "f87914fabf3b652d6e3500c66b6259d6";
var MusixMatchURL = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=" + MusixMatchKey + "&track_id=" + songID ;

$.ajax({
    url: MusixMatchURL,
    method: "GET"
}).then(function(LyricsResponse){
    console.log(LyricsResponse);


});

//=======================================================================




//==========================  The SongDB  ==============================

//get users 3 favorite artists

//returns track details from artists 	searchtrack.php?s={Artist_Name}&t={Single_Name}
const artistOneUrl = 'theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + firstArtist
const artistTwoUrl = 'theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + secondArtist
const artistThreeUrl ='theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + thirdArtist
        
//get artist #1
const firstArtist = $(`#artist1`).val().trim()
//get artist #2
const secondArtist = $(`#artist2`).val().trim()
//get artist #3
const thirdArtist = $(`#artist3`).val().trim()
//array to hold all songs
const playlist = []
            
function submitInputs() {
  $.ajax({
    url: 
    method:
  }).then(function(artistsresponse) {
    console.log(artistsresponse)
    })
  }
        
$(`#btnID`).on(click, function(e) {
  e.preventDefault()
  submitInputs()
  //get 3 songs fronm each playlist
  //add these three to an array
  playlist.push()
  $(`#Id`).innerHTML = playlist
                
})
        