// flashPageAnimation ****************************************
const effectTime = 3; //Seconds

const welcomeMessageH1 = document.querySelector("#welcome_message h1");

const welcomeMessageP = document.querySelector("#welcome_message p");

const welcomePageImage = document.querySelector("#index_portrait");

const welcomePageGo = document.querySelector("#go_home");

setTimeout(function(){
    welcomeMessageH1.classList.remove("visibility_hidden")
}, effectTime / 2 * 1000 + 200);

setTimeout(function(){
    welcomeMessageP.classList.add("border_right_none")
}, effectTime / 2 * 1000);

setTimeout(function () {
    welcomePageImage.classList.remove("opacity_zero")
}, effectTime * 1000 + 200);

setTimeout(function () {
    welcomePageGo.classList.remove("visibility_hidden")
}, effectTime * 1000 + 400);
