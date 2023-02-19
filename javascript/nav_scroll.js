

var container = document.getElementById('scrollability');
// var input = document.getElementById('scrollability');
// var scrollAmount = 0;
// var scrollMin = 0
// var scrollMax = input.clientWidth


// document.getElementById('slideRight').onclick = function () {
//   container.scrollBy(180,0 );
// };

// document.getElementById('slideLeft').onclick = function () {
//   container.scrollBy(-180,0);
// };



document.getElementById('slideRight').onclick = function () {
  container.scrollBy({
    left: 180,
    behavior: 'smooth'
  });
};

document.getElementById('slideLeft').onclick = function () {
  container.scrollBy({
    left: -180,
    behavior: 'smooth'
  });
};