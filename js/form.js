var userName=document.getElementById("name")
var email=document.getElementById("email")
var pass1=document.getElementById("pass1")
var pass2=document.getElementById("pass2")
var regButton=document.getElementById("regButton")

regButton.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted')
    if(pass1.value != pass2.value){
        alert ("password is not match")
        return;

    }
    userData = {
        userName:userName.value,
        email:email.value,
        pass1:pass1.value,
        pass2:pass2.value

    }

    localStorage.setItem('user',JSON.stringify(userData))
    alert("user register successfully")
    console.log(userData)

})