// $(function() {
//     $(document).scroll(function() {
//         var $nav = $('.nav');
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });
// Dung cho Jquery

const nav = document.querySelector('.nav');
const body = document.getElementsByTagName('body')

function scroll() {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }   
}

// Code Js thuần



var menu = document.getElementById('bar');
var items = document.getElementById('navbar');

items.style.right = "-360px";

menu.onclick = function() {
    if (items.style.right == "-360px") {
        items.style.right = "0";
    } else {
        items.style.right = "-360px"
    }
}