let btn=document.querySelectorAll(".box");
const array=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let turn=true;

btn.forEach((box)=>{
    box.addEventListener("click", () =>{
        if (turn===true){
            box.innerText="X";
            turn=false;
            box.disabled=true;
        }
        else{
             box.innerText="O";
             turn=true;
             box.disabled=true;
        }
        winner();
        
});
});
const winner=()=>{
    for(let pattern of array)
        console.log(btn[pattern[0]].innerText,btn[pattern[1]].innerText,btn[pattern[2]].innerText)
}
