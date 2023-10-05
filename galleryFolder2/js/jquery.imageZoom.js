(function ($) {
  $.fn.imageZoom = function (options) {
	
	var defaultSettings = {
		color:"#fff",
		bgColor:"#000",
		opacity:.5,
		captionHeight:30,
		fontSize:"10pt",
		fontFamily:"Arial, sans-serif"
	}
	
	var settings = $.extend(defaultSettings, options);
	
	$(this).each(function(i){
		if ($(this).is('img')){
		   var image = $(this);
		   imageClass = image.attr("class");
			image.wrap("<div class='"+imageClass+"'></div>");
			image.removeClass(imageClass);
			
			
			image.after("<span>"+image.attr("alt")+"</span>");
			image.after("<div class='bg'></div>");
			
			var wrapper = $('.'+imageClass)
			var txt = wrapper.find('span');
			var bg = $('.bg')

			var imageWidth = image.attr("width");
			var imageHeight = image.attr("height");

			/* Setting CSS */
			wrapper.css({
				display: "block",
				overflow: "hidden",
				position: "relative",
				height: imageHeight+"px", 
				width: imageWidth + "px"
			});

			bg.css({
				display:"block",
				position: "absolute", 
				height: settings.captionHeight +"px", 
				width: "100%",
				color: settings.color,
				backgroundColor: settings.bgColor,
				opacity: settings.opacity,
				top: imageHeight+"px",
				left: "0px"
			});

			txt.css({
				display:"block",
				position: "absolute", 
				height: settings.captionHeight +"px", 
				width: imageWidth,
				top : "100%",
				left: "0px",
				'line-height' : settings.captionHeight + "px",
				textAlign:"center",
				color: settings.color,
				fontSize:settings.fontSize,
				fontFamily: settings.fontFamily
			});
			
			/* Mouse Events */
			wrapper.hover(function(e){
				e.preventDefault();
				var image = $(e.currentTarget).find('img');
				var txt = $(e.currentTarget).find('span');
				var bg = $(e.currentTarget).find('div');
				image.stop().animate({
					width:"105%",
					height:"105%"
				}, 500);
				bg.stop().animate({
					top:imageHeight - settings.captionHeight +"px"
				}, 100);
				txt.stop().animate({
					top:imageHeight - settings.captionHeight +"px"
				},500);
			},
			function(e){
				var image = $(e.currentTarget).find('img').eq(0);
				var txt = $(e.currentTarget).find('span').eq(0);
				var bg = $(e.currentTarget).find('div').eq(0);

				image.stop().animate({
					width:"100%",
					height:"100%"
				}, 500);
				bg.stop().animate({
					top:"100%"
				});
				txt.stop().animate({
					top:"100%"
				},500);
			});
			
			}else{
				console.error("Requires an image and a span tag for imageZoom to work");
			}
	});
	
		
		
		
		

	
  };
})(jQuery);