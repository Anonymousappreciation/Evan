/* =================================
   SECRET PASSWORD
================================= */

const SECRET_PASSWORD = "003";


/* =================================
   UNLOCK WEBSITE
================================= */

function unlockPage() {

    const password =
        document.getElementById("password").value;

    const errorMessage =
        document.getElementById("errorMessage");

    const lockScreen =
        document.getElementById("lockScreen");

    const mainContent =
        document.getElementById("mainContent");


    if (password === SECRET_PASSWORD) {

        lockScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        startMusic();

    } else {

        errorMessage.textContent =
            "❌ Incorrect password. Please try again.";

    }

}


/* =================================
   ENTER KEY
================================= */

document
    .getElementById("password")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            unlockPage();

        }

    });


/* =================================
   MUSIC
================================= */

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


function startMusic() {

    music.play()
        .then(() => {

            musicButton.textContent =
                "⏸️ Pause Music";

        })
        .catch(() => {

            musicButton.textContent =
                "🎵 Play Music";

        });

}


function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.textContent =
            "⏸️ Pause Music";

    } else {

        music.pause();

        musicButton.textContent =
            "🎵 Play Music";

    }

}