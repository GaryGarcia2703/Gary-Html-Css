const player = document.getElementById("player");
const tracks = document.querySelectorAll(".track");

    function playMusic(file, element) {
      // Remove destaque da faixa anterior
      tracks.forEach(t => t.classList.remove("current"));

      // Destaca a faixa atual
      element.classList.add("current");

      // Toca a música
      player.src = file;
      player.play();
    }