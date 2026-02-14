// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

// App State
let songs = [
    {
        id: 1,
        title: "XXL",
        artist: "LANY",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b42607713c1dd129afa9f350",
        audioSrc: "audio/XXL - LANY.mp3",
        lyrics: [
            { time: 0.1, text: "I obviously had to start this playlist with our theme song. I still think about the first time we cooked together in my kitchen, singing to this song together. I can't wait for you to come back to Taiwan so we can recreate that moment again. I miss you, XXL. Cepetan balik sini please"},
        ]
    },
    {
        id: 2,
        title: "Fallingforyou",
        artist: "The 1975",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Perfect - One Direction.mp3",
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 0.1, text: "My all-time favorite song from The 1975, also the song that witnessed me falling in love with you. When I first realized that my feelings for you were actually serious, this was the song I'd play on repeat 24/7." },
        ]
    },
    {
        id: 3,
        title: "All Of The Girls You Loved Before",
        artist: "Taylor Swift",
        audioSrc: "audio/Heat Waves - Glass Animals.mp3",
        lyrics: [
            { time: 4, text: "When you think of all the late nights" },
            { time: 6, text: "Lame fights over the phone" },
            { time: 11, text: "Wake up in the morning" },
            { time: 13, text: "With someone but feeling alone" },
            { time: 18, text: "A heart is drawn around your name" },
            { time: 20, text: "In someone's handwriting, not mine" },
            { time: 26, text: "We're sneaking out into town" },
            { time: 28, text: "Holding hands, just killing time" },
            { time: 32, text: "Your past and mine are parallel lines" },
            { time: 36, text: "Stars all aligned, and they intertwined" },
            { time: 40, text: "And taught you the way you call me baby" },
            { time: 43, text: "Treat me like a lady, all that I can say is" },
            { time: 48, text: "All of the girls you loved before" },
            { time: 56, text: "Made you the one I've fallen for" },
            { time: 63, text: "Every dead-end street led you straight to me" },
            { time: 67, text: "Now you're all I need" },
            { time: 69, text: "I'm so thankful for" },
            { time: 70, text: "All of the girls you loved before" },
            { time: 77, text: "But I love you more" },
            { time: 85, text: "You always ask me if I get jealous when you talk about your exes, and I always say no, and I really do mean it when I say that. I think the lyrics in this song explains it better than I ever could. All of the girls you've loved before helped shape you into the version of you that I get to love now, and I'm couldn't be more grateful for that." },
        ]
    },
    {
        id: 4,
        title: "Heavenly",
        artist: "Cigarettes After Sex",
        audioSrc: "audio/Heavenly - Cigarettes After Sex.mp3",
        lyrics: [
            { time: 1.5, text: "You already know how much I love Cigarettes After Sex, so this playlist would be incomplete without a song from them. Skip to 1:50 for my favorite part." },
            { time: 111, text: "Needing you now to come into me (double innuendo if u know what i mean ;))"},
            { time: 111, text: "Feeling it slow, over this dream"},
            { time: 111, text: "Touch me with a kiss, feel me on your lips"},
            { time: 111, text: "When youre above feeling it still"},
            { time: 111, text: "Tell me it's love, tell me it's real"},
            { time: 111, text: "Touch me with a kiss, touch me with a kiss"},
            { time: 111, text: "Because this is where I want to be"},
            { time: 111, text: "Where it's so sweet and heavenly"},
            { time: 111, text: "I'm giving you all my, giving you all my"},
            { time: 111, text: "Giving you all my love"},
            { time: 111, text: "Giving you all my, giving you all my"},
            { time: 111, text: "Giving you all my love"},
            { time: 111, text: "All my love"},
        ]
    },
    {
        id: 5,
        title: "Stuck",
        artist: "LANY",
        audioSrc: "audio/Stuck - LANY.mp3",
        lyrics: [
            { time: 0  ,  text: "Cause you could be the one that I love" },
            { time: 4,  text: "I could be the one that you dream of " },
            { time: 8, text: "A message in a bottle is all I can do" },
            { time: 11, text: "Standin' here, hopin' it gets to you" },
            { time: 100, text: "You could be the one that I keep, and Iu" },
            { time: 100, text: "I could be the reason you can't sleep at night" },
            { time: 100, text: "A mеssage in a bottle is all I can do" },
            { time: 100, text: "Standin' herе, hopin' it gets to you" },
        ]
    },
    {
        id: 6,
        title: "Pretty Boy",
        artist: "The Neighbourhood",
        audioSrc: "audio/Pretty Boy - The Neighbourhood.mp3",
        lyrics: [
            { time: 111, text: "Final song for my pretty boy. I love you so so much. Happy Valentine's day sayang."},
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Make sure the page details are hidden
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide background video
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning home
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Show background video

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Empty src if there is no custom video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Important Changes here ---
        // When a song item is clicked, immediately load & play the song then display the player page
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Jump to the music player page
        });

        // Event listener for hover
        listItem.addEventListener('mouseenter', () => {
            // Only enable background video if we are on the home page
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Add class for body background color
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Hide background video only if we are on home page
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Pause video when mouse leaves
                backgroundVideo.src = ""; // Empty src to prevent playing in the background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Remove body background color class
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;

    renderLyrics(song.lyrics); // Call the render Lyrics function

    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clean the lyrics container
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics are not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Store timestamp in data-attribute
        span.classList.add('lyric-line'); // Add class for styling
        lyricsContainer.appendChild(span);
        // Remove the added <br> manually, using CSS display:block or flexbox
        // lyrics Container.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Update background video
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

        // --- Logic highlight lyrics ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Determine when this line of lyrics ends. If this is the last line, assume it ends at the end of the song.
            // Or, better, assume it ends just before the next line starts.
            let nextLineTime = Infinity;
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lyrics only if highlighted line is not visible ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Check if the row is outside the container viewport
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll so that the nearest row appears in the viewport, with a smooth animation
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Add log for initialization
    console.log("Songs array length:", songs.length); // Check the number of songs
    console.log("songListElement:", songListElement); // Check if song List Element is found

    renderSongList(); // This is what renders the track list

    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // This will be displayed if the songs array is empty
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Set the initial speed
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Start from the playlist page
    console.log("Initialization complete."); // Log completed initialization
}

init();
(function(){ const openMessageLauncher = document.getElementById('openMessageLauncher'); const messagePage = document.getElementById('messagePage'); const backFromMessageBtn = document.getElementById('backFromMessageBtn'); const openMessageBtn = document.getElementById('openMessageBtn'); const letterEl = document.getElementById('letter'); const letterNextBtn = document.getElementById('letterNextBtn');
    function showMessagePage(){ if (homePage) homePage.classList.remove('active'); if (songDetailPage) songDetailPage.classList.remove('active'); if (playerPage) playerPage.classList.remove('active'); if (messagePage) messagePage.classList.add('active');
        try { pauseTrack(); } catch(e) {}
        if (backgroundVideoContainer) backgroundVideoContainer.classList.remove('active');
        if (backgroundVideo) { backgroundVideo.pause(); backgroundVideo.src = ''; backgroundVideo.load(); }

        if (letterEl) {
            letterEl.classList.remove('open');
            letterEl.setAttribute('aria-hidden','true');
            if (openMessageBtn) openMessageBtn.textContent = 'Open';
        }
    }
    if (openMessageLauncher) openMessageLauncher.addEventListener('click', e => { e.preventDefault(); showMessagePage(); }); if (backFromMessageBtn) backFromMessageBtn.addEventListener('click', e => { e.preventDefault(); if (messagePage) messagePage.classList.remove('active'); if (homePage) homePage.classList.add('active'); if (letterEl) { letterEl.classList.remove('open'); letterEl.setAttribute('aria-hidden','true'); if (openMessageBtn) openMessageBtn.textContent = 'Open'; } }); if (openMessageBtn && letterEl) openMessageBtn.addEventListener('click', e => { e.preventDefault(); const isOpen = letterEl.classList.toggle('open'); letterEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true'); openMessageBtn.textContent = isOpen ? 'Close' : 'Open'; }); if (letterNextBtn) letterNextBtn.addEventListener('click', e => { e.preventDefault(); if (typeof songs !== 'undefined' && songs.length > 0) { currentSongIndex = 0; loadSong(songs[0]); playTrack(); showPlayerPage(); } else { if (messagePage) messagePage.classList.remove('active'); if (homePage) homePage.classList.add('active'); } }); })();