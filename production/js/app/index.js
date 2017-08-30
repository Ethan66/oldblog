$(window).on("resize",function(){
  setbanner();
});
var setbanner= function(){
  var windowWidth=$(window).width();
  var $bannerLi=$("body").find("#banner li");
  $bannerLi.css("width",windowWidth);
  $("#banner ul").css("width",windowWidth*$bannerLi.length);
}
setbanner();