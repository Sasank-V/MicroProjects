let body = document.querySelector("body");

body.addEventListener("mousemove",(event)=>{
    let span = document.createElement("span");
    body.append(span);
    span.style.left = event.offsetX + "px";
    span.style.top = event.offsetY + "px";
    const size = Math.floor(Math.random()*100);
    span.style.height = size + "px";
    span.style.width = size + "px";
    setTimeout(()=>{
        span.remove();
    },3000);
})