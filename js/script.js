document.getElementById("messi").addEventListener('click',function(){
    let nameList = document.getElementById("name-list");
    let list = document.createElement("li");

    
})

document.getElementById("calculate-player").addEventListener('click', function(){
    let playerPrice = document.getElementById("player-price").value;

    let totalPlayerCost = document.getElementById("total-player-cost");
    
    let playerAmmount = playerPrice * 5;
    totalPlayerCost.innerText = playerAmmount;

    document.getElementById("calculate-total-button").addEventListener('click', function(){
        let managerPrice = document.getElementById("manager-price").value;
        let coachPrice = document.getElementById("coach-price").value;
    
        let calculateTotal = document.getElementById("calculate-total");
        let totalCost = parseInt(playerAmmount) + parseInt(managerPrice) + parseInt(coachPrice);
        
    
        calculateTotal.innerHTML = totalCost;
    })

})



