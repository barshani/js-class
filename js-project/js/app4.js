let runners = {
    dog: {
        name: "dog",
        id: "dog",
        voice: "woof",
        img: "./images/general-hRZJZ-2021.06.28.08.22.59-dog.gif",
        step: 50
    },
    horse: {
        name: "horse",
        id: "horse",
        voice: "neigh",
        img: "./images/general-aEkOV-2021.06.28.08.22.59-horse.gif",
        step: 70
    },
    duck: {
        name: "duck",
        id: "duck",
        voice: "quack",
        img: "./images/general-FIXAF-2021.06.28.08.22.59-duck.gif",
        step: 40
    },
    chick: {
        name: "chick",
        id: "chick",
        voice: "cheap",
        img: "./images/general-qPu2r-2021.06.28.08.19.50-chick.gif",
        step: 30
    }
};
let race=document.querySelector('.race');
let charactor=document.querySelector('.charactor');
let dog=document.createElement('img');
dog.src=runners.dog.img;
dog.style.width='100px';
dog.style.height='100px';
dog.style.display='block';
dog.className='dog';
dog.style.transitionDuration='5s'
let horse=document.createElement('img');
horse.src=runners.horse.img;
horse.style.width='100px';
horse.style.height='100px';
horse.style.display='block';
horse.className='horse';
horse.style.transitionDuration='4s'
let duck=document.createElement('img');
duck.src=runners.duck.img;
duck.style.width='100px';
duck.style.height='100px';
duck.style.display='block';
duck.className='duck';
duck.style.transitionDuration='7s'
let chick=document.createElement('img');
chick.src=runners.chick.img;
chick.style.width='100px';
chick.style.height='100px';
chick.style.display='block';
chick.className='chick';
chick.style.transitionDuration='8s'
race.appendChild(dog);
race.appendChild(horse);
race.appendChild(duck);
race.appendChild(chick);
let btn=document.createElement('button');
btn.textContent='start race';
btn.style.display='block';
btn.addEventListener('click',()=>{
   dog.style.marginLeft='80vw'
   horse.style.marginLeft='80vw'
   duck.style.marginLeft='80vw'
   chick.style.marginLeft='80vw'
})
let btn2=document.createElement('button');
btn2.textContent='alighn animals';
btn2.addEventListener('click',()=>{
   dog.style.marginLeft='2vw'
   horse.style.marginLeft='2vw'
   duck.style.marginLeft='2vw'
   chick.style.marginLeft='2vw'
})
let dogChar=document.createElement('img');
dogChar.src=runners.dog.img;
dogChar.style.width='50px';
dogChar.style.height='50px';
dogChar.addEventListener('click',()=>{
    dog.style.transitionDelay='1s'
    horseChar.style.display='none';
    chickChar.style.display='none';
    duckChar.style.display='none';
})
let horseChar=document.createElement('img');
horseChar.src=runners.horse.img;
horseChar.style.width='50px';
horseChar.style.height='50px';
horseChar.addEventListener('click',()=>{
    horse.style.transitionDelay='1s'
    dogChar.style.display='none';
    chickChar.style.display='none';
    duckChar.style.display='none';
})
let duckChar=document.createElement('img');
duckChar.src=runners.duck.img;
duckChar.style.width='50px';
duckChar.style.height='50px';
duckChar.addEventListener('click',()=>{
    duck.style.transitionDelay='1s'
    dogChar.style.display='none';
    chickChar.style.display='none';
    horseChar.style.display='none';
})
let chickChar=document.createElement('img');
chickChar.src=runners.chick.img;
chickChar.style.width='50px';
chickChar.style.height='50px';
chickChar.addEventListener('click',()=>{
    chick.style.transitionDelay='1s'
    dogChar.style.display='none';
    horseChar.style.display='none';
    duckChar.style.display='none';
})
charactor.appendChild(dogChar)
charactor.appendChild(horseChar)
charactor.appendChild(duckChar)
charactor.appendChild(chickChar)
charactor.appendChild(btn)
charactor.appendChild(btn2)

