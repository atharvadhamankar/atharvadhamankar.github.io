
var headerr  = document.getElementsByClassName("header-img")[0]
var bodyy = document.getElementsByClassName("bbody")[0]
var headerstyle = headerr.currentStyle || window.getComputedStyle(headerr);
var bodystyle = bodyy.currentStyle || window.getComputedStyle(bodyy);

// var headerheight  = parseInt(headerstyle.getPropertyValue("height"))
// var headermargintop = parseInt(headerstyle.getPropertyValue("margin-top"))
// var bodymargin = parseInt(bodystyle.getPropertyValue("margin-top"))

var moiphoto = document.getElementsByClassName("my-photo")[0]
var sidebar = document.getElementsByClassName("sub-sidebar")[0]


window.addEventListener('scroll', function() {
  var finoffset = parseInt(headerstyle.getPropertyValue("height"))+parseInt(headerstyle.getPropertyValue("margin-top"))+parseInt(bodystyle.getPropertyValue("margin-top"))


  
  
  var offset = window.scrollY;
  // document.getElementById("nav_bar_holder").style.width = document.getElementsByClassName("header-img")[0].width + 'px';
  if (offset > finoffset) {

    moiphoto.classList.remove('removrr');
    sidebar.classList.add('stickyside');
      
    // // Get the element by its ID
    // const element = sidebar
    // // Get the current styles of the element
    // const currentStyles = window.getComputedStyle(element);
    // // Set the position to fixed
    // element.style.position = 'fixed';
    // // Set the top, left, width, and height properties to match the current styles
    // element.style.top = currentStyles.getPropertyValue('top');
    // element.style.left = currentStyles.getPropertyValue('left');
    // element.style.width = currentStyles.getPropertyValue('width');
    // element.style.height = currentStyles.getPropertyValue('height');

    
    // moiphoto.classList.remove('invisiblr');

    setTimeout(() => {
      moiphoto.classList.remove('invisiblr');
    }, 10);
    

    
  } else {
    
    // setTimeout(() => {
    //   moiphoto.classList.add('removrr');
    // }, 80);

    moiphoto.classList.add('removrr');

    // moiphoto.classList.add('invisiblr');
   
    sidebar.classList.remove('stickyside');
    moiphoto.classList.add('invisiblr');

  }
});




// var headerr  = document.getElementsByClassName("header-img")[0]
// var bodyy = document.getElementsByClassName("bbody")[0]
// var headerstyle = headerr.currentStyle || window.getComputedStyle(headerr);
// var bodystyle = bodyy.currentStyle || window.getComputedStyle(bodyy);

// var headerheight  = int(headerstyle.getPropertyValue("height"))
// var headermargintop = int(headerstyle.getPropertyValue("margin-top"))
// var bodymargin = int(bodystyle.getPropertyValue("margin-top"))

// var finoffset = headerheight+headermargintop+bodymargin



// var p = document.getElementsByClassName("s-topbar")[0];
// var style = p.currentStyle || window.getComputedStyle(p);
// console.log(style.getPropertyValue("height"))