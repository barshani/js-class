let elem=document.querySelector('#talkback');
let talkbeck=[];
function setTalkBack(){
  let name=document.querySelector('#name');
  let mail=document.querySelector('#email');
  let lName=document.querySelector('#lName');
  let comment=document.querySelector('#comment');
  if(name.value===''||mail.value===''||comment.value===''){
    alert("youre missing somthing")
  }
  else{
    talkbeck.push(`<div><h3>${name.value}</h3><h6>${mail.value}</h6><p>comment:<br>${comment.value}</p></div><hr>`);
    let jsArr = JSON.stringify(talkbeck);
    window.localStorage.setItem("testArr", jsArr);
    name.value='';
    mail.value='';
    comment.value='';
    lName.value='';
  }
  console.log(name,mail,comment)
}
function showComments(){
  let comments=document.querySelector('.talkback');
 comments.innerHTML='';
 let item= window.localStorage.getItem("testArr");
 talkbeck=JSON.parse(item);
 for(let i=0;i<talkbeck.length;i++){
    comments.innerHTML+=talkbeck[i];
 }
}