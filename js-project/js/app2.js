let cityList=document.querySelector('#myUL')
let cities=[];
let colorList=[];
function addCity(){
let city=document.querySelector('#city');
cities.push(city.value);
city.value='';
}
function search(){
    let search=document.querySelector('#myInput')
    let mySearch=search.value;
    let newList=cities.filter((city)=>{
        if(mySearch==''){
            return
        }
        return city.startsWith(mySearch)})
    cityList.innerHTML='';
    let i=0;
    newList.sort();
    newList.map((city)=>{
        i++;
      cityList.innerHTML+=`<li ondblclick="changeToWhite(${i})" onclick="changeColor(${i})" id="my${i}">${city}</li>`
      let r=Math.floor(Math.random()*156)
      let g=Math.floor(Math.random()*156)
      let b=Math.floor(Math.random()*156)
      colorList.push(`rgb(${r},${g},${b})`);
    })
}
function changeColor(i){
    let city=document.querySelector('#my'+i)
    city.style.backgroundColor=colorList[i];
}
function changeToWhite(i){
    let city=document.querySelector('#my'+i)
    city.style.backgroundColor='white';
}