$(window).load(function(){
  $('#wrapper').addClass('loaded');
})

$('.more-info').click(function(){
  $("#card").toggleClass('flip');
  $('#arrow').remove();
});
$('#background').click(function(){
  $('#card').removeClass('flip');
})

document.onmousewheel = document.onwheel = function() {
return false;
};

document.addEventListener ("MozMousePixelScroll",
function() { return false }, false);

document.onkeydown = function(e) {
if (e.keyCode >= 33 && e.keyCode <= 40) return false;
}
