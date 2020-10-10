define(["parabola", "jquery", "jquery-cookie"], function(Parabola, $){
    function banner() {
        $(function(){
              var buyPro = $(".js-buyProcedure");
              var sellPro = $(".js-sellProcedure")
              buyPro.mouseenter(function(){
                $(".js-sellProcedure").removeClass("active");
                $(".slide-area .sell").removeClass("active");
                $(".sale-car-procedure").attr("id"," ");
                $(".sell-car-nav").attr("id"," ");

                $(".js-buyProcedure").addClass("active");
                $(".slide-area .buy").addClass("active");
                $(".buy-car-procedure").attr("id","active");
                $(".buy-car-nav").attr("id","active");
                
            }).mouseleave(function(){
                clearInterval(timer)
            })

              sellPro.mouseenter(function(){
                $(".js-buyProcedure").removeClass("active");
                $(".slide-area .buy").removeClass("active");
                $(".buy-car-procedure").attr("id","");
                $(".buy-car-nav").attr("id","");

                $(".js-sellProcedure").addClass("active");
                $(".slide-area .sell").addClass("active");
                $(".sale-car-procedure").attr("id","active");
                $(".sell-car-nav").attr("id","active");

            }).mouseleave(function(){
                clearInterval(timer1)
            })
        
            var btn = $(".buy-car-nav").find("ul li")
            var step = $(".buy-car-procedure").find("li")
            var area = $(".slide-area .buy").find("li")
            var iNow = 0;
            var timer = null;
            
            $(".index-buysell-step").mouseenter(function(){
                clearInterval(timer)
                clearInterval(timer1)
            }).mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    iNow1++;
                    tab();
                    sell()
                },2000)
            });

            btn.click(function(){
               iNow = $(this).index();
               tab();
            })  
             timer = setInterval(function(){
                iNow++;
                tab();
            },2000)

            function tab(){
                btn.removeClass("active").eq(iNow).addClass("active")
                area.css("opacity",0).eq(iNow).css("opacity",1)
                step.removeClass("active").eq(iNow).addClass("active")
                if(iNow == 4){
                    btn.eq(0).addClass("active");
                    iNow = 0;
                };  
                
            }
            var btn1 = $(".sell-car-nav").find("ul li")
            var step1 = $(".sale-car-procedure").find("li")
            var area1 = $(".slide-area .sell").find("li")
            var iNow1 = 0
            var timer1 = null;
            btn1.click(function(){
              iNow1 = $(this).index();
              sell();
           })
           
           timer1 = setInterval(function(){
              iNow1++;   
              sell();
          },2000)
            
            function sell(){
                btn1.removeClass("active").eq(iNow1).addClass("active")
                area1.css("opacity",0).eq(iNow1).css("opacity",1)
                step1.removeClass("active").eq(iNow1).addClass("active")
                if(iNow1 == 4){
                    btn1.eq(0).addClass("active");
                    iNow1 = 0;
                };  
            }
         
        })
        
    }
    return{
        banner:banner
    }
});