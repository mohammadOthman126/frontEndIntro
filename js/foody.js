var contactPage = document.getElementById('pag4')
console.log(contactPage)
function contactus(){
    alert('you are want to go to pag4');
    contactPage.innerHTML="page4 accessed"
    contactPage.style.backgroundColor="red"
    contactPage.style.width="400px"
}
var num1=document.getElementById('num1')
var num2=document.getElementById('num2')
var operation=document.getElementById('operation')
function calculate(){
    console.log(num1.value)
    console.log(num2.value)
    var result=document.getElementById('result')
    if(operation.value==='+'){
    result.innerHTML=parseInt(num1.value)+parseInt(num2.value)}
    else if(operation.value==='-')
    {
        result.innerHTML=parseInt(num1.value)-parseInt(num2.value) 
    }
    else if (operation.value==='*')
    {
        result.innerHTML=parseInt(num1.value)*parseInt(num2.value)
    }
    else if (operation.value==='/')
    {
        result.innerHTML=parseInt(num1.value)/parseInt(num2.value)
    }

}