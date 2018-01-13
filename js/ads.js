// JavaScript Document for Lighbox effect

(function() {
	"use strict";
	


	
	
	
	jQuery(document).ready(function($) {
  
  // global variables for script
  var current, size;
  
  $('.lightboxTriggersss').click(function(e) {
    
    // prevent default click event
    e.preventDefault();
    
    // grab href from clicked element
    var image_href = $(this).attr("href");  
    
    // determine the index of clicked trigger
    var slideNum = $('.lightboxTriggersss').index(this);
    
    // find out if #lightbox exists
    if ($('#lightboxsss').length > 0) {        
      // #lightbox exists
      $('#lightboxsss').fadeIn(300);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="lightboxss">' +
          '<p>Close</p>' +
          '<div id="slideshowsss">' +
          '<ul></ul>' +        
          '<div class="navsss">' +
          '<a href="#prevsss" class="prevsss slide-nav">prev</a>' +
          '<a href="#nextsss" class="nextsss slide-nav">next</a>' +
          '</div>' +
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
      
      // fill lightbox with .lightboxTrigger hrefs in #imageSet
      $('#imageSetsss').find('.lightboxTriggersss').each(function() {
        var $href = $(this).attr('href');
        $('#slideshowsss ul').append(
          '<li>' +
          '<img src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshowsss ul > li').length;
    
    // hide all slide, then show the selected slide
    $('#slideshowsss ul > li').hide();
    $('#slideshowsss ul > li:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('body').on('click', '#lightboxsss', function() { // using .on() instead of .live(). more modern, and fixes event bubbling issues
    $('#lightboxsss').fadeOut(300);
  });
  

  
  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {
    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    
    // looking for .prev
    if ($this.hasClass('prevsss')) {
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
    $('#slideshowsss ul > li:eq(' + current + ')').fadeOut(750);
    $('#slideshowsss ul > li:eq(' + dest + ')').fadeIn(750);
    
    // update current slide
    current = dest;
  });
  
});
	
	

})();