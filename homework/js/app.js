let elem=document.querySelector('#wrap')
let type=["heart","club","diamond","spades"];
let flag=true;
let deck=[];
class Card{
    constructor(type,number){
        this.type=type;
        this.number=number;
    }
    render(){
        elem.innerHTML+="<div>"+this.type+' of '+this.number+"</div>";
    }
}
let btn=document.createElement("button");
btn.textContent='press me';
elem.appendChild(btn);
btn.addEventListener("click",()=>{
    for(let i =0; i<52;i++){
    let rand=Math.floor(Math.random()*13)+1;
    let randType=Math.floor(Math.random()*4);
    let newCard=new Card(rand,type[randType]);
    deck.map((card)=>{
        if(card.number===newCard.number&&card.type===newCard.type)
            flag=false;
    })
    if(flag){
       deck.push(newCard);
       newCard.render();
    }
    else{
        i--;
        flag=true;
    }
}
})
