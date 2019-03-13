$(document).ready(function(){
  $(".unchecked").click(function(){
	  if ($(this).css('opacity') === '1') 
        {$(this).animate({opacity: "0"},"100","linear");
	     $(this).siblings().click();
	     }
	  if ($(this).css('opacity') === '0') 
        {$(this).animate({opacity: "1"});
	     $(this).siblings().click();
	    }
     });
});

