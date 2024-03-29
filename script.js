var song_list_arr = [
    {songnName: 'Arjan-Vaily', id: 0, genre: 'Hindi', albumName: 'Animal', artistName: 'Bhupinder Babbal', song: './songs/Arjan Vailly Animal 320 Kbps.mp3' , about: 'Bhupinder Babbal, also known as Babbal Rai, is a Punjabi singer, songwriter, and actor hailing from Samrala, Punjab, India. He gained popularity in the Punjabi music industry with his distinctive voice, catchy melodies, and meaningful lyrics.', image: './images/arjan-vailly-animal.jpeg', length: '3:02'},
    {songnName: 'Bekaar-Dil', id:1, genre: 'Hindi' , albumName: 'Fighter', artistName: 'Vishal', song: './songs/Bekaar Dil Fighter 320 Kbps.mp3' , about: ' He is a prominent Indian music composer, playback singer, and lyricist known for his work in the Bollywood music industry. Dadlani is one half of the music composer duo Vishal-Shekhar, along with Shekhar Ravjiani. Together, they have composed music for numerous successful Hindi films.', image: './images/Bekaar-Dil-Fighter-.jpeg', length: '3:29'},
    {songnName: 'Sanam',  id:2,genre: 'Hindi', albumName: 'Spider-Man', artistName: 'Sanam', song: './songs/Main Hoon  The Amazing Spider Man 2 - Sanam (DJJOhAL.Com).mp3' , about: '"Sanam" is a popular Indian music band known for its renditions of classic Bollywood songs as well as original compositions. The band members include Sanam Puri (lead vocalist), Samar Puri (lead guitarist), Venky S (bass guitarist), and Keshav Dhanraj (drummer).', image: './images/sanam.jpeg', length: '3:38'},
    {songnName: 'Something Just Like This', id:3,genre: 'English', albumName: 'Memories...Do Not Open', artistName: 'Coldpaly', song: './songs/SomethingJustLikeThis-Chainsmokers&Coldplay.mp3' , about: "Coldplay is a British rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. The band's lineup also includes bassist Guy Berryman and drummer Will Champion. Over the years, Coldplay has become one of the world's best-selling music artists, known for their anthemic songs, emotive lyrics, and captivating live performances.", image: './images/Something_Just_Like_This.png', length: '3:56'},
    {songnName: 'BRODYAGA FUNK', id:4, genre: 'English', albumName: 'Eternxlkz', artistName: 'Eternxlkz', song: './songs/Eternxlkz_-_BRODYAGA_FUNK.mp3' , about: 'As of last update in January 2022, there is limited information available about "Eternxlkz BRODYAGA FUNK.', image: './images/unknown.webp', length: '2:14'}
]

var recommendation_list_arr = [
    {songnName: 'A Sky Full Of Stars', id:5, genre: 'English', albumName: 'Ghost Stories', artistName: 'Coldpaly', song: './songs/A-Sky-Full-Of-Stars.mp3' , about: "Coldplay is a British rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. The band's lineup also includes bassist Guy Berryman and drummer Will Champion. Over the years, Coldplay has become one of the world's best-selling music artists, known for their anthemic songs, emotive lyrics, and captivating live performances.", image: './images/sky-full-of-stars.jpeg', length: '4:13'},
    {songnName: 'Balam Pichkari', id:6,  genre: 'Hindi', albumName: 'Yeh Jawaani Hai Deewani', artistName: 'Vishal', song: './songs/Balam Pichkari Yeh Jawaani Hai Deewani 320 Kbps.mp3' , about: 'He is a prominent Indian music composer, playback singer, and lyricist known for his work in the Bollywood music industry. Dadlani is one half of the music composer duo Vishal-Shekhar, along with Shekhar Ravjiani. Together, they have composed music for numerous successful Hindi films.', image: './images/Balam-Pichkari-Yeh-Jawaani-Hai-Deewani.jpeg', length: '4:48'},
    {songnName: 'Hymn For The Weekend', id:7, genre: 'English', albumName: 'Ghost Stories', artistName: 'Coldpaly', song: './songs/Hymn-For-The-Weekend_320(PaglaSongs).mp3' , about: "Coldplay is a British rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. The band's lineup also includes bassist Guy Berryman and drummer Will Champion. Over the years, Coldplay has become one of the world's best-selling music artists, known for their anthemic songs, emotive lyrics, and captivating live performances.", image: './images/Coldplay,_Hymn_for_the_Weekend.jpeg', length: '4:20'},
    {songnName: 'Teri Deewani', id:8,  genre: 'Hindi',albumName: 'Teri Deewani', artistName: 'Sanam', song: './songs/Teri Deewani - Sanam - 320Kbps.mp3' , about: 'As of my last update in January 2022, "Sanam" is a popular Indian music band known for its renditions of classic Bollywood songs as well as original compositions. The band members include Sanam Puri (lead vocalist), Samar Puri (lead guitarist), Venky S (bass guitarist), and Keshav Dhanraj (drummer).', image: './images/sanam-teri-dewaani.jpeg', length: '3:50'},
    {songnName: 'Lean On', id:9, genre: 'English', albumName: 'Peace Is The Mission', artistName: 'Major Lazer', song: './songs/Lean On_320(PagalWorld.com.cm).mp3' , about: "Major Lazer is a globally renowned electronic music group formed in 2008. It's music often incorporates elements of Caribbean and African music, creating a unique and vibrant sound that has captivated audiences worldwide. Their tracks are characterized by infectious beats, catchy hooks, and collaborations with a diverse range of artists.", image: './images/lean-on.jpeg', length: '2:58'},
]
var filteredarray = [];
var new_list = [];
var current_song;
var audio = new Audio();




function ShowListofSongs(){
    var clutter = "";
    song_list_arr.forEach(function(song, index){
        clutter+= `<div data-index=${index} class="song">
					<h4>${(index < 9) ? '0'+(index+1) : index+1}</h4>
					<div id="image-container"><img
							src="${song.image}" />
					</div>
					<h3>${song.songnName}</h4>
					<h2>${song.albumName}</h4>
					<h4>${song.length}</h4>
				</div>`;        
    })
    document.querySelector("#list-of-songs").innerHTML = clutter + `<br />
				<br /><br />`;

}
ShowListofSongs();

function ShowRecommendationList(){
        var clutter = "";
    recommendation_list_arr.forEach(function(song,index){
        clutter += `<div data-index="${index}" id="song-image">
					<img src="${song.image}" />
				</div>`;
    })
    document.querySelector("#list-of-recommendation").innerHTML = clutter + `<br /><br />
				<br /><br />`;           
}
ShowRecommendationList();

function TransferRecommendedSongstoMainList (){
    
        document.querySelector('#list-of-recommendation').addEventListener("click", function(song){
                if(filteredarray == ""){
                    var thesong = recommendation_list_arr[song.target.dataset.index].song;
                    filteredarray = recommendation_list_arr.filter(object => object.song !== thesong);
                    var clutter = "";
                    filteredarray.forEach(function(song,index){
                        clutter += `<div data-index="${index}" id="song-image">
					<img
						src="${song.image}" />
                    </div>`;})
                    document.querySelector("#list-of-recommendation").innerHTML = clutter + `<br /><br />
				    <br /><br />`;
                    song_list_arr.push(recommendation_list_arr[song.target.dataset.index]);
                    ShowListofSongs();
                }else{
                    var thesong = filteredarray[song.target.dataset.index].song;
                    song_list_arr.push(filteredarray[song.target.dataset.index]);
                    filteredarray = filteredarray.filter(object => object.song !== thesong);
                    var clutter = "";
                    filteredarray.forEach(function(song,index){
                    clutter += `<div data-index="${index}" id="song-image">
					<img
						src="${song.image}" />
                    </div>`;
                })
                    document.querySelector("#list-of-recommendation").innerHTML = clutter + `<br /><br />
				    <br /><br />`;
                    ShowListofSongs();
                }
    })
}
TransferRecommendedSongstoMainList();


function PlaytheSong(){
    var listOfSongs = document.querySelector('#list-of-songs');
    listOfSongs.addEventListener("click", function(song){

    var selectedSongID = song_list_arr[song.target.dataset.index];
    current_song = (song.target.dataset.index);
    console.log(selectedSongID)
    document.querySelector('#current-song-image').innerHTML = `<img src="${selectedSongID.image}" />`;
    document.querySelector('#current-song').innerHTML = `<h3>${selectedSongID.songnName}</h3>
				<h6>${selectedSongID.artistName}</h6>`;

    document.querySelector('#profile-pic-container').innerHTML = `<img src="${selectedSongID.image}"/>`
    document.querySelector('#self-intro').innerHTML = `<h2>${selectedSongID.artistName}</h2>
					<h4>${selectedSongID.about}</h4>`;

    new_list = recommendation_list_arr.filter(object => (object.genre === selectedSongID.genre));
    var clutter = "";
    new_list.forEach(function(song, index){
        clutter += `<div data-index="${index}" id="song-image">
					<img
						src="${song.image}" />
				</div>`;
    })
    document.querySelector('#list-of-recommendation').innerHTML = clutter;
    filteredarray = new_list;

    document.querySelector('#play').innerHTML = `<i class="ri-play-fill"></i>`
    PauseandRun();
    audio.src = (selectedSongID.song);
    audio.play();
    changetheTimeControlBar();
})}
PlaytheSong();

function PlayPreviousSong(){
    document.querySelector('#backward').addEventListener("click", function(){
        var previousSong = song_list_arr[+current_song-1];
        if(previousSong.id !== null){
            current_song = current_song - 1;
            console.log(current_song)
    
            console.log(previousSong)
            document.querySelector('#current-song-image').innerHTML = `<img src="${previousSong.image}" />`;
            document.querySelector('#current-song').innerHTML = `<h3>${previousSong.songnName}</h3>
				<h6>${previousSong.artistName}</h6>`;

            document.querySelector('#profile-pic-container').innerHTML = `<img src="${previousSong.image}"/>`
            document.querySelector('#self-intro').innerHTML = `<h2>${previousSong.artistName}</h2>
					<h4>${previousSong.about}</h4>`;

            new_list = recommendation_list_arr.filter(object => (object.genre === previousSong.genre));
            var clutter = "";
            new_list.forEach(function(song, index){
                clutter += `<div data-index="${index}" id="song-image">
                    <img
						src="${song.image}" />
				    </div>`;
                })
            document.querySelector('#list-of-recommendation').innerHTML = clutter;
            filteredarray = new_list;

            document.querySelector('#play').innerHTML = `<i class="ri-play-fill"></i>`
            PauseandRun();
            audio.src = (previousSong.song);
            changetheTimeControlBar();
            audio.play();
        }
         else{
            current_song = 0;
        }

    })
}
PlayPreviousSong();

function PlayNextSong(){
    document.querySelector('#forward').addEventListener("click", function(){
        var nextSong = song_list_arr[+current_song + 1];
        if(nextSong.id !== ""){
            current_song = +current_song + 1;
            document.querySelector('#current-song-image').innerHTML = `<img src="${nextSong.image}" />`;
            document.querySelector('#current-song').innerHTML = `<h3>${nextSong.songnName}</h3>
				<h6>${nextSong.artistName}</h6>`;

            document.querySelector('#profile-pic-container').innerHTML = `<img src="${nextSong.image}"/>`
            document.querySelector('#self-intro').innerHTML = `<h2>${nextSong.artistName}</h2>
					<h4>${nextSong.about}</h4>`;

            new_list = recommendation_list_arr.filter(object => (object.genre === nextSong.genre));
            var clutter = "";
            new_list.forEach(function(song, index){
                clutter += `<div data-index="${index}" id="song-image">
					<img
						src="${song.image}" />
				    </div>`;
                })
            document.querySelector('#list-of-recommendation').innerHTML = clutter;
            filteredarray = new_list;
            document.querySelector('#play').innerHTML = `<i class="ri-play-fill"></i>`
            PauseandRun();
            changetheTimeControlBar();
            audio.src = (nextSong.song);
            audio.play();
        }
        else{
            current_song = 0;
        }
    })
}
PlayNextSong();

function PauseandRun(){
    var flag = 0;
    document.querySelector('#play').addEventListener("click", function(){
        if(flag == 0){
            document.querySelector('#play').innerHTML = `<i class="ri-pause-line"></i>`
            audio.pause();
            flag = 1;
        }
        else{
            document.querySelector('#play').innerHTML = `<i class="ri-play-fill"></i>`
            audio.play();
            flag = 0;
        }
    })
}
PauseandRun();

function changetheTimeControlBar(){
    var timer = document.querySelector('#music-slider');
    var measuringDuration = document.querySelector('#display-duration');

    audio.onloadedmetadata = function (){
        timer.max = audio.duration;
        timer.value = audio.currentTime;
    }
    if(audio.play()){
        setInterval(()=>{
            timer.value = audio.currentTime;
            measuringDuration.innerHTML = `${formatTime(audio.currentTime )} / ${song_list_arr[current_song].length}`;
        },500)
    }
    timer.onchange = function(){
        audio.play();
        audio.currentTime = timer.value;
    }
        function formatTime(s, m) {
            s = Math.floor( s );    
            m = Math.floor( s / 60 );   
            s = Math.floor( s % 60 );
            s = s >= 10 ? s : '0' + s;    
            return m + ':' + s;
        }
}
changetheTimeControlBar();