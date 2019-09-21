(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      
      var text = this.text;
      var href = this.href;
      console.log(text,href);

      if(text.includes('About') || text.includes('Contact'))
      {
        console.log(text,target)
      } else{
        target.slideToggle(1000);           

      }



 
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
      
  });



  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });




})(jQuery); // End of use strict

$(window).on('resize', function() {
widthOnLoadAboutSection();
})


$(function(){
 widthOnLoadAboutSection();
});


function widthOnLoadAboutSection(){
  if($(window).width() <= 1220) {
    $('#about-text').addClass('col-lg-10 mx-auto');
    $('#about-text').removeClass('col-sm-7');

}else{
    $('#about-text').addClass('col-sm-7');
    $('#about-text').removeClass('col-lg-10 mx-auto');
}
}

