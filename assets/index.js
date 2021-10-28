//Se copia el codigo embebido del html a este js externo (path local)

import MediaPlayer from './MediaPlayer.js';

//resuelve el autoplay
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video"); 
const button = document.querySelector("button"); 

/* function MediaPlayer(config) {
    this.media = config.el; 
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}
MediaPlayer.prototype.pause = function() {
    this.media.pause();
}
MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
} */


const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay() //le envía la función importada del autoplay
] });
button.onclick = () => player.togglePlay();

const muteButton = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};