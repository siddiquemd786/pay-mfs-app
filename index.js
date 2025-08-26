// index.js
const inpNumber= document.getElementById("inputNumber")
const inpPin=document.getElementById("inputPin")
const btn=document.getElementById("button")

function numberConvert(id){
    const number=id.value
    const numberConverted=parseInt(number)
    return numberConverted

}


btn.addEventListener("click",function(e){
    e.preventDefault()
    let mobileNumber=01918532682;
    let pinNumber=1234
    
   let mobilCon= numberConvert(inpNumber)

    let pin=numberConvert(inpPin)
    if(mobileNumber===mobilCon && pinNumber===pin  ){
       window.location.href="/home.html"
    }else {
       alert("Enter your valid number")
    }



})


