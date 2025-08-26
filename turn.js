// turn.js
function handaler(id){
    const transation= document.getElementById(id)
    
   

const forms = document.getElementsByClassName("btn-6")

for(const form of forms){
    form.style.display="none"
}

transation.style.display="block"



}

document.getElementById("parent-add-money").addEventListener("click",function(){
 handaler("add-money")   
})

document.getElementById("parent-cash-out").addEventListener("click",function(){
 handaler("cash-out")   
})

document.getElementById("parent-transfer").addEventListener("click",function(){
 handaler("transfer")   
})

document.getElementById("parent-Get-Bonus").addEventListener("click",function(){
 handaler("Get-Bonus")   
})

document.getElementById("parent-pay-bill").addEventListener("click",function(){
 handaler("pay-bill")   
})
document.getElementById("parent-transaction").addEventListener("click",function(){
 handaler("transaction")   
})

document.getElementById("log-out-btn").addEventListener("click",function(){
    window.location.href="/index.html"
})


