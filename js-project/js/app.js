 let firstColor=document.getElementById('first');
 let secondColor=document.getElementById('second');
let colorMaker=()=>{
   let r=document.getElementById('number');
   let g=document.getElementById('number2');
   let b=document.getElementById('number3');
   if(r.value===''||g.value===''||b.value==='')
    {
        prompt("missings some numbers...")
        
    }
    else if(r.value>256||r.value<0||g.value>256||g.value<0||b.value>256||b.value<0)
    {
        prompt("color number need to be between 0 to 256");
    }
    else{
        if(firstColor.style.backgroundColor===''){
            firstColor.style.backgroundColor=`rgb(${r.value},${g.value},${b.value})`;
        }
        else if(secondColor.style.backgroundColor===''){
            secondColor.style.backgroundColor=`rgb(${r.value},${g.value},${b.value})`
        }
         else{
             prompt("sorry you picked two colors already")
        }
   }
   r.value='';
   g.value='';
   b.value='';
}
