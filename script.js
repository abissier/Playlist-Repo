//CORS proxy
const proxy = "https://cors-anywhere.herokuapp.com/"

//Global Variables 
var topSongs = {};
var artist = "";
var trackOne = "";
var trackTwo = "";
var trackThree = "";
var trackFour = "";
var trackFive = "";

// Top songs API request
function runQuery() {

    generateSongs();

    $.ajax(topSongs).done(function (responseOne) {
        //get top songs and append to page w songIDs
        if (!responseOne.track) {
            var noSong = document.createElement("p");
            var tracklist = document.getElementById("tracklist");
            noSong.innerHTML = "Artist not found!";
            tracklist.append(noSong);
        } else {
            trackOne.innerHTML = responseOne.track[0].strTrack;
            trackTwo.innerHTML = responseOne.track[1].strTrack;
            trackThree.innerHTML = responseOne.track[2].strTrack;
            trackFour.innerHTML = responseOne.track[3].strTrack;
            trackFive.innerHTML = responseOne.track[4].strTrack;

            trackOne.setAttribute('id', responseOne.track[0].idTrack);
            trackTwo.setAttribute('id', responseOne.track[1].idTrack);
            trackThree.setAttribute('id', responseOne.track[2].idTrack);
            trackFour.setAttribute('id', responseOne.track[3].idTrack);
            trackFive.setAttribute('id', responseOne.track[4].idTrack);
        }
    });
}

//=========== click event pulls song ID and pushes to displaySongLyrics function ==========

$("#tracklist").on("click", ".tracks", function () {
    var songID = event.target.id;
    $("#lyricDisplay").empty();
    displaySongLyrics(songID);
})

//======= Lyrics API request ==================
function displaySongLyrics(songID) {

    $.ajax({
        type: "GET",
        data: {
            apikey: "f87914fabf3b652d6e3500c66b6259d6",
            track_id: songID,
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get?",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',

    }).then(function (LyricsResponse) {
        //pulls current song lyrics and displays to page 
        var lyricDis = document.getElementById("lyricDisplay");

        if (LyricsResponse.message.header.status_code == 404) {
            trimmedText = "No lyrics avalible"
        } else {
            var trimmedText = LyricsResponse.message.body.lyrics.lyrics_body.slice(0, -70)
        }
        var currentSongLyrics = document.createElement("p");
        currentSongLyrics.innerHTML = trimmedText;
        lyricDis.append(currentSongLyrics);

        //append copyright disclaimer
        var disclaimer = document.createElement("span");
        disclaimer.innerHTML = "******* This Lyrics is NOT for Commercial use *******"

        if (LyricsResponse.message.header.status_code == 404) {
        } else {
            lyricDis.append(disclaimer);
        }
    });
}

function generateSongs() {
    const tracklist = $('#tracklist');
    trackOne = document.createElement('p');
    trackOne.classList.add("tracks");
    trackTwo = document.createElement('p');
    trackTwo.classList.add("tracks");
    trackThree = document.createElement('p');
    trackThree.classList.add("tracks");
    trackFour = document.createElement('p');
    trackFour.classList.add("tracks");
    trackFive = document.createElement('p');
    trackFive.classList.add("tracks");

    //appending LI elements to UL
    tracklist.append(trackOne)
    tracklist.append(trackTwo)
    tracklist.append(trackThree)
    tracklist.append(trackFour)
    tracklist.append(trackFive)
}

//search button that runs audiodb query w user input
$("#search-btn").on("click", function () {
    $("#tracklist").empty();
    artist = $(`#artist-1`).val().trim();

    topSongs = {
        "async": true,
        "crossDomain": true,
        url: proxy + 'https://theaudiodb.com/api/v1/json/523532/track-top10.php?s=' + artist,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "523532",
            "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
        }
    };
    runQuery()
});

//=================== Delete button =======================
var Delete = document.getElementById("btn");

Delete.addEventListener("click", function () {
    $("#lyricDisplay").empty();
    $("#tracklist").empty();
    document.getElementById("artist-1").value = "";
});

//----