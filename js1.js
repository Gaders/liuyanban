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
           
          
     else if(c < 5){
        c = c+1
        var neirong = document.getElementsByClassName("neirong")[0]
        var a =neirong.value
        var b =document.getElementsByClassName("nicheng")[0].value
        var p=document.querySelector("#first-"+c+"")
        p.insertAdjacentHTML("afterbegin","<p class='the"+c+"'>"+"<br>"+"用户名:"+b+"</br>"+"留言:"+a+"</p>")
        document.querySelector(".dianzan"+c+"").style.cssText="display:inline"
        document.querySelector(".pinglun"+c+"").style.cssText="display:inline"
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


var dianzan = document.querySelector("#first")
dianzan.addEventListener("click",function(e){
 if ((e.target.className.replace("dianzan","")== "1" || e.target.className.replace("dianzan","")== "2" ||e.target.className.replace("dianzan","")== "3" ||e.target.className.replace("dianzan","")== "4" ||e.target.className.replace("dianzan","")== "5" )&& document.querySelector(".dianzan1").value == "点赞"){
    var str = e.target.className
    var a = str.replace("dianzan","")
    document.getElementsByClassName("the"+a)[0].style.cssText="color:red"
    document.querySelector(".dianzan"+a).value="取消赞"
    }
  else if(document.querySelector(".dianzan1").value == "取消赞"||document.querySelector(".dianzan2").value == "取消赞"||document.querySelector(".dianzan3").value == "取消赞"||document.querySelector(".dianzan4").value == "取消赞"||document.querySelector(".dianzan5").value == "取消赞"){
    var str = e.target.className
    var a = str.replace("dianzan","")
    document.getElementsByClassName("the"+a)[0].style.cssText="color:black"
    document.querySelector(".dianzan"+a).value="不给赞了"
  }
 
})
  

var pinglun = document.querySelector("#first")
  pinglun.addEventListener("click",function(e){
    if(e.target.className.replace("pinglun","")== "1" || e.target.className.replace("pinglun","")== "2" ||e.target.className.replace("pinglun","")== "3" ||e.target.className.replace("pinglun","")== "4" ||e.target.className.replace("pinglun","")== "5" ){
      var str = e.target.className
      var a = str.replace("pinglun","")
      pinglunNicheng = prompt("请输入你的昵称")
      pinglunNerrong = prompt("请输入想评论的内容")
      var p=document.querySelector(".the"+a+"")
      p.insertAdjacentHTML("afterend","<div id='kong'></div><p class='theT"+a+"'>"+"<br>"+"评论者:"+ pinglunNicheng+"</br>"+"评论:"+pinglunNerrong+"</p>")
    }
  })



 
} 






    
    




    
    
