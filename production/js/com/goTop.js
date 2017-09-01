define(["jquery"],function(){
    var GoTop1=(function(){
        var GoTop=function($ct){
            this.init($ct);
            this.bind();
        }
        GoTop.prototype.init=function($ct){
            this.createHtml($ct);
        }
        GoTop.prototype.bind=function(){
            var _this=this;
            this.isShow();
            $(window).on("scroll",function(){
                _this.isShow();
            });
            this.$backtop.on("click",function(){
               $(window).scrollTop(0);
            });
        }
        GoTop.prototype.createHtml=function($ct){
            var html='<div class="backtop"><a>Top</a></div>';
            var $html=$(html);
            $html.find("a").css({display: 'inline-block', position: 'fixed',right: '100px', bottom: '50px',padding: '10px 16px','border-radius': '3px',color: '#fff',
            'box-shadow': '0 1px 3px 1px rgba(162,102,12,.6)',cursor: 'pointer','background-color': '#fed136'});
            $html.find("a").hide();
            $ct.append($html);
            this.$backtop=$ct.find(".backtop");
            return $(html);
        };
        GoTop.prototype.isShow=function(){
            var scrollTop=$(window).scrollTop();
            if(scrollTop>100) this.$backtop.find("a").show(1000);
            if(scrollTop<100) this.$backtop.find("a").hide();
        }
        return {
            init:function($ct){
                $ct.each(function(index, value){
                    new GoTop($(this));
                })
            }
        }
    })();
    return GoTop1;
});