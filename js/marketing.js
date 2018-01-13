// JavaScript Document for Lighbox effect

(function() {
	"use strict";

	
	
	jQuery(document).ready(function($) {
  
  // global variables for script
  var current, size;
  
  $('.lightboxTriggerssss').click(function(e) {
    
    // prevent default click event
    e.preventDefault();
    
    // grab href from clicked element
    var image_href = $(this).attr("href");  
    
    // determine the index of clicked trigger
    var slideNum = $('.lightboxTriggerssss').index(this);
    
    // find out if #lightbox exists
    if ($('#lightboxssss').length > 0) {        
      // #lightbox exists
      $('#lightboxssss').fadeIn(300);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="lightboxssss">' +
          '<p>Close</p>' +
          '<div id="slideshowssss">' +
          '<ul></ul>' +        
          '<div class="navssss">' +
          '<a href="#prevssss" class="prevssss slide-nav">prev</a>' +
          '<a href="#nextssss" class="nextssss slide-nav">next</a>' +
          '</div>' +
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
      
      // fill lightbox with .lightboxTrigger hrefs in #imageSet
      $('#imageSetssss').find('.lightboxTriggerssss').each(function() {
        var $href = $(this).attr('href');
        $('#slideshowssss ul').append(
          '<li>' +
          '<img src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshowssss ul > li').length;
    
    // hide all slide, then show the selected slide
    $('#slideshowssss ul > li').hide();
    $('#slideshowssss ul > li:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('body').on('click', '#lightboxssss', function() { // using .on() instead of .live(). more modern, and fixes event bubbling issues
    $('#lightboxssss').fadeOut(300);
  });
  

  
  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {
    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    
    // looking for .prev
    if ($this.hasClass('prevssss')) {
      dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
    } else {
      // in absence of .prev, assume .next
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
    }
    
    // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshowssss ul > li:eq(' + current + ')').fadeOut(750);
    $('#slideshowssss ul > li:eq(' + dest + ')').fadeIn(750);
    
    // update current slide
    current = dest;
  });
  
});
	
		

})();