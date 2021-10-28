//copiado de index.js
function MediaPlayer(config) {
    this.media = config.el; 
    this.plugins = config.plugins || []; //le damos un valor para inicializarlo

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        //this es la instancia del play, se la envia a la funcion
        plugin.run(this); 
    });
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
}

//Antes de darle play debe estar en mute para que el navegador permita el autoplay
MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

export default MediaPlayer;