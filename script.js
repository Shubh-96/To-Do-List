var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 

    createDoneButton(li);
    createDeleteButton(li)
}

function createDoneButton(li){
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Done"));
    li.appendChild(button);
    button.onclick = underlineParent;
}

function createDeleteButton(li){
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(delButton);
    delButton.onclick = removeParent;
}

for(i = 0; i < listItems.length; i++){
    createDeleteButton(listItems[i]);
    createDoneButton(listItems[i]);
    listItems[i].classList.toggle("done");
}

function underlineParent(event){
    event.target.parentNode.classList.toggle("done");
}

function removeParent(event){
    event.target.parentNode.remove();
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    } 
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }   
}

button.onclick = addListAfterClick;
// button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// ==========================================================
// AFTER THIS BACKGROUND GRADIENT GENERATOR LINES ARE ADDED
// ==========================================================

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randomButton = document.createElement("button");
randomButton.appendChild(document.createTextNode("Random Colors"));
body.appendChild(randomButton);

function randomNumberGenerator(){
    var min = 0;
    var max = 255;
    var ran = Math.random() * (max - min) + min;
    return Math.floor(ran);
}

function intToHex(i){
    var hex = Number(i).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function rgbToHex(r,g,b){
    var red = intToHex(r);
    var green = intToHex(g);
    var blue = intToHex(b);
    return ("#"+ red + green + blue);
}

randomButton.onclick = function(){
    color1.value =  rgbToHex(randomNumberGenerator(), randomNumberGenerator(), randomNumberGenerator()) ;
    color2.value = rgbToHex(randomNumberGenerator(), randomNumberGenerator(), randomNumberGenerator()) ;
    setGradient();
}

function setGradient(){
    body.style.background = "linear-gradient(to right, "
                              + color1.value + ", "
                              + color2.value + ")";
    css.textContent = body.style.background;
}
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

console.log(color1.value, color2.value);