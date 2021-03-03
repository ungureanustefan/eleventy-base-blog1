function tip() {
    let total = document.getElementById("total").value;
    let totalToNumber = Number(total);
    let newTotal = totalToNumber + (totalToNumber/100) * document.getElementById("percentage").value;
    document.getElementById("newTotal").innerHTML = "Your total bill, with tip, is £" + newTotal + ".";
    let roundedTotal = newTotal.toFixed();
    document.getElementById("rounded").innerHTML = "Rounded total is £" + roundedTotal + ".";
    document.getElementById("total").value = 0;
    document.getElementById("percentage").value = 0;
}