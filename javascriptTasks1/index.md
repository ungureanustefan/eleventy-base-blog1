---
layout: layouts/post.njk
title: Functions & Control Flow - Part 1
templateClass: tmpl-post
eleventyNavigation:
  key: Functions & Control Flow - Part 1
  order: 7
---

# Tasks

## Task 1

```
function hello() {
    console.log("Hello")
}

hello()

```

## Task 2

```

function fullName(firstName, lastName) {
    console.log("My full name is " + firstName + " " + lastName + ".");
};

fullName("Stefan", "Ungureanu");

```

## Task 2 - Second Part

```
function fullName(firstName, lastName) {
    let firstAndLastName = firstName + " " + lastName;
    return firstAndLastName;
}

let sayFullName = "My full name is " + fullName("Stefan", "Ungureanu");
console.log(sayFullName);

```

## Task 3

```

let temperature = (degrees) => {
    if (degrees < 50) {
        console.log("Put on a coat!");
    }
}

temperature(25);

```

## Task 3 - Second Part

```
let temperature = (degrees) => {
    if (degrees < 50 && degrees > 30) {
        console.log("Put on a coat!");
    }
    else if (degrees < 30) {
        console.log("Put on a coat and a hat!");
    }
    else if (degrees < 0) {
        console.log("Stay inside!");
    }
    else {
        console.log("Pants and vest is fine");
    }
    temperature(55);
}

```

