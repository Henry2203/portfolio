function changeText(text) {
    var display = document.querySelector('h1');
    display.innerHTML = "";
    display.innerHTML = text;

}

function defaultText(text) {
    var display = document.querySelector('h1');
    display.innerHTML = "";
    display.innerHTML = text;
}

function rollover(my_image) {

    my_image.src = './images/brave_icon_512x_twitter.png';

}


function mouseaway(my_image) {

    my_image.src = "./images/mozilla_firefox_logo.png";

}

function changeColor(body) {
    body.style.backgroundColor = "white";
}

function Colorback(body) {
    body.style.backgroundColor = "#ff8800";
}

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}