//遵从AMD规范
define(["parabola", "jquery", "jquery-cookie"], function(Parabola, $){
    function body() {
        $(function(){ 
        /*        --   content   --       */
            $.ajax({
                url:'../json/change_img.json',
                success:function(arr){
                    var str = ``;
                        str += 
                        `
                     <li>
                        <img src="${arr[0].img}" alt="">
                        <p class="carName">两厢轿车</p>
                        <p class="carPrice">0.18万起</p>
                    </li>
                    <li>
                      <img src="${arr[1].img}" alt="">
                      <p class="carName">三厢轿车</p>
                      <p class="carPrice">0.15万起</p>
                  </li>
                  <li>
                      <img src="${arr[2].img}" alt="">
                      <p class="carName">跑车</p>
                      <p class="carPrice">2.38万起</p>
                  </li>
                  <li>
                      <img src="${arr[3].img}" alt="">
                      <p class="carName">SUV</p>
                      <p class="carPrice">0.5万起</p>
                  </li>
                  <li>
                      <img src="${arr[4].img}" alt="">
                      <p class="carName">MPV</p>
                      <p class="carPrice">0.72万起</p>
                  </li>
                  <li>
                      <img src="${arr[5].img}" alt="">
                      <p class="carName">面包车</p>
                      <p class="carPrice">0.16万起</p>
                  </li> 
                        `
                    $(".change_car .active").html(str);
                },
                    error:function(error){
                        console.log(error)
                    }
            })
 
           $(".usedCar").mouseenter(function(){
            $(".yanCar").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/yanxuan2.5ad2f9dcd798ee4f9b9469875327a0a2.png')"
            })
            $(".yanCar").find("i").css("display",'none')
            $(".selling").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/maiche2.8741e6b8d150855cd0914bc5bbd40232.jpg')"
            })
            $(".selling").find("i").css("display",'none')
            $(".financial").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/jinrong2.cbeaf4a85c95d8b9fb2b05fa526e0c4f.png')"
            })
            $(".financial").find("i").css("display",'none')

               $(this).attr("id","active").css({
                backgroundImage: "url('http://cli-sta.guazistatic.com/c2c_web/ershou.5b609a564a8686c63a02793d97cbc552.jpg')"
               })
               $(this).find("i").css({
                backgroundImage: "url('../img/ia_100000156.png')",
                backgroundSize:"100% 100%",
                display:'block'
               }) 
               $(".carPrice").css("color","green")
           })

           $(".yanCar").mouseenter(function(){
               $(".usedCar").css({
                   backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/ershou2.9622dba5dc5179b7d20a0084d5c41990.png')"
               })
               $(".usedCar").find("i").css("display",'none')
               $(".selling").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/maiche2.8741e6b8d150855cd0914bc5bbd40232.jpg')"
            })
               $(".selling").find("i").css("display",'none')
               $(".financial").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/jinrong2.cbeaf4a85c95d8b9fb2b05fa526e0c4f.png')"
            })
               $(".financial").find("i").css("display",'none')

               $(".carPrice").css("color","orange")
               $(this).attr("id","active").css({
                   backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/yanxuan.2623b8cd75f445cf45f0e06e8cb659c0.jpg')"
               })
               $(this).find("i").css({
                   display:"block",
                   backgroundSize:"100% 100%",
                   backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/icon-orange.51903464d913d05af169037192a9a7a3.png')"
               })
           })

           $(".selling").mouseenter(function(){
            $(".usedCar").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/ershou2.9622dba5dc5179b7d20a0084d5c41990.png')"
            })
            $(".usedCar").find("i").css("display",'none')
            $(".yanCar").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/yanxuan2.5ad2f9dcd798ee4f9b9469875327a0a2.png')"
            })
            $(".yanCar").find("i").css("display",'none')
            $(".financial").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/jinrong2.cbeaf4a85c95d8b9fb2b05fa526e0c4f.png')"
            })
            $(".financial").find("i").css("display",'none')

               $(".carPrice").css("color","red")
               $(this).attr("id","active").css({
                   backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/maiche.d9a067b58defd2e4acbff86ffdc8ea43.jpg')"
               })
               $(this).find("i").css({
                   display:"block",
                   backgroundSize:"100% 100%",
                   backgroundImage:'url("http://cli-sta.guazistatic.com/c2c_web/icon-red.ecb6a2ab68f94c146d18af307dde200c.png")'
               })
            })

           $(".financial").mouseenter(function(){
            $(".usedCar").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/ershou2.9622dba5dc5179b7d20a0084d5c41990.png')"
            })
            $(".usedCar").find("i").css("display",'none')
            $(".yanCar").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/yanxuan2.5ad2f9dcd798ee4f9b9469875327a0a2.png')"
            })
            $(".yanCar").find("i").css("display",'none')
            $(".selling").css({
                backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/maiche2.8741e6b8d150855cd0914bc5bbd40232.jpg')"
            })
            $(".selling").find("i").css("display",'none')

                $(".carPrice").css({
                        color:"#25b29d"
                })
                $(this).attr("id","active").css({
                    backgroundImage:"url('http://cli-sta.guazistatic.com/c2c_web/jinrong.e0f1db2687a8a398fee6235ebeacbaa4.jpg')"
                })
                $(this).find("i").css({
                display:"block",
                backgroundSize:"100% 100%",
                backgroundImage:'url("http://cli-sta.guazistatic.com/c2c_web/icon-turquise.c19efab2e6c9a00303867b4dbcd5f607.png")'
            })
            
            })



            /*            hotCar          */
            $.ajax({
                url:'../json/lovecar.json',
                success:function(arr){
                    var  obj = ``
                    for(let i = 0;i < arr.length;i++){
                        obj += 
                            `
                            <li>
                            <a href="#">
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
                            <a href="#">
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
                        </li>
                            `
                    }
                    $(".index_car .two,.four,.six").html(obj)
                },
                console:function(error){
                    console.log(error)
                }
            })
            let li = $(".index_nav ul").find("li");
            let ul = $(".index_car").find("ul");
            li.mouseenter(function(){
                li.attr("id","")
                ul.css("display","none").eq($(this).index()).css("display", 'block')

                $(this).attr("id","active")
            })

            // 预约卖车点击判断事件
            function click(){
                var btn = document.getElementById("click")
                var error = document.getElementById("error")
                var input = document.getElementById("input")

                btn.onclick =  function(){
                   let oValue = input.value 
                   if(!oValue){
                      error.style.display = "block"
                      error.innerHTML = "请输入手机号码"
                    }else{
                        if(oValue.length != 11){
                            error.style.display = "block"
                            error.innerHTML = "请输入正确的手机号格式"
                        }else if(!(/^1[3456789]\d{9}$/.test(oValue))){
                            error.style.display = "block"
                            error.innerHTML = "手机号格式不正确"
                        }else{
                            error.style.display = "block"
                            error.innerHTML = "手机号正确"
                            error.style.backgroundColor = "lawngreen"
                            error.style.color = "green"
                        }
                    }
                }
                error.onclick = function(){
                    error.style.display = "none"
                }
                
            }
            click();

            function scroll(){
                $(document).scroll(function(){
                    var res = $(this).scrollTop();
                    if(res >= 60){
                        $(".header_middle").slideDown(500).css("display","block")
                     }else{
                        $(".header_middle").slideUp(500).css({
                            top:"0px"
                        })
                     }
                     console.log(res)
                })
            }
            scroll()
            
        })
    }
    return{
        body:body
    }
});