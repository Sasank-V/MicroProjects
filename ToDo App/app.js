let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let add = document.querySelector("button");

function addTask(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    inp.value = "";
    ul.append(li);
    
    let del = document.createElement("button");
    del.innerText = "remove";
    del.classList.add("rem");
    li.append(del);
}
    
add.addEventListener("click",addTask);
let dels = document.querySelectorAll(".rem");
for(del of dels){
    del.addEventListener("click",function(){
        this.parentElement.remove();
    });
}

ul.addEventListener("click",function(event) {
    if(event.target.nodeName== "BUTTON"){
        event.target.parentElement.remove();
    }
})