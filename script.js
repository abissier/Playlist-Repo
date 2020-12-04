

//============ MusixMatch Info =================

var lyricDis = document.getElementById("lyricDisplay");


//=========== click event pulls song ID and pushes data to next function ==============
$(".tracks").click(function() {
    var songID = event.target.id;
    displaySongLyrics(songID); 
})




//======= runs API request to pull lyrics==================
function displaySongLyrics(songID) {

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
       //========pulls current song lyrics and displays to page =======
         var lyricText = LyricsResponse.message.body.lyrics.lyrics_body;
          var trimmedText = lyricText.slice(0, -70);
          console.log(trimmedText);
         var currentSongLyrics = document.createElement("p");
         currentSongLyrics.innerHTML = trimmedText;
         lyricDis.append(currentSongLyrics);

         //======== appends a copyright disclaimer ================
         var disclaimer = document.createElement("span");
         disclaimer.innerHTML = "******* This Lyrics is NOT for Commercial use ******* "
         lyricDis.append(disclaimer);
         
    });    
}
//=======================================================================




//==========================  The SongDB  ==============================
const proxy = "https://cors-anywhere.herokuapp.com/"

//get artist #1
const firstArtist = $(`#artist-1`).val().trim()

//Top Songs for artist 
const topSongs = {
	"async": true,
	"crossDomain": true,
	url: proxy + 'https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=' + firstArtist,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "523532",
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
	}
};

$.ajax(topSongs).done(function (responseOne) {
    console.log(responseOne);

    trackOne.innerHTML = responseOne.track[0].strTrack
    trackTwo.innerHTML = responseOne.track[1].strTrack
    trackThree.innerHTML = responseOne.track[2].strTrack
    trackFour.innerHTML = responseOne.track[3].strTrack
    trackFive.innerHTML = responseOne.track[4].strTrack
    
    
    trackOne.setAttribute('id', responseOne.track[0].idTrack)
    trackTwo.setAttribute('id', responseOne.track[1].idTrack)
    trackThree.setAttribute('id', responseOne.track[2].idTrack)
    trackFour.setAttribute('id', responseOne.track[3].idTrack)
    trackFive.setAttribute('id', responseOne.track[4].idTrack) 
});

//Discography for artist 
const discography = {
	"async": true,
	"crossDomain": true,
	"url": proxy + "https://theaudiodb.com/api/v1/json/523532/discography.php?s=" + firstArtist,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "523532",
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
	}
};

$.ajax(discography).done(function (response) {
    console.log(response);
});


//creating LI elements
const tracklist= $('#tracklist');
const trackOne = document.createElement('p');
trackOne.classList.add("tracks");
const trackTwo = document.createElement('p');
trackTwo.classList.add("tracks");
const trackThree = document.createElement('p');
trackThree.classList.add("tracks");
const trackFour = document.createElement('p');
trackFour.classList.add("tracks");
const trackFive = document.createElement('p');
trackFive.classList.add("tracks");


//appending LI elements to UL
tracklist.append(trackOne)
tracklist.append(trackTwo)
tracklist.append(trackThree)
tracklist.append(trackFour)
tracklist.append(trackFive)


        