let num = document.getElementById("num");
let num2 = document.getElementById("num2");
let result = document.getElementById("answer");
function plusOne(){
    num.innerHTML=Number(num.innerHTML)+1;
}
function minusOne(){
    if(num.innerHTML!=0)
       num.innerHTML=Number(num.innerHTML)-1;
}
function plusOne2(){
    num2.innerHTML=Number(num2.innerHTML)+1;
}
function minusOne2(){
    if(num2.innerHTML!=0)
       num2.innerHTML=Number(num2.innerHTML)-1;
}
function sum()
{
   result.innerHTML=Number(num.innerHTML)+Number(num2.innerHTML);
}
function reduce()
{
   result.innerHTML=Number(num.innerHTML)-Number(num2.innerHTML);
}