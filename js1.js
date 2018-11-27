var c = 0
var b =0
var d = 0
 var flag = 0
window.onload=function() {


var fasong=document.querySelector(".fasong")
  fasong.addEventListener("click",function(){
     if(document.getElementsByClassName("neirong")[0].value.length == 0){
        alert("请输入内容")
      }
      else if (document.getElementsByClassName("nicheng")[0].value.length == 0){
        alert("请输入昵称")
      }
           
          
     else if(d < 5){
        d = d+1
        var neirong = document.getElementsByClassName("neirong")[0]
        var a =neirong.value
        var b =document.getElementsByClassName("nicheng")[0].value
        var p=document.querySelector("#first-"+d+"")
        p.insertAdjacentHTML("afterbegin","<p class='the"+d+"'>"+"<br>"+"用户名:"+b+"</br>"+"留言:"+a+"</p>")
        document.querySelector(".dianzan"+d+"").style.cssText="display:inline"
        document.querySelector(".pinglun"+d+"").style.cssText="display:inline"
        document.getElementsByClassName("neirong")[0].value= ""
        document.getElementsByClassName("nicheng")[0].value= ""
        
    }
    else {
        alert("回复数已满")
    }
  })
     

var neirong = document.querySelector(".neirong")
neirong.addEventListener("click",function(){
    c = c +1
  if(c == "1"){
     document.getElementsByClassName("neirong")[0].value = ""
     document.getElementsByClassName("neirong")[0].style.cssText="color:black"
    }
    

  })
var nicheng = document.querySelector(".nicheng")
nicheng.addEventListener("click",function(){
  b = b +1
  if(b=="1"){
    document.getElementsByClassName("nicheng")[0].value = ""
    document.getElementsByClassName("nicheng")[0].style.cssText="color:black"
  }
    

}) 


var dianzan = document.querySelector("#first")
dianzan.addEventListener("click",function(e){
    
    flag= flag+1
 if ((flag % 2 == 1)&&(e.target.className.replace("dianzan","")== "1" || e.target.className.replace("dianzan","")== "2" ||e.target.className.replace("dianzan","")== "3" ||e.target.className.replace("dianzan","")== "4" ||e.target.className.replace("dianzan","")== "5" )&& (document.querySelector(".dianzan1").value == "点赞"||document.querySelector(".dianzan2").value == "点赞"||document.querySelector(".dianzan3").value == "点赞"||document.querySelector(".dianzan4").value == "点赞"||document.querySelector(".dianzan5").value == "点赞")){
    var str = e.target.className
    var z = str.replace("dianzan","")
    document.getElementsByClassName("the"+z)[0].style.cssText="color:red"
    document.querySelector(".dianzan"+z).value="取消赞"
    
    }
 else if (flag % 2 == 0  &&(e.target.className.replace("dianzan","")== "1" || e.target.className.replace("dianzan","")== "2" ||e.target.className.replace("dianzan","")== "3" ||e.target.className.replace("dianzan","")== "4" ||e.target.className.replace("dianzan","")== "5" ))
    dianzan.addEventListener("click",function(e){
    var str = e.target.className
    var a = str.replace("dianzan","")
    document.getElementsByClassName("the"+a)[0].style.cssText="color:black"
    document.querySelector(".dianzan"+a).value="点赞"
    
},true)

})
 

















var pinglun = document.querySelector("#first")
  pinglun.addEventListener("click",function(e){
    if(e.target.className.replace("pinglun","")== "1" || e.target.className.replace("pinglun","")== "2" ||e.target.className.replace("pinglun","")== "3" ||e.target.className.replace("pinglun","")== "4" ||e.target.className.replace("pinglun","")== "5" ){
     
    var pinglunNicheng = prompt("请输入你的昵称")
    var pinglunNerrong = prompt("请输入想评论的内容")
    if(pinglunNicheng == null ||  pinglunNerrong == null){alert("评论失败了嘤嘤嘤")}
    else{
      
    var str = e.target.className
    var k = str.replace("pinglun","")
    var p=document.querySelector(".the"+k+"")
    p.insertAdjacentHTML("afterend","<div id='kong'></div><p class='theT"+k+"'>"+"<br>"+"评论者:"+ pinglunNicheng+"</br>"+"评论:"+pinglunNerrong+"</p>")
 
  }
    
    }




    
  })  
  



 
} 






    
    




    
    
