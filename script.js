

//============ MusixMatch Info =================

var songID;
var MusixMatchKey = "f87914fabf3b652d6e3500c66b6259d6";
var MusixMatchURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=f87914fabf3b652d6e3500c66b6259d6&track_id=" + songID ;

$.ajax({
    type: "GET",
    data: {
        apikey:"f87914fabf3b652d6e3500c66b6259d6",
        track_id: songID,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    }).then(function(LyricsResponse){
        console.log(LyricsResponse); 
    });    

//=======================================================================




//==========================  The SongDB  ==============================

//get users 3 favorite artists

//returns track details from artists 	searchtrack.php?s={Artist_Name}&t={Single_Name}
//get artist #1
const firstArtist = $(`#artist-1`).val().trim()
//get artist #2
const secondArtist = $(`#artist-2`).val().trim()
//get artist #3
const thirdArtist = $(`#artist-3`).val().trim()
//array to hold all songs
const playlist = []

const artistOneUrl = 'theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + firstArtist
const artistTwoUrl = 'theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + secondArtist
const artistThreeUrl ='theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + thirdArtist
        

            
function submitInputs() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://theaudiodb.p.rapidapi.com/searchtrack.php?t=yellow&s=coldplay",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "1eaefda46fmsh7f49637a27e8f45p19f2d6jsn2ebdbc6ee733",
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}
        
$(`#btn`).on('click', function(e) {
  e.preventDefault()
  submitInputs()
  //get 3 songs fronm each playlist
  //add these three to an array
  //playlist.push()
  //$(`#Id`).innerHTML = playlist
                
})
        