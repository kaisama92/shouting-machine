// UI Logic

function getAndSetEchoValues(){
  //caputre input value
  const wordsId = document.getElementById("words-id").value.toUpperCase();
  console.log("words ID: ", wordsId);
  // set value to corresponding HTML parameter
  document.getElementById("echo").innerText = wordsId;
}

function setFormSubmitHandler(){
  let form = document.querySelector("form");
  console.log("In the formsubmit ");
  form.onsubmit = function(event){
    event.preventDefault();
    getAndSetEchoValues();
    document.querySelector("p#echo").removeAttribute("class"); // place on HTML to display words
  }
}

window.onload = function(){
  // will run the captured event on submit
  setFormSubmitHandler();
}