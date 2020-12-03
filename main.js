const textgiven = document.querySelector("#text_content p").innerHTML;
const textarea_ = document.querySelector("#text-area");
const reset_button = document.querySelector("#reset_");
const time_ = document.querySelector(".clock");
const testarea = document.querySelector(".test-area");
var timer = [0, 0, 0, 0];


function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" +leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    time_.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function reset_b() {
    console.log("reset button presed");

}

function spellcheck() {
    let textentered = textarea_.value;
    console.log(textentered);
}

function start_calculating() {
    let textenteredlength = textarea_.value.length;
    if (textenteredlength === 0) {
        setInterval(runTimer, 10);
    }
    console.log(textenteredlength);


}

textarea_.addEventListener("keypress", start_calculating, false);
textarea_.addEventListener("keyup", spellcheck, false);
reset_button.addEventListener("click", reset_b, false);

