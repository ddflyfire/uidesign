// JavaScript Document
//<![CDATA[

// Pop Up Animation by Rob Hills
var jq = jQuery.noConflict();
jq(function() {
	var offsetX = 50
	var offsetY = -50

	jq('.pop-up-link').click(function(e) {
		jq(this).next().css({

			"top" : e.pageY + offsetY
		}).css({
			"left" : e.pageX + offsetX
		}).fadeIn(500);
		return false;
	});

	jq(".close").click(function() {
		jq('.pop-up-link').next().fadeOut(500);
		return false;
	});
});

//]]>