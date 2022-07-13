document.querySelector(".short").addEventListener("click",shortby);
function shortby(){
   let degain= document.querySelector(".header2-bio");
   degain.classList.toggle("active");
}
document.querySelector(".great").addEventListener("click",removes)
function removes(){
    let degain= document.querySelector(".header2-bio");
    degain.classList.toggle("active");
}
