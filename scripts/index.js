let totalAmount=localStorage.getItem("amount") ||0
document.querySelector("#wallet").innerText=totalAmount

function myFunction(){
let enterAmount=document.querySelector("#amount").value
totalAmount=Number(totalAmount)+Number(enterAmount)

console.log(totalAmount)
localStorage.setItem("amount",JSON.stringify(totalAmount))
document.querySelector("#wallet").innerText=totalAmount
location.reload


}
