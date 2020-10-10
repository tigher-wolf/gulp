define(["parabola", "jquery", "jquery-cookie"], function(Parabola, $){
    function particulars(){
        $(function(){
             function screen(){
                 $(".list-title").mouseenter(function(){
                     $('.list-title').attr("id"," ")
                     $(this).attr("id","active")
                     $("div").removeClass("active")
                     $(this).next().addClass("active")
                 })


                 $(".list").mouseleave(function(){
                     $(this).find("div").removeClass("active")
                 })


                 $(".dropdown a").click(function(){
                     $(this).parent().prev().html($(this).html())
                 }).mouseenter(function(){
                     $(this).css("color","red")
                     $(this).parent().find("a").eq(0).css("color","white")
                     $(".dd-option").find("a").css("color","#495056")
                     
                 }).mouseleave(function(){ 
                    $(this).css("color","#495056")
                    $(this).parent().find("a").eq(0).css("color","white")
                    $(".dd-option").find("a").css("color","#495056")
                 })

                               
                 $(".many a").mouseenter(function(){
                     $(this).css({
                         backgroundColor:"#22ac38",
                         color:"white"
                     })
                 }).mouseleave(function(){
                    $(this).css({
                        backgroundColor:"white",
                        color:"#495056"
                    })
                 })


                 $(".dd").mouseenter(function(){
                     $(this).find(".dd-option").css("display","block")
                     
                 }).mouseleave(function(){
                     $(this).find(".dd-option").css("display","none")
                 })
             }
             screen()
            
             $.ajax({
                url:'../json/lovecar.json',
                success:function(arr){
                    var  obj = ``
                    for(let i = 0;i < arr.length;i++){
                        obj += 
                            `
                            <li>
                            <a href="commodity.html">
                                <img src="${arr[i].img}" alt="奇瑞 瑞虎3 2014款 1.6L 手动智尚版">
                                <h2 class="t">${arr[i].t}</h2>
                                <!-- 年款里程 -->
                                <div class="t-i">${arr[i].ti}
                                    <span class="icon-pad">|</span>
                                    ${arr[i].tii}
                                </div>
                                <div class="t-price">
                                    <!-- 价格 -->
                                    <p>${arr[i].p}<span>万</span></p>
                                    <!-- 标签 -->
                                    <em class="line-through">${arr[i].em}</em>
                                </div>
                                <!-- 上侧标签 -->
                                 <em class="icon-new">新上架</em>
                            </a>
                            <i class="collect" id="${arr[i].id}">加入收藏</i>
                        </li>
                            `
                    }
                    $(".index_car .one,.three,.seven,.five").html(obj)
                },
                console:function(error){
                    console.log(error)
                }
            })
             $.ajax({
                url:'../json/newcar.json',
                success:function(arr){
                    var  obj = ``
                    for(let i = 0;i < arr.length;i++){
                        obj += 
                            `
                            <li>
                            <a href="commodity.html">
                                <img src="${arr[i].img}" alt="奇瑞 瑞虎3 2014款 1.6L 手动智尚版">
                                <h2 class="t">${arr[i].t}</h2>
                                <!-- 年款里程 -->
                                <div class="t-i">${arr[i].ti}
                                    <span class="icon-pad">|</span>
                                    ${arr[i].tii}
                                </div>
                                <div class="t-price">
                                    <!-- 价格 -->
                                    <p>${arr[i].p}<span>万</span></p>
                                    <!-- 标签 -->
                                    <em class="line-through">${arr[i].em}</em>
                                </div>
                                <!-- 上侧标签 -->
                                 <em class="icon-new">新上架</em>
                            </a>
                            <i class="collect" id="${arr[i].id}">加入收藏</i>
                        </li>
                            `
                    }
                    $(".index_car .two,.four,.six").html(obj)
                },
                console:function(error){
                    console.log(error)
                }
            })
             $(".filter .left a").click(function(){
                 $(".filter .left a").attr("class","")
                 $(this).attr("class","active")
                 let index = $(".filter .left a").index($(this))
                //  console.log(index)
                 $(".carlist .index_car ul").css("display","none")
                 $(".carlist .index_car ul").eq(index).css("display","block")
             })
             
           
        })
    }
    return{
        particulars:particulars
    }
})