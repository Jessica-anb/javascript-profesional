function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
    player.mute();
    player.play(); //antes de darle play se pone en mute
}

export default AutoPlay;