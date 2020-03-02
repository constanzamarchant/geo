$('.main_nav__toggle').click(function() {

  $('.main_nav__list').toggleClass('opening');
  $(this).toggleClass('open');

})

var acc = document.getElementsByClassName("main_container__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("main_container__accordionequipo");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelequipo = this.nextElementSibling;
    if (panelequipo.style.maxHeight) {
      panelequipo.style.maxHeight = null;
    } else {
      panelequipo.style.maxHeight = panelequipo.scrollHeight + "px";
    } 
  });
}