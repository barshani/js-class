let elemArr=document.getElementsByClassName('image');
let elem=document.querySelector('.gallery')
console.log(elemArr);
function biggerImage(myClass){
   let myImage = document.querySelector('#'+myClass);
 if( myImage.style.width!=='350px'&& myImage.style.height!=='400px'){
    for(i=0;i<elemArr.length;i++){
          elemArr[i].style.width='82px';
          elemArr[i].style.height='100px';
          elemArr[i].style.display='inline';
          elemArr[i].style.marginLeft='1px';
          elemArr[i].style.marginRight='1px';
          elemArr[i].style.marginBottom='1px';
      }
      elem.appendChild(myImage);
       myImage.style.width='350px';
       myImage.style.height='400px';
       myImage.style.display='block';
       myImage.style.marginLeft='1px';
       myImage.style.marginBottom='1px';
     }
     else{
       myImage.style.width='82px';
        myImage.style.height='100px';
        myImage.style.display='inline';
        myImage.style.marginLeft='1px';
        myImage.style.marginRight='1px';
        myImage.style.marginBottom='1px';
   }
}