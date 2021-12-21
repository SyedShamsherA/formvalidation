function validateform() {
let name = document.getElementById("name-element");
let age = documnet.getElementById("number-element");
let email = document.getElementById("mail");
let atposition=x.indexOf("@");  
let dotposition=x.lastIndexOf(".");
let password = document.getElementById("pwd").value;   

if ( name === null || name === "" ){
    alert("Name can't be blank");
    return false;
} if(age>18 && age<99){
    alert("age confirmed");
    return false;
}
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
}

if (password.length<8){  
    alert("Password must be at least 8 characters long.");  
    return false;  
}

let div = document.getElementById("last");
div.addEventListener("click" , function(){
    alert("Registration successful");
})