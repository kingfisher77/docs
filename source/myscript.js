$(document).ready(function(){

	$('header .links__icon').on('click', function (){
		$(this).next().slideToggle();
	});

	if($('.wy-menu-vertical li.toctree-l3.current>a').length){
		var sidebarScrollPosition = $('.wy-menu-vertical li.toctree-l3.current>a').offset().top;
		console.log(sidebarScrollPosition);
		$('.wy-side-scroll').scrollTop(sidebarScrollPosition-120);
	}

	var centerScroll = function(position){
		setTimeout(function(){
			var centerScrollPosition = $('.wy-nav-content-wrap').scrollTop();
			$('.wy-nav-content-wrap').scrollTop(centerScrollPosition-position);
		},100);
	};

	$('.wy-menu-vertical li.current li').on('click', function(){
		centerScroll(80);
	});

	centerScroll(75);

});