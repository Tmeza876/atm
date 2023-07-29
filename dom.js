var accounts = [
    { name: "Mali",balance: 200, password:"peace" },
    { name: "Gera",balance: 290, password:"ackee123"},
    { name: "Maui",balance: 67,password:"jericho@123" },
  ];
    var account_found = {};
function enter(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    
    for (let index = 0; index < accounts.length; index++) {
      const account = accounts[index];
      if (username == account.name && password == account.password){
        account_found = account;
      }
    }
    if (Object.keys(account_found).length > 0) {
      document.getElementById ("login").hidden = true;
      document.getElementById ("info").hidden = false;
      document.getElementById ("balance").innerHTML = "your balance is :" + account_found.balance.toString();
      
    } else {  
      alert ("wrong username");
   }
  }
function withdrawal(){

    if (Object.keys(account_found).length > 0) {
        var amount = document.getElementById ("withdrawal").value;
        amount = Number(amount);
        if (amount < 0){ 
          alert ("this tranaction is invalid");
        }else{
        var account_temporal = account_found.balance - amount;
    if (account_temporal < 11){  
      alert ("you do not have sufficient fund")
    } else { 
        account_found.balance = account_found.balance - amount;
    }}

      document.getElementById ("balance").innerHTML = "your balance is :" + account_found.balance.toString();
    
    } else {  
      alert ("wrong username");
    }
  }
function deposit(){

  if (Object.keys(account_found).length > 0) {
      var amount = document.getElementById ("deposit").value;
      amount = Number(amount);
      if (amount < 0){ 
        alert ("this tranaction is invalid");
      }else{
      account_found.balance = account_found.balance + amount;
      }
    document.getElementById ("balance").innerHTML = "your balance is :" + account_found.balance.toString();
  
  } else {  
    alert ("wrong username");
}
  }

