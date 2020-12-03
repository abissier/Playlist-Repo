

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
const proxy = "https://cors-anywhere.herokuapp.com/"

//Top Songs for artist 1
const topSongsA1 = {
  
	"async": true,
	"crossDomain": true,
	url: proxy + 'https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=beyonce',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "523532",
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
	}
};

$.ajax(topSongsA1).done(function (response) {
	console.log(response);
});

//Discography for artist 1
const discographyA1 = {
	"async": true,
	"crossDomain": true,
	"url": proxy + "https://theaudiodb.com/api/v1/json/523532/discography.php?s=beyonce",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "523532",
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
	}
};

$.ajax(discographyA1).done(function (response) {
	console.log(response);
});


// //Top Songs for artist 2
// const topSongs = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=coldplay",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "523532",
// 		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
// 	}
// };

// $.ajax(topSongs).done(function (response) {
// 	console.log(response);
// });

// //Discography for artist 2
// const discography = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://theaudiodb.com/api/v1/json/523532/discography.php?s=beyonce",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "523532",
// 		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
// 	}
// };

// $.ajax(discography).done(function (response) {
// 	console.log(response);
// });





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
        


        
// $(`#btn`).on('click', function(e) {
//   e.preventDefault()
//   submitInputs()
  //get 3 songs fronm each playlist
  //add these three to an array
  //playlist.push()
  //$(`#Id`).innerHTML = playlist
                

        