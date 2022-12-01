// hiện header khi scoll lên
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-105px";
    document.getElementById("header").style.marginTop = "0px";

  }
  prevScrollpos = currentScrollPos;
}
const nav = document.querySelector('.navbar')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})





// -------------- hàm đóng mở chung ---------------



// --------------------------------Modal
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
function showModal() {
modal.classList.add("open");
}
function hideModal() {
modal.classList.remove("open");
}
showModal(); 
modalClose.addEventListener("click", hideModal);
// modal.addEventListener("click", hideModal);

// ------------------------------------sub-nav-header-moblie------

function showSubnav() {
  document.getElementById("showSubnav").classList.toggle("activate");
}
function showHeaderList() {
  document.getElementById("header__list-container").classList.toggle("activate");
}
// ---------------- phần này suy nghĩ lại chỗ header bên phải để làm lại

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('activate')) {
//         openDropdown.classList.remove('activate');
//       }
//     }
//   }
// }