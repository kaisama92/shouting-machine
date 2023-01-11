// UI Logic

function getAndSetEchoValues(){
  //caputre input value
  const wordsId = document.getElementById("words-id").value.toUpperCase();
  console.log("words ID: ", wordsId);
  // set value to corresponding HTML parameter
  document.getElementById("echo").innerText = wordsId;
  
}

// // increased font size
// function increaseFont(wordsId) {

// }

function setFormSubmitHandler(){
  let form = document.querySelector("form");
  console.log("In the formsubmit ");
  form.onsubmit = function(event){
    event.preventDefault();
    getAndSetEchoValues();
    // increased fontSize();
    document.querySelector("p#echo").removeAttribute("class"); // place on HTML to display words
    // save a variable for font size i
    let newfont = 5 // + "em"
    document.querySelector("#echo").style.fontSize = newfont + "em";
    // increased font size
    /*let buttonFont =document.querySelector("button#button-font");
    buttonFont.addEventListener("click", function(){
      document.querySelector("#echo").style.fontSize = newfont * 2;
    });
    */
    
    // return newfont;
  }
}

window.onload = function(){
  // will run the captured event on submit
  setFormSubmitHandler();
  // form.onsubmit = function() {
  //   let newfont2 = newfont * 2;
  //   console.log("New Sub: newfont", newfont);
  //   document.querySelector("#echo").style.fontSize = newfont2;
  // }
}

let button = document.querySelector("button")
button.onclick = function(){
  let echo = document.querySelector("#echo");
  echo.style.fontSize() *= 2;  
}