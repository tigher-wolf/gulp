define(["parabola", "jquery", "jquery-cookie"], function(Parabola, $){
    function magnifying(){
        $(function(){
            $(".small").mouseenter(function(){
                $(".mark,.big").show();
              }).mouseleave(function(){
                $(".mark,.big").hide();
              }).mousemove(function(ev){
                var l = ev.clientX - $(this).offset().left - 100;
                var t = ev.clientY - $(this).offset().top;
                //限制出界
                l = Math.max(0, l);
                l = Math.min(400, l);
                t = Math.max(0, t);
                t = Math.min(200, t);
  
                $(".mark").css({
                  left: l,
                  top: t
                })
                $(".big img").css({
                  left: -2 * l,
                  top: -2 * t
                })
              })

              function big(){
                  $(".wrapper ul").find("li").mouseenter(function(){
                      var img = $(this).find("img")
                      $(this).find(".green").css("display","block")
                      $(".big-img").css("display","block")
                      img.clone(true).appendTo(".big-img")
                  }).mouseleave(function(){
                    $(this).find(".green").css("display","none")
                    $(".big-img").css("display","none").html("  ")
                  })
                  var iNow = 0;
                  $(".next").click(function(){    
                      var ul = $(".wrapper ul")
                      iNow++
                      ul.animate({
                          left: iNow * -126
                      })
                    if(iNow == 4){
                        ul.animate({
                            left: iNow * -126 + 93
                        })
                    } 
                    if(iNow >= 4){
                        iNow = 0
                        
                        return iNow
                    }
                      console.log(iNow)
                  })
                  $(".prev").click(function(){
                      var ul = $(".wrapper ul")
                        iNow--
                        ul.animate({
                            left:iNow * -126
                        })
                        if(iNow < 0){
                            ul.stop().animate()
                            iNow = 0
                            return iNow
                        } 
                        console.log(iNow)
                  })
                
              }
              big()

              function slide(){
                $(".close").click(function(){
                  $(".a2-show").css("display","none")
                })
                $(".btn .a2").click(function(){
                  $(".a2-show").css("display","block")
                })
              }
              slide()
        })
    }
    return{
        magnifying:magnifying
    }
})