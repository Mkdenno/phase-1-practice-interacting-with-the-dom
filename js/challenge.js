
const secondsEl= document.getElementById('counter');
const minusEl= document.getElementById('minus');
const plusEl= document.getElementById('plus');
const heartEl= document.getElementById('heart');
const pauseEl= document.getElementById('pause');
let count=0;
const likes=document.querySelector('.likes')
const form=document.querySelector("#comment-form");

let sum=setInterval(timer,1000);
function timer(){
    count ++;
    secondsEl.innerHTML=count;
    return count;
}
minusEl.addEventListener("click", ()=>{
    count--;
    minusEl.stepUp()=count;
    return count;
})
plusEl.addEventListener("click", ()=>{
    count++;
    plusEl.stepUp()=count;
    return count;
})

heartEl.addEventListener('click',()=>{
let li=document.createElement("li")
console.log(count);
li.innerHTML=`${count} has been liked 1 time`
likes.appendChild(li)
})
let paused=true;
let resume=false;
pauseEl.addEventListener("click", ()=>{
    if(paused){
        clearInterval(sum)
        pauseEl.innerHTML="resume"
        minusEl.disable=true;
        plusEl.disable=true;
        heartEl.disable=true;
        secondsEl.disable=true;
    }
    else if(resume){
        pauseEl.innerHTML="pause"
        minusEl.disable=false;
        plusEl.disable=false;
        heartEl.disable=false;
        secondsEl.disable=false;
        setInterval(timer,1000);

    }
    else{
        return "Error";
    }
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let input=document.querySelector("#comment-input").value
    const comment=document.querySelector("#list")
    const p=document.createElement("p")
    p.innerHTML=input;
    comment.appendChild(p);


})
