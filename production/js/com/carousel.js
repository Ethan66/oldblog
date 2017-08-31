define(["jquery"],function(){
  var Carousel2=(function(){

    function Carousel1($ct){
      this.init($ct);
      this.bind();
    };
    Carousel1.prototype.init=function($ct){
      this.$ct=$ct;
      var $arrPre=this.$arrPre=this.$ct.find(".arrow.pre"),
        $arrNext=this.$arrNext=this.$ct.find(".arrow.next"),
        $ulImg=this.$ulImg=this.$ct.find("ul.img"),
        imgWidth=this.imgWidth=this.$ct.width(),
        imgCount=this.imgCount=this.$ct.find("ul.img li").length,
        $markLi=this.$markLi=this.$ct.find(".mark li"),
        curId=this.curId=0;
      this.isAnimate=false;
      !function addHtml(){
        var first=$ulImg.children("li").first().clone();
        var last=$ulImg.children("li").last().clone();
        $ulImg.append(first);
        $ulImg.children("li").first().before(last);
        $ulImg.css({"width":imgWidth*(imgCount+2)});
      }();
    };
    Carousel1.prototype.bind=function(){
      var _this=this;
      _this.playAuto();
      _this.$arrNext.on("click",function(){
        _this.playNext(1);
      });
      _this.$arrPre.on("click",function(){
        _this.playPre(1);
      });
      _this.$markLi.on("click",function(){
        var index=$(this).index();
        if(index<_this.curId){
          _this.playPre(_this.curId-index);
        }
        if(index>_this.curId){
          _this.playNext(index-_this.curId);
        }
        _this.setBullet(index);
      });
    };
    Carousel1.prototype.playAuto=function(){
      var _this=this;
      var clock=setInterval(function(){
        this.playNext(1);
      }.bind(_this),2000);
      _this.$ct.on("mouseenter",function(){
        clearTimeout(clock);
      });
      _this.$ct.on("mouseleave",function(){
        clock=setInterval(function(){
          _this.playNext(1);
        }.bind(_this),2000);
      });
    };
    Carousel1.prototype.playNext=function(len){
      var _this=this;
      if(_this.isAnimate) return;
      _this.isAnimate=true;
      _this.$ulImg.animate({"left":"-="+len*_this.imgWidth},300,function(){
        _this.curId+=len;
        if(_this.curId===_this.imgCount){
          len=1; _this.$ulImg.css({"left":-len*_this.imgWidth});
          _this.curId=0;
        };
        _this.setBullet(_this.curId);
        _this.isAnimate=false;
      });
    };
    Carousel1.prototype.playPre=function(len){
      var _this=this;
      if(_this.isAnimate) return;
      _this.isAnimate=true;
      _this.$ulImg.animate({"left":"+="+len*_this.imgWidth},300,function(){
        _this.curId-=len;
        if(_this.curId===-1){
          len=4; _this.$ulImg.css({"left":-len*_this.imgWidth});
          _this.curId=3;
        };
        _this.setBullet(_this.curId);
        _this.isAnimate=false;
      });
    };
    Carousel1.prototype.setBullet=function(index){
      var _this=this;
      _this.$markLi.removeClass("active").eq(index).addClass("active");
    };
    return {
      init: function($ct){
        $ct.each(function(index, value){
          new Carousel1($(this));
        })
      }
    }
  })();
  return Carousel2;
});

