let buttons = document.getElementsByClassName("player-select");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let nameList = document.getElementById("name-list");
        let playerName = document.getElementsByClassName("name")[i].innerText;

        let li = document.createElement("li");

        let list = document.querySelectorAll("#name-list li");

        if (list.length < 5) {
            li.innerText = playerName;
            nameList.appendChild(li);

            buttons[i].disabled = true;
        }
        else {
            alert("5 player exceeded");
        }
    })
}




function totalCalculate() {
    let playerPrice = document.getElementById("player-price").value;

    let totalPlayerCost = document.getElementById("total-player-cost");

    let list = document.querySelectorAll("#name-list li").length;

    let playerAmmount = playerPrice * list;
    totalPlayerCost.innerText = playerAmmount;

    document.getElementById("calculate-total-button").addEventListener('click', function () {
        let managerPrice = document.getElementById("manager-price").value;
        let coachPrice = document.getElementById("coach-price").value;

        let calculateTotal = document.getElementById("calculate-total");
        let totalCost = parseInt(playerAmmount) + parseInt(managerPrice) + parseInt(coachPrice);


        calculateTotal.innerHTML = totalCost;
    })
}

document.getElementById("calculate-player").addEventListener('click', totalCalculate);