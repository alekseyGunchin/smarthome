$(window).load(function() {
	$('#featured').orbit({
		'timer' : true,
		'animation' : 'horizontal-slide'
	});

	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});

	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
		if(event.which=='27'){
			$('.cd-testimonials-all').removeClass('is-visible');	
		}
	});
	
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
		itemSelector: '.cd-testimonials-item'
	});

	$('a').on('click', function(e){
		e.preventDefault();
	});

	$('#ddmenu li').hover(function () {
		clearTimeout($.data(this,'timer'));
		$('ul',this).stop(true,true).slideDown(200);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('ul',this).stop(true,true).slideUp(200);
		}, this), 100));
	});
});