let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let shapeArr = ['hearts','diamonds','spades','clubs'];
let y = 0;
for(let x = 0; x<numArr.length; x++){
    console.log(numArr[x]," of ",shapeArr[y++]);
    if(y===4){
        y=0;
    }
}