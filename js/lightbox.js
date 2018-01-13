// JavaScript Document for Lighbox effect

(function() {
	"use strict";
	

//variables
var modal = document.querySelector("#myModal"); //this is how the close and next buttons appear and disappear
var span = document.querySelectorAll(".close");
var imgs = document.querySelectorAll(".character");
var modalImg = document.querySelector("#img01");
var captionText = document.querySelector("#caption");

//functions
function opens() 
{
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

function closes() 
{ 
  modal.style.display = "none";
}

//function next

//function previous

//listeners
 for(var i=0; i<span.length; i++) { 
 	span[i].addEventListener("click", closes, false);
 }
 
 for(var x=0; x<imgs.length; x++) { 
 	imgs[x].addEventListener("click", opens, false);
 }
	
	
	
	
	//slider
	var v = 0;
	var images = [];
	var time = 1;
	var slide = document.querySelector("#slide");
	
	images[0] = "marketing.jpg";
	images[1]= "websites.jpg";
	images[2] = "websites.jpg";
	
	function changeImg()
	{
		document.slide.src = images[v];
		if(v<images.length-1){
			v++;
		}else{
			v = 0;
		}
	}
	
	setTimeout("changeImg()", time);
	
	
	
	jQuery(document).ready(function($) {
  
  // global variables for script
  var current, size;
  
  $('.lightboxTrigger').click(function(e) {
    
    // prevent default click event
    e.preventDefault();
    
    // grab href from clicked element
    var image_href = $(this).attr("href");  
    
    // determine the index of clicked trigger
    var slideNum = $('.lightboxTrigger').index(this);
    
    // find out if #lightbox exists
    if ($('#lightbox').length > 0) {        
      // #lightbox exists
      $('#lightbox').fadeIn(300);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="lightbox">' +
          '<p>Close</p>' +
          '<div id="slideshow">' +
          '<ul></ul>' +        
          '<div class="nav">' +
          '<a href="#prev" class="prev slide-nav">prev</a>' +
          '<a href="#next" class="next slide-nav">next</a>' +
          '</div>' +
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
      
      // fill lightbox with .lightboxTrigger hrefs in #imageSet
      $('#imageSet').find('.lightboxTrigger').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow ul').append(
          '<li>' +
          '<img src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshow ul > li').length;
    
    // hide all slide, then show the selected slide
    $('#slideshow ul > li').hide();
    $('#slideshow ul > li:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('body').on('click', '#lightbox', function() { // using .on() instead of .live(). more modern, and fixes event bubbling issues
    $('#lightbox').fadeOut(300);
  });
  

  
  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {
    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    
    // looking for .prev
    if ($this.hasClass('prev')) {
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
    $('#slideshow ul > li:eq(' + current + ')').fadeOut(750);
    $('#slideshow ul > li:eq(' + dest + ')').fadeIn(750);
    
    // update current slide
    current = dest;
  });
  
});
	
	

})();