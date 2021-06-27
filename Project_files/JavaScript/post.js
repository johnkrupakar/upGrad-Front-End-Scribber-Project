// This function for like button
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.clickcount + " Person likes this!";
    } 
}
  

// This function for posting comments form comment box
window.postComment=function()
{
var div = document.getElementById("comments");

  div.innerHTML = "<br>" + document.getElementById("userComments").value + div.innerHTML;
}


// This function for editing the tex filed
const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = lightgrey;
} );