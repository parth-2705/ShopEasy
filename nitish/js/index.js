(function() {
  
  const next = () => slideShow(currentImage+1);
  
  let currentImage = 0,
      autoPlay = setInterval(next, 5000);
      
  const slideShow = n => {
    const slide = document.querySelectorAll('.slide'),
          indicator = document.querySelectorAll('.indicator');
    
    slide[currentImage].classList.remove('displayImg');
    indicator[currentImage].classList.remove('indicatorBg');
    currentImage = (n+slide.length)%slide.length;
    slide[currentImage].classList.add('displayImg');
    indicator[currentImage].classList.add('indicatorBg');
  }  
  
  const goToImage = e => {
    if ( e.target.classList.contains('one') ) {
      slideShow(0);    
    } else if ( e.target.classList.contains('two') ) {
        slideShow(1);
      } else if ( e.target.classList.contains('three') ) {
          slideShow(2);
        } else if ( e.target.classList.contains('four') ) {
            slideShow(3);
          } else if ( e.target.classList.contains('next') ) {
              slideShow(currentImage+1);
            } else if ( e.target.classList.contains('prev') ) {
                slideShow(currentImage-1);
              }
  }
  
  const pauseSlide = () => clearInterval(autoPlay);
  
  const resumeSlide = () => autoPlay = setInterval(next, 5000);

  /***Event Listeners***/
  const runCode = () => {
    const ssContainer = document.querySelector('.slideshowContainer');
    if ( ssContainer ) {
      ssContainer.addEventListener('mouseover', pauseSlide, false);
      ssContainer.addEventListener('mouseout', resumeSlide, false);
      ssContainer.addEventListener('click', goToImage, false);
    }
  }
  
  runCode();
  
})();