jQuery(document).ready(function( $ ) {

  $('.testinmonial_slider').slick({
    dots:true,
    infinite:true,
    speed:200,
    autoplay:true
  });


   $(".myslide").slick({
     infinite:true,
     speed:200,
     autoplay:true
   });


      $(".logo_slider").slick({
        infinite:true,
        speed:100,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll:1
      });


    jQuery("body").niceScroll({
		cursorcolor:"black",
		cursorborder:"0px",
		cursorwidth :"8px",
		zindex:"9999"
	});

});
