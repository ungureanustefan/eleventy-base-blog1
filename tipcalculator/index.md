---
layout: layouts/post.njk
title: Tip Calculator
templateClass: tmpl-post
eleventyNavigation:
  key: Tip Calculator
  order: 6
---
<!doctype html>
<html>
<head>
        <script>
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
        </script>
        <meta charset="utf-8" />
    </head>
    <body>
        <h1 style="text-align: center;">Type in the amount and press "Get Total" to see the total with tips.</h1>
        <div style="text-align: center;">
        <div>
            <h3>Total Amount</h3>
            <input type="number" id="total" name="total" min="1"></br>
        </div>
        <div>
            <h3>Percentage</h3>
            <input type="number" id="percentage" name="percentage" min="1">
        </div>
            <button onclick="tip()">Get total</button></br>
            </br>
            <span id="newTotal"></span></br>
            </br>
            <span id="rounded"></span> 
        </div>
    </body>
</html>