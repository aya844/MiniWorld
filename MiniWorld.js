let world = document.querySelector("#title"); 
let inputText = document.querySelector("#colorPick"); 
let inputFont = document.querySelector("#font"); 
let selectPolice = document.querySelector("#police");

inputFont.value = window.getComputedStyle(world).fontSize.replace("px", "");
inputText.addEventListener("input", () => {
    world.style.color = inputText.value;
});

inputFont.addEventListener("input", () => {
    world.style.fontSize = inputFont.value + "px";
});

selectPolice.addEventListener("change", () => {
    world.style.fontFamily = selectPolice.value;
});
