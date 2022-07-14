let list = [];

function addItem() {
  let newItem = document.querySelector("#item");
  let val = newItem.value;
  console.log(newItem);
  list.push(val);
  newItem.value="";
}
function dispList(){
    let dispElem =document.querySelectorAll(".disp");
    dispElem[0].innerHTML="<ul>";
    for(let item of list){
       dispElem[0].innerHTML += '<li id="'+item+'" onClick="mark('+item.trim()+')">'+item+'</li>';
    }
   dispElem[0].innerHTML+="</ul>";
}
function mark(listItem){
   listItem.innerHTML=listItem.innerHTML.trim();
   // console.log(listItem);
   listItem.style.textDecoration = "line-through";
}