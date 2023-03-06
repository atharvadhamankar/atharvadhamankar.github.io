
var headerr  = document.getElementsByClassName("header-img")[0]
var bodyy = document.getElementsByClassName("bbody")[0]
var headerstyle = headerr.currentStyle || window.getComputedStyle(headerr);
var bodystyle = bodyy.currentStyle || window.getComputedStyle(bodyy);
var navbar = document.getElementById("nav_bar_holder");








window.addEventListener('scroll', function() {
  var finoffset = parseInt(headerstyle.getPropertyValue("height"))+parseInt(headerstyle.getPropertyValue("margin-top"))+parseInt(bodystyle.getPropertyValue("margin-top"))




  var offset = window.scrollY;
  
  if (offset > finoffset) {
    navbar.classList.add('sticky');



    
  } else {

    navbar.classList.remove('sticky');

    
  }
});

