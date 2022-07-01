let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let shapeArr = ['hearts','diamonds','spades','clubs'];
let y = 0;
let x = 0;
while(x<13&&y<4){
    console.log(numArr[x++]+" "+shapeArr[y]);
    if(x===13){
        x=0;
        y++;
    }
}