// home.js
const buttonAddMoney=document.getElementById("btn-add-money")
const acountNumber=document.getElementById("Ac-Number")
const addAmount=document.getElementById("Amount")
const pinNumber=document.getElementById("pin")
const totalBalance=document.getElementById("balance")
const buttonCashOut=document.getElementById("btn-Cash-Out")


function addMoneyConvert(id){
   
   
   const value=id.value
   const valueConvert= parseInt(value)
   return valueConvert
    
}
// Add amount

buttonAddMoney.addEventListener("click",function(even){
    even.preventDefault()
    const money=addMoneyConvert(addAmount)
    
   const totalAmount=totalBalance.innerText
      const amount=parseInt(totalAmount)
   const total=money+amount

totalBalance.innerText=total    
})

// cash out
buttonCashOut.addEventListener("click",function(even){
    even.preventDefault()
    console.log("first")
    const withdraw=document.getElementById("Amount-withdraw")
    const money=addMoneyConvert(withdraw)
    
   const totalAmount=totalBalance.innerText
      const amount=parseInt(totalAmount)
   const total=amount-money

totalBalance.innerText=total    
})