let saveDitails=()=>{
    let myName = document.querySelector('#name').value;
    let myPass = document.querySelector('#password').value;
    let jsName = JSON.stringify(myName);
    let jsPass = JSON.stringify(myPass);
    window.localStorage.setItem("name", jsName);
    window.localStorage.setItem("pass", jsPass);
    myName.value="";
    myMail.value="";
}