var song1 = new Audio("naat-1.mp3");

$(".play-pause").on("click", function () {
    if (song1.paused) {
        song1.play();
        $(".play-pause").attr("src", "pause.png")
        setInterval(Time, 1000);
        song1.onended = function () {
            song1.play();
        }


    } else {
        song1.pause();
        $(".play-pause").attr("src", "play.png")
        setInterval(Time, 1000);
    }
});



function Time() {
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(song1.currentTime / 60);
    let currentSeconds = Math.floor(song1.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(song1.duration / 60);
    let durationSeconds = Math.floor(song1.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    var curr_time = currentMinutes + ":" + currentSeconds;
    var total_duration = durationMinutes + ":" + durationSeconds;

    $(".liveTime").html(curr_time);
    $(".durationTime").html(total_duration);

}