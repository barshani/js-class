let myCont = document.getElementById("wrap");
myCont.innerHTML='<div class="div"></div><div class="div"></div><div class="div"></div><div class="div"></div>';
myCont.style.border = "3px solid black";
myCont.style.width = "258px";
let myDiv = document.getElementsByClassName('div');
console.log(myDiv.length)
for(let x = 0; x<myDiv.length; x++ ){
    myDiv[x].innerHTML += '<div class="inner-div"></div><div class="inner-div"></div><div class="inner-div"></div>';
    myDiv[x].style.display = "inline";
}
let myInDiv = document.getElementsByClassName("inner-div");
for(let x = 0; x<myInDiv.length; x++ ){
    myInDiv[x].style.width = "50px";
    myInDiv[x].style.height = "50px";
    myInDiv[x].style.backgroundColor = "blue";
    myInDiv[x].style.color = "white";
    myInDiv[x].style.textAlign = "center";
    myInDiv[x].style.margin = "5px";
    myInDiv[x].style.padding = "10px";  
    myInDiv[x].style.border = "3px solid black";
    myInDiv[x].style.display = "inline-block";
}
 myInDiv[0].innerHTML += 7;
 myInDiv[1].innerHTML += 8;
 myInDiv[2].innerHTML += 9;
 myInDiv[3].innerHTML += 4;
 myInDiv[4].innerHTML += 5;
 myInDiv[5].innerHTML += 6;
 myInDiv[6].innerHTML += 1;
 myInDiv[7].innerHTML += 2;
 myInDiv[8].innerHTML += 3;
 myInDiv[9].innerHTML += 0;
 myInDiv[10].innerHTML += ".";
 myInDiv[11].innerHTML += "+/-";