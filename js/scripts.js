// UI Logic

function getAndSetEchoValues(){
  //caputre input value
  const wordsId = document.getElementById("words-id").value.toUpperCase();
  console.log("words ID: ", wordsId);
  // set value to corresponding HTML parameter
  document.getElementById("echo").innerText = wordsId;
  
}

function increaseFontSize(id, increaseFactor){
  txt = document.getElementById(id);
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + increaseFactor) + 'px';
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
    // let newfont = 5 // + "em"
    // document.querySelector("#echo").style.fontSize = newfont + "em";
    increaseFontSize("echo", 50);
    // increased font size

  }
}

window.onload = function(){
  // will run the captured event on submit
  setFormSubmitHandler();
  // form.onsubmit = function() {
  //   let newfont2 = newfont * 2;
  //   console.log("New Sub: newfont", newfont);
  //   document.querySelector("#echo").style.fontSize = newfont2;
}
// }
// function increaseFontSize(id, increaseFactor){
//   txt = document.getElementById(id);
//   style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//   currentSize = parseFloat(style);
//   txt.style.fontSize = (currentSize + increaseFactor) + 'px';
// }

// function increaseFontSizeBy50px(){
//   let txt = document.getElementById('p');
//   let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//   let currentSize = parseFloat(style);
//   txt.style.fontSize = (currentSize + 50) + 'px';
// }
