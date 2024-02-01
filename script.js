var btn = document.querySelector("button")
var main = document.querySelectorAll(".main")
var aj = document.querySelectorAll(".ab")
var playGround = document.querySelector(".playground")

var selected =  "";
btn.addEventListener("click",function(){
    main[1].style.transform = "translateY(-100%)"
})

aj.forEach(function(elem){
    elem.addEventListener("click",function(){
        main[2].style.transform = "translateY(-200%)"
      selected = elem.childNodes[3].getAttribute('src')
      var newImg = document.createElement("img")
       var x = Math.random()*100
       var y = Math.random()*100
       var rot = Math.random()*360
       newImg.setAttribute("src",selected)
       newImg.style.left = x+"%"
       newImg.style.top = y+"%"
       newImg.style.rotate = rot+"deg"

       playGround.appendChild(newImg)     
    })
    })
    document.querySelector(".hello").addEventListener("click",function(dets){
        var x = Math.random()*100
       var y = Math.random()*100
       var rot = Math.random()*360
       newImg.style.left = x+"%"
       newImg.style.top = y+"%"
       newImg.style.rotate = rot+"deg"
    })






