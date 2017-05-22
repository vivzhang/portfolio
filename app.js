$(document).ready(function(){

  $(".intro-fade-in").animate({"opacity": "1", "paddingTop": 0}, 1500);

  $(window).scroll(function() {
    $(".fade-in").each(function(item) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If half of the object is completely visible in the window, fade it */
      if( bottom_of_window > bottom_of_object/2 ){
          $(this).animate({"opacity":"1"}, 1500);   
      }
    })
  })

});