const display = document.getElementsByTagName("input")[0];
const answer = document.getElementsByClassName("answer")[0];
function empty(n) {
    if (n == 'AC') {
        display.value = ' ';
        answer.innerHTML = ' '
    }
    else {
        display.value = display.value.slice(0, -1);
    }

}
function showindisplay(val) {

    display.value += val;
}
function calculate() {
    try {
        answer.innerHTML = eval(display.value);
    }
    catch (error) {
        answer.innerHTML = 'ERROR';
    }
}