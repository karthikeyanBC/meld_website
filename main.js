// $(document).ready(function(){
//     $('.venobox').venobox(); 
//   });

lightGallery(document.getElementById('lightgallery'), {
    mode: 'lg-fade',
    selector: '.sb',
    preload	:3,
    enableTouch:true,
    enableDrag: true,
    download: false
}); 

$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['Home', 'About', 'OurWork', 'ContactUs'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['Home', 'About', 'Our Work', 'Contact Us']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 1,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});