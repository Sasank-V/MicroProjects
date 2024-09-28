let head = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");
let body = document.querySelector("body");
function generateColor (){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    head.innerText = `rgb(${r},${g},${b})`;
    return head.innerText;
}

let inp = document.querySelector("input");
inp.addEventListener("keydown",generateColor);


let inp1 = document.createElement("input");
inp1.placeholder = "Enter your name";
let head1 = document.createElement("h2");
head1.innerText = "I am here!"

div.insertAdjacentElement("afterend",inp1);
div.append(head1);

inp1.addEventListener("input",function(){
    let value = this.value;
    let finalValue = "";
    for(ch of value){
        if((ch >= 'a' && ch<= 'z' )||(ch >='A' && ch <='Z') || ch == ' '){
            finalValue+=ch;
        }
    }
    head1.innerText = finalValue;
});

// document.addEventListener("scroll",function(){
//     body.style.backgroundColor = generateColor();
// });
// window.addEventListener("load",function(){
//     body.style.backgroundColor = generateColor();
// })