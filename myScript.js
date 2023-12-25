// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function updateCurrentTime() {
var date = new Date();
	var  current_time =  date.getHours()+":"+date.getMinutes() +":"+ date.getSeconds();
	document.getElementById("htime").innerHTML ="current time    " +current_time; 
}
function startClock() {
    updateCurrentTime(); // Initial call to display the time immediately
    setInterval(updateCurrentTime, 1000); // Update the time every second
}

// Start the clock when the page loads
window.onload = startClock;