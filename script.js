// Fecha de la boda (Año, Mes (0-11), Día, Hora, Minuto, Segundo)
var weddingDate = new Date(2024, 7, 20, 15, 0, 0); // Ajusta esta fecha a la fecha de tu boda

function actualizarCuentaRegresiva() {
  var now = new Date();
  var timeDifference = weddingDate.getTime() - now.getTime();

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").querySelector(".countdown-number").innerText = days;
  document.getElementById("hours").querySelector(".countdown-number").innerText = hours;
  document.getElementById("minutes").querySelector(".countdown-number").innerText = minutes;
  document.getElementById("seconds").querySelector(".countdown-number").innerText = seconds;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(actualizarCuentaRegresiva, 1000);


// Mostrar el mensaje de confirmación al cargar la página
window.onload = function() {
    var modal = document.getElementById("music-confirm");
    modal.style.display = "block";
  
    // Obtener los botones del mensaje de confirmación
    var playButton = document.getElementById("play-music");
    var noMusicButton = document.getElementById("no-music");
  
    // Reproducir música cuando se hace clic en "Reproducir"
    playButton.onclick = function() {
      modal.style.display = "none";
      playMusic();
    }
  
    // Ocultar el mensaje de confirmación cuando se hace clic en "No, gracias"
    noMusicButton.onclick = function() {
      modal.style.display = "none";
    }
  
    // Función para reproducir música
    function playMusic() {
      var audio = document.getElementById("audio");
      audio.play();
    }
  }
  
  // Controlar la reproducción/pausa de la música
  var playPauseBtn = document.getElementById("play-pause-btn");
  var audio = document.getElementById("audio");
  
  playPauseBtn.onclick = function() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.innerHTML = "▶️";
    }
  };