
        // open all images
function opera() {
    var openOpera=document.getElementById('wrapper');
    openOpera.classList.toggle("openOpera")
};
    // open all images
function bridge() {
    var openBridge=document.getElementById('wrapper');
    openBridge.classList.toggle("openBridge")
};
    // open   mob menu
function openMenu() {
    var menur = document.getElementById("wrapper");
    menur.classList.toggle('menuopen')
};
      //  scroll smooth
$("body").on('click', '[href*="#"]', function(e){
var fixed_offset = 0;
$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
e.preventDefault();
});


    // bth for go top
var top_show = 300; 
var delay = 1000; 
$(document).ready(function() {
$(window).scroll(function () { 

if ($(this).scrollTop() > top_show) $('#scroll-up').fadeIn();
else $('#scroll-up').fadeOut();
});
$('#scroll-up').click(function () { 

$('body, html').animate({
scrollTop: 0
}, delay);
});
})