// Naufal Bhanu Anargyarahman (16520102) 
function darkmode() {
  var element = document.body;
  element.classList.toggle("darkmode");
  var id = document.getElementById("darkmode_button")
  if (id.src === "http://127.0.0.1:5500/icons/darkmode.jpg") { 
  id.src = "http://127.0.0.1:5500/icons/lightmode.jpg"
  } else {  
    id.src = "http://127.0.0.1:5500/icons/darkmode.jpg"
  }
console.log(id.src)
}