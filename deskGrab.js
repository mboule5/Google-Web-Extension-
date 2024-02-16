const input = document.querySelector("#title-bar > h3.noTemplate > span");
const deskGrab = document.getElementById("deskGrab");

deskGrab.addEventListener("click", function() {
    navigator.clipboard.writeText(input.value);
    
});