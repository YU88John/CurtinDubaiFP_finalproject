function check(){

let password1 = document.getElementById("pwd").value;
let password2 = document.getElementById("rpwd").value;
let title = document.getElementById("title").value;
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let email_val = "@"; 


if (name == "" || email == "" || password1 == "" || password2 == ""){
    alert("Please fill in all the fields")
    return false;
}
else if (password1.length < 5 || password2.length < 5){
    alert("Password should be longer than 5 characters")
    return false;
} 
else if (password1.length > 15 || password2.length > 15){
    alert("Password cannot be loonger than 15 character")
    return false; 
}
else if (password1 !== password2){
    alert("Passwords do not match")
    return false;
} 
else if(!email.match(email_val)){
    alert("Invalid email")
    return false;
}
else{
    document.getElementById("whole").style.display = "none";
    let welcomeMessage = "Welcome  " + title + " " + name + 
    "! <br> You have successfully registered for Millennial Records.";
    document.getElementById("welcomeMsg").innerHTML = welcomeMessage;
}
}

