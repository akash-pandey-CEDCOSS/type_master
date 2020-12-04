const textgiven = document.querySelector("#text_content p").innerHTML;
const textarea_ = document.querySelector("#text-area");
const reset_button = document.querySelector("#reset_");
const time_ = document.querySelector(".clock");
const testarea = document.querySelector(".test-area");
var timer = [0, 0, 0, 0];
var interval;
var timer_reset = false;


function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    time_.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
function spellcheck() {
    let textentered = textarea_.value;
    let origintextMatch = textgiven.substring(0, textentered.length);

    if (textentered == textgiven) {
        clearInterval(interval);
        text_enter.style.borderColor = "#429890";

    } else {
        if (textentered == origintextMatch) {
            text_enter.style.borderColor = "#65ccf3";
        } else {
            text_enter.style.borderColor = "#E95D0F";


        }
    }

}

function start_calculating() {
    let textenteredlength = textarea_.value.length;

    if (textenteredlength === 0 && !timer_reset) {
        timer_reset = true;
        interval = setInterval(runTimer, 10);
    }

}
function reset_b() {

    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];

    timer_reset = false;


}

textarea_.addEventListener("keypress", start_calculating, false);
textarea_.addEventListener("keyup", spellcheck, false);
reset_button.addEventListener("click", reset_b, false);

