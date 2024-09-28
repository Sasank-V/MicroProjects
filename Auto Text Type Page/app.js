let h1 = document.querySelector("h1");
let roles = ["Student","Programmer","Web Developer"];
let div = document.querySelector(".container");

let charIdx = 0;
let rolesIdx = 0;

function updateText(){
    charIdx++;
    div.innerHTML = `<h1>I am a ${roles[rolesIdx].slice(0,charIdx)}</h1>`;
    if(charIdx == roles[rolesIdx].length){
        rolesIdx++;
        charIdx = 0;
    }
    if(rolesIdx == roles.length){
        rolesIdx = 0;
    }
    setTimeout(updateText,300);
}
updateText();
