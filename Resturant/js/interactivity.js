//Get the button:
var mybutton = document.getElementById("res");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunctionBtn()};

function scrollFunctionBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
