var c = 0


window.onload=function() {


   var fasong=document.querySelector(".fasong")
     fasong.addEventListener("click",function(){
           if(document.getElementsByClassName("neirong")[0].value.length == 0){
               alert("请输入内容")
           }
           else if (document.getElementsByClassName("nicheng")[0].value.length == 0){
              alert("请输入昵称")
           }
           
          
            else if(c < 5){c = c+1
            var neirong = document.getElementsByClassName("neirong")[0]
            var a =neirong.value
            var b =document.getElementsByClassName("nicheng")[0].value
            var p=document.querySelector("#first-"+c+"")
            p.insertAdjacentHTML("afterbegin","<p class='the"+c+"'>"+"<br>"+"用户名:"+b+"</br>"+"留言:"+a+"</p>")
            document.querySelector(".dianzan"+c+"").style.cssText="display:inline"
            document.getElementsByClassName("neirong")[0].value= ""
            document.getElementsByClassName("nicheng")[0].value= ""
        }
             else {
            alert("回复数已满")
           }
     })

  var neirong = document.querySelector(".neirong")
  neirong.addEventListener("click",function(){
    if(document.getElementsByClassName("neirong")[0].value == "请在此输入内容--By⑨"){
      document.getElementsByClassName("neirong")[0].value = ""
      document.getElementsByClassName("neirong")[0].style.cssText="color:black"
    }
    

  })
   var neirong = document.querySelector(".nicheng")
  neirong.addEventListener("click",function(){
    if(document.getElementsByClassName("nicheng")[0].value == "请在此输入昵称--By⑨"){
      document.getElementsByClassName("nicheng")[0].value = ""
      document.getElementsByClassName("nicheng")[0].style.cssText="color:black"
    }
    

  }) 






var dianzan1 = document.querySelector(".dianzan1")
  dianzan1.addEventListener("click",function(){
  document.getElementsByClassName("the1")[0].style.cssText="color:red" 
  dianzan1.value="取消赞"
  dianzan1.addEventListener("click",function(){
  document.getElementsByClassName("the1")[0].style.cssText="color:black" 
  dianzan1.value="不给点赞了"
  
  })
})
var dianzan2 = document.querySelector(".dianzan2")
  dianzan2.addEventListener("click",function(){
  document.getElementsByClassName("the2")[0].style.cssText="color:red"
  dianzan2.value="取消赞"
  dianzan2.addEventListener("click",function(){
  document.getElementsByClassName("the2")[0].style.cssText="color:black" 
  dianzan1.value="不给点赞了"
  })
})
var dianzan3 = document.querySelector(".dianzan3")
  dianzan3.addEventListener("click",function(){
  document.getElementsByClassName("the3")[0].style.cssText="color:red"
  dianzan3.value="取消赞"
  dianzan3.addEventListener("click",function(){
  document.getElementsByClassName("the3")[0].style.cssText="color:black" 
  dianzan1.value="不给点赞了"
  })
})
var dianzan4 = document.querySelector(".dianzan4")
  dianzan4.addEventListener("click",function(){
  document.getElementsByClassName("the4")[0].style.cssText="color:red"
  dianzan4.value="取消赞"
  dianzan4.addEventListener("click",function(){
  document.getElementsByClassName("the4")[0].style.cssText="color:black" 
  dianzan1.value="不给点赞了"
  })
})
var dianzan5 = document.querySelector(".dianzan5")
  dianzan5.addEventListener("click",function(){
  document.getElementsByClassName("the5")[0].style.cssText="color:red"
  dianzan5.value="取消赞"
  dianzan5.addEventListener("click",function(){
  document.getElementsByClassName("the5")[0].style.cssText="color:black" 
  dianzan1.value="不给点赞了"
  })
})

          
    
} 






    
    




    
    
