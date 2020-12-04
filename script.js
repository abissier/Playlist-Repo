

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
const topSongs = {
  
	"async": true,
	"crossDomain": true,
	url: proxy + 'https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=bonobo',
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
    trackTwo.setAttribute('id', responseOne.track[0].idTrack)
    trackThree.setAttribute('id', responseOne.track[0].idTrack)
    trackFour.setAttribute('id', responseOne.track[0].idTrack)
    trackFive.setAttribute('id', responseOne.track[0].idTrack)

    
});

//Discography for artist 1
const discography = {
	"async": true,
	"crossDomain": true,
	"url": proxy + "https://theaudiodb.com/api/v1/json/523532/discography.php?s=bonobo",
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
const trackOne = document.createElement('li');
const trackTwo = document.createElement('li');
const trackThree = document.createElement('li');
const trackFour = document.createElement('li');
const trackFive = document.createElement('li');




//appending LI elements to UL
tracklist.append(trackOne)
tracklist.append(trackTwo)
tracklist.append(trackThree)
tracklist.append(trackFour)
tracklist.append(trackFive)







//get artist #1
const firstArtist = $(`#artist-1`).val().trim()

        


        
// $(`#btn`).on('click', function(e) {
//   e.preventDefault()
//   submitInputs()
  //get 3 songs fronm each playlist
  //add these three to an array
  //playlist.push()
  //$(`#Id`).innerHTML = playlist
                

        