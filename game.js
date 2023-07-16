var rannum = Math.round(Math.random() * 100);
var lives = 10;
function submit() {
    document.getElementById("con42").innerHTML = lives;
    var input = document.getElementById("con2").value;
    lives--;

    console.log(input, rannum);
    if (input == rannum) {
        location.href = "./win.html";
    }
    else if (input < rannum && lives != 0) {
        document.getElementById("con5").innerHTML = "Your Guess is low";
    }
    else if (input > rannum && lives != 0) {
        document.getElementById("con5").innerHTML = "Your Guess is low";
    }
    else if (lives == 0) {
        location.href = "./loss.html";
    }
}

