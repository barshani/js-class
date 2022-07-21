let elem = document.getElementById("root");
let myPosts = [];
 let post1= {
    index: 0,
    title: "superman",
    image: `<img src="./images/superman-logo-6315068_1280.png" alt="superman" style="width:100px; height: 100px;">`,
    power: "fly, lazer , strong , speed",
  };
  let post2={
    index: 1,
    title: "batman",
    image: `<img src="./images/bat-3726896_1920.png" alt="batman" style="width:100px; height: 100px;">`,
    power: "rich, deep voice",
  };
  let post3 ={
    index: 2,
    title: "flash",
    image: `<img src="./images/flash-297580_1280.png" alt="flash" style="width:100px; height: 100px;">`,
    power: "speeed",
  };
myPosts.push(post1);
myPosts.push(post2);
myPosts.push(post3);
for (let obj of myPosts) {
  elem.innerHTML += `
    <div class="inner-div m-5" style="border: 3px solid black; width: 200px; display: inline-block; text-align: center">
    <div><strong>${obj.title} </strong></div>
    <div> ${obj.image} </div>
    <small>power: ${obj.power} </small>
</div> `;
}