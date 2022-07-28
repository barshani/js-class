let cars = [
  { name: "toyota", color: "red", age: 20 },
  { name: "aaudi", color: "black", age: 50 },
  { name: "ford", color: "yellow", age: 5 },
  { name: "siat", color: "green", age: 12 },
  { name: "lamborghini", color: "white", age: 1 },
  { name: "mitzubishi", color: "blue", age: 62 }
];
let myElem = document.querySelector('#printCars')
let i=1;
function print(){
    myElem.innerHTML="";
    let carAge = document.querySelector('#number').value;
    console.log(carAge)
    let myCars = cars.filter((car)=>car.age<=carAge);
    console.log(myCars)
    myCars.map((car) => {
  myElem.innerHTML += `
    <h4>car number ${i++}</h4>
    <div class="inner-car">name: ${car.name}</div>
    <div class="inner-car">color: ${car.color}</div>
    <div class="inner-car">age: ${car.age}</div>
    `;
});
i=1;
}