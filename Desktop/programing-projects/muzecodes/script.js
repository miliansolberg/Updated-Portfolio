function scrollToElement (obj) {
  $('html, body').animate({
    scrollTop: obj.offset().top
  }, 2000);    
};

$(document).on('click', 'https://t.co/eub6r9B4i3', function () {
  scrollToElement($(this));
});