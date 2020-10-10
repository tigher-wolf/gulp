define(["parabola", "jquery", "jquery-cookie"], function(Parabola, $){
function collect(){
    $(function(){
        sc_msg()
        sc_num()
    
        //右侧收藏夹进入进出
        $(".right-collect .toolbar").click(function(){
            $("div").attr("id","active")
        })
        $("button").click(function(){
            $("div").attr("id"," ")
        })
    
        //获取数据
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
        
        //给收藏加点击事件
        $(".index_car .one").on("click",".collect",function(){
            var id = this.id
            var first = !($.cookie("goods"))
            if(first){
                $.cookie("goods",JSON.stringify([{id:id,num:1}]),{
                    expires:7
                })
            }else{
                var cookieArr = JSON.parse($.cookie("goods"));
                var same = false;
                for(var i = 0;i < cookieArr.length;i++){
                    if(cookieArr[i].id == id){
                        same = true;
                        break;
                    }
                }
                same ? alert("已收藏过，切勿重复收藏") : cookieArr.push({id:id,num:1})
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }
            // console.log(id)
            sc_msg();
            sc_num();
        })
    
        //移出收藏
        $(".r-collect ul").on("click",".remove-collect",function(){
            var id = $(this).closest("li").remove().attr("id");
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0;i < cookieArr.length;i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i,1);
                    break;
                }
            }
            if(cookieArr.length){
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                $.cookie("goods",null)
            }
            sc_num()
        })
    
        function sc_msg(){
            var cookieStr = $.cookie("goods")
            if(!cookieStr){
                return
            }
    
            //下载商品数据
            $.ajax({
                url:'../json/lovecar.json',
                success:function(arr){
                    var cookieArr = JSON.parse(cookieStr)
                    var newArr = []
                    for(var i = 0;i < arr.length;i++){
                        for(var j = 0;j < cookieArr.length;j++){
                            if(cookieArr[j].id == arr[i].id){
                                arr[i].num = cookieArr[j].num;
                                newArr.push(arr[i]);
                                break;
                            }
                        }
                    }
    
    
                    var  obj = ``
                    for(let i = 0;i < newArr.length;i++){
                        obj += 
                            `
                            <li id="${newArr[i].id}">
                            <a href="#">
                                <img src="${newArr[i].img}" alt="奇瑞 瑞虎3 2014款 1.6L 手动智尚版">
                                <h2 class="t">${newArr[i].t}</h2>
                                <!-- 年款里程 -->
                                <div class="t-i">${newArr[i].ti}
                                    <span class="icon-pad">|</span>
                                    ${newArr[i].tii}
                                </div>
                                <div class="t-price">
                                    <!-- 价格 -->
                                    <p>${newArr[i].p}<span>万</span></p>
                                    <!-- 标签 -->
                                    <em class="line-through">${newArr[i].em}</em>
                                </div>
                                <!-- 上侧标签 -->
                                 <em class="icon-new">新上架</em>
                            </a>
                            <i class="remove-collect">移出收藏</i>
                        </li>
                            `
                    }
                    $(".r-collect ul").html(obj)
                },
                console:function(error){
                    console.log(error)
                }
            })
        
           
        }
    
        function sc_num(){
            var cookieStr = $.cookie("goods");
            var sum = 0;
            if(cookieStr){
              var cookieArr = JSON.parse(cookieStr);
              for(var i = 0; i < cookieArr.length; i++){
                sum += cookieArr[i].num;
              }
            }
            $(".r-collect span").html(sum);
          }
     
     
    })
  }
  return {
      collect:collect
  }
})