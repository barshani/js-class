import {countriesArr,getRgb} from "./helper.js";
let head=document.querySelector('#title');
let selection=document.querySelector('#country');
let elem=document.querySelector('#wrap');
countriesArr.map((item)=>{
   selection.innerHTML+=`<option value="${item}" selected>${item}</option>`
})
let myBtn = document.createElement("button");
myBtn.textContent = "click me";
elem.appendChild(myBtn);
myBtn.addEventListener("click",()=>{
 let red=document.querySelector('#r').value;
 let green=document.querySelector('#g').value;
 let blue=document.querySelector('#b').value;
 let country=document.querySelector('#country').value;
   if(red>256)
      red=256;
    if(blue>256)
      blue=256;
    if(g>256)
      green=256;
 head.style.backgroundColor=getRgb(red,green,blue);
 let countryTitle=document.querySelector('#state');
 countryTitle.innerHTML=country;
})

