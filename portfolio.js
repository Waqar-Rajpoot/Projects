// =======================  About Section  ==================== //

var tabLinks = document.getElementsByClassName('tab-links');
var tabContants = document.getElementsByClassName('tab-contants');

function opentab(tabname) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (let tabContant of tabContants) {
        tabContant.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


// =======================  Side menu  ==================== //

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
