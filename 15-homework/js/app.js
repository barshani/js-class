import { vipArr } from "./vip.js";
let elem = document.querySelector('#wrap');
let i=0;
class Vip{
    constructor(name,worth,image){
        this.name=name;
        this.worth=worth;
        this.image=image;
        this.flag=0;
    }
    setFlag(){
        this.flag=1;
    }
    renderVip(){
       elem.innerHTML+=`
        <div class="inner-div" id=${i++}>
        <h3>name: ${this.name}</h3>
        <p>worth: ${this.worth}</p>
        <img src="${this.image}" alt="${this.name}">
    </div>
       `
    }
}
let myVipList=[];
vipArr.map((vip)=>{
    let fam= new Vip(vip.name,vip.worth,vip.image);
    myVipList.push(fam);
})
myVipList.map((vip)=>{
    vip.flag=0;
})
function print(myVipList){
myVipList.forEach((vip)=>{
        vip.renderVip();
})
}
print(myVipList);
let divs=document.querySelectorAll('.inner-div');
divs.forEach((div)=>{
    div.addEventListener('click',()=>{
         div.style.display='none';
      })
})
