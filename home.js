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
   if (money === "" || money < 1 || isNaN(money)) {
  alert("⚠️ Invalid amount! Please enter a number greater than 0.");
}else{
   const totalAmount=totalBalance.innerText
      const amount=parseInt(totalAmount)
   const total=money+amount

totalBalance.innerText=total  

}
    
   
const addMoney = document.getElementById("add-head").innerText;

const ul = document.getElementById("ul");
const now=new Date()
const date=now.toLocaleString()

const li = document.createElement("li");
li.innerText = `${addMoney},- ${date}`  ;   

ul.appendChild(li);        
console.log(li);  

})


// cash out
buttonCashOut.addEventListener("click",function(even){
    even.preventDefault()
    
    const withdraw=document.getElementById("Amount-withdraw")
    const money=addMoneyConvert(withdraw)
    
   const totalAmount=totalBalance.innerText
      const amount=parseInt(totalAmount)
   const total=amount-money

totalBalance.innerText=total 

const cashOut = document.getElementById("cash-head").innerText;

const ul = document.getElementById("ul");
const now=new Date()
const date=now.toLocaleString()

const li = document.createElement("li");
li.innerText = `${cashOut},- ${date}`  ;   

ul.appendChild(li);        
console.log(li);
})

