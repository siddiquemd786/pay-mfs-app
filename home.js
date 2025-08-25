// home.js
const buttonAddMoey=document.getElementById("btn-add-money")
const acountNumber=document.getElementById("Ac-Number")
const addAmount=document.getElementById("Amount")
const pinNumber=document.getElementById("pin")
const totalBalance=document.getElementById("balance")


function addMoneyConvert(id){
   const value=id.value
   const valueConvert= parseInt(value)
   return valueConvert
    
}






buttonAddMoey.addEventListener("click",function(even){
    even.preventDefault()
    const money=addMoneyConvert(addAmount)
    
   const totalAmount=totalBalance.innerText
      const amount=parseInt(totalAmount)
   
   
   

    const total=money+amount

totalBalance.innerText=total
   
    
    
    
})