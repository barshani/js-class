let logIn=()=>{
    let div= document.querySelector("#wrap")
    let Name = document.querySelector('#name');
    let myName=Name.value;
    let Pass = document.querySelector('#password');
    let myPass=Pass.value;
    let retName = window.localStorage.getItem("name");
    let retPass = window.localStorage.getItem("pass");
    let name = JSON.parse(retName);
    let pass = JSON.parse(retPass);
    if(myName===name&&myPass===pass){
      div.innerHTML=`<h1 id="title">hey ${name}</h1>
            <form action="input">
             <label for="r">r:</label>
            <input type="range" id="r" name="r" min="0" max="256">
             <label for="g">g:</label>
            <input type="range" id="g" name="g" min="0" max="256">
             <label for="b">b:</label>
            <input type="range" id="b" name="b" min="0" max="256">
        </form>`;
        let elem = document.querySelector('#wrap');
        let head=document.querySelector('#title');
        let myBtn=document.createElement("button");
        myBtn.textContent = "click me";
        elem.appendChild(myBtn);
        myBtn.style.width="100px";
        myBtn.style.marginLeft="23vw";
        myBtn.style.marginTop="5px";
        myBtn.addEventListener("click",()=>{
        red=document.querySelector('#r').value;
        green=document.querySelector('#g').value;
        blue=document.querySelector('#b').value;
         if(red>256)
            red=256;
         if(blue>256)
            blue=256;
        if(g>256)
            green=256;
         head.style.backgroundColor=`rgb(${red},${green},${blue})`;
        })
    }
    else{
      alert("try again");
       myName.value="";
       myPass.value="";
    }
   let color=()=>{
     let head=document.querySelector('#title');
     let red=document.querySelector('#r').value;
     let green=document.querySelector('#g').value;
     let blue=document.querySelector('#b').value;
     head.style.backgroundColor=`rgb(${red},${green},${blue});`;
   }
}