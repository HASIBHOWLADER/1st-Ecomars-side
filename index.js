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
// time.........opan

setInterval(()=>{
    let date=new Date();
    let hourse=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if(hourse>12){
hourse=hourse-12;
    }if(min<10){
min="0"+min;
    }if(sec<10){
sec="0"+sec;
    }
    let sum=hourse+ ":"+min+":"+sec;
    console.log(sum);
    document.querySelector(".time").innerHTML=sum;

},100)

setInterval(()=>{
    let date=new Date();
    let hourse=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if(hourse>12){
hourse=hourse-12;
    }if(min<10){
min="0"+min;
    }if(sec<10){
sec="0"+sec;
    }
    let sum=hourse+ ":"+min+":"+sec;
    console.log(sum);
    document.querySelector(".times").innerHTML=sum;

},100)
// time close...........close
