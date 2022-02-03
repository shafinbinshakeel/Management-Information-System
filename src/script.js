window.onscroll = function () { fixIt() };

var navbar = document.querySelector("#main-header nav");
var fixed = navbar.offsetTop;

function fixIt() {
    if (window.pageYOffset >= fixed) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}