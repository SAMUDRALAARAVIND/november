const video = document.querySelector("video");
video.addEventListener("timeupdate")

/**
 * play() => plays the video
 * pause() => pauses the video
 * currentTime => seek time 
 * duration => total duration of the media
 * "timeupdate" => event which will triggered upon seek time change.
 * volume => [0, 1] => 1 is the highest value .
 */