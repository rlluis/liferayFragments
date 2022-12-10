window.setTimeout(function(){
 var coll=$('.mainContainer').find('.lfr-layout-structure-item-collection');
	console.log("1"+coll.attr('class'));		
	coll.find('.row').wrapAll( "<div class='mySlider' />");
  
	sliderCandidate = coll.find('.mySlider');
console.log("2"+sliderCandidate.attr('class'));
	$(sliderCandidate).slick({
    autoplay: sliderAutoplay,
	  infinite: sliderInfinite,
    slidesToShow: numberSlides,
    slidesToScroll: numberSlides,
		dots: sliderDots,
		fade: fadeMode,
    centerMode: centerMode,
    centerPadding: centerPadding,		
		speed: sliderSpeed,
		autoplaySpeed: sliderAutoplaySpeed,
		adaptiveHeight: adaptiveHeight,
		appendArrows: 'div.buttonsWrapper',
		prevArrow:'<button class="btn slick-prev" type="button"><svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation"><use href="/o/classic-theme/images/clay/icons.svg#angle-left" /></svg><span class="sr-only">Previous</span></button>',
		nextArrow:'<button class="btn slick-next" type="button"><svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation"><use href="/o/classic-theme/images/clay/icons.svg#angle-right" /></svg><span class="sr-only">Next</span></button>',
		appendDots: 'div.slickDots'		
  });
},timeOut);