$(document).ready(function(){
  $(window).scroll(function() {
    $('.fade-in').each(function(item) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object/2 ){
          $(this).animate({'opacity':'1'},2000);   
      }
    })

    $('.title').css('color', 'green');
  })
});