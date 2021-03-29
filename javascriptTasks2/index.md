---
layout: layouts/post.njk
title: Functions & Control Flow - Part 2
templateClass: tmpl-post
eleventyNavigation:
  key: Functions & Control Flow - Part 2
  order: 8
---

# Tasks

## Task 1

```
function percentageCalculator(number, percent) {
    let result = (number/100) * percent
    return result
}

console.log(percentageCalculator(50, 50))

```
## Task 2

```
function drinkOrder(size, drink) {
    switch(drink) {
        case "cola":
        return "You have ordered a " + size + " of " + drink;
        break;

        case "fanta":
        return "You have ordered a " + size + " of " + drink;
        break; 

        case "sprite":
        return "You have ordered a " + size + " of " + drink;
        break;
    }
}

console.log(drinkOrder("large", "sprite"));

```

## Task 3

```
function calculator(number1, number2, operator) {
    switch(operator) {
        case "+":
            return console.log(number1 + " " + "+" + " " + number2 + " " + "=" + " " + number1 + number2);
            break;
        case "-":
            return console.log(number1 + " " + "-" + " " + number2 + " " + "=" + " " + number1 - number2);
            break;
        case "*":
            return console.log(number1 + " " + "*" + " " + number2 +  " " + "=" + " " + number1 * number2);
            break;
        case "/":
            return console.log(number1 + " " + "/" + " " + number2 + " " +  "=" + " " + number1 / number2);
            break;
        case "%":
            return console.log(number1 + " " + "&" + " " + number2 + " " + "=" + " " + number1 & number2);
            break;
    }
}

calculator(5, 10, "*");

```