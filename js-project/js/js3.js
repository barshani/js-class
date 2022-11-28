let elem=document.querySelector('.array');
let numArr=[];
let addNumber=()=>{
    let num=document.querySelector('#number');
    numArr.push(parseInt(num.value));
    num.value='';
}
let sortArrey=(arr)=>{
  let temp=0;
  for(let i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
     if(arr[i]>arr[j])
     {
       temp=arr[i];
       arr[i]=arr[j];
       arr[j]=temp;
     }
    }
  } 
  return arr;
}
let sort=()=>{
    let arr=sortArrey(numArr);
    elem.innerHTML=arr;
}
let randNum=()=>{
    let num=document.querySelector('#random')
    for(let i=0;i<parseInt(num.value);i++){
        numArr.push(Math.floor(Math.random()*100)+1);
       
    }
    num.value='';
}