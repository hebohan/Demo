(function(){
	var isLocated = false;

	$('.nav-wrap').on('click','.main-nav',function(e) {
		e.preventDefault();

		var me = $(this),
			navWrap = me.closest('.nav-wrap'),
			navs = navWrap.find('nav a');

		if (!navWrap.hasClass('active') && !isLocated) {
			var	width = navWrap.width(),
				radius = width / 2;

			var	startAngle = 0,
				endAngle = 360;

			var total = navs.length,
				gap = (endAngle - startAngle) / total;

			$.each(navs, function(index, item){
				var myAngle = (startAngle + gap*index *(Math.PI / 180));

				var	myX = radius + radius * Math.cos( myAngle ),
					myY = radius + radius * Math.sin( myAngle );

				$(this).css({
					left: myX + 'px',
					top:  myY + 'px'
				});
			});

			isLocated = true;
		};

		navWrap.toggleClass('active');
	});
})();