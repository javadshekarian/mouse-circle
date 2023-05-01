document.onmousemove=(event)=>{
    var circle=document.createElement("div")
    var colors=['red','yellow','blue','green','brown','pink','tomato','purple','paleturquoise']
    // var colors=["brown"]
    var x=Math.random()
    circle.setAttribute('class','circle')
    circle.style.left=event.clientX+"px"
    circle.style.top=event.clientY+"px"
    circle.style.transition="all 1s linear"
    ///////////////////////////
    document.body.appendChild(circle)
    circle.style.left = circle.offsetLeft - 20 + "px"
    circle.style.top = circle.offsetTop - 20 + "px"
    // circle.style.width="20px"
    // circle.style.height="20px"
    // circle.style.borderColor=colors[Math.tranc(x*10)]
    // circle.style.opacity=0

    circle.style.border='5px solid '+ colors[Math.floor(Math.random() * colors.length)]
    circle.style.width = "50px"
    circle.style.height = "50px"
    circle.style.borderRadius="75px"
    circle.style.opacity = 0
}
