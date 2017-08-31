define(["jquery"],function(){
  $(window).on("resize",function(){
    setbanner();
  });
  var setbanner= function(){
    var windowWidth=$(window).width();
    var $bannerLi=$("body").find("#banner .img li");
    $bannerLi.css("width",windowWidth);
    $("#banner .img").css("width",windowWidth*$bannerLi.length);
  }
  setbanner();
});
