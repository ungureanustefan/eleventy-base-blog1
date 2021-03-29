---
layout: layouts/post.njk
title: Pseudocode
templateClass: tmpl-post
eleventyNavigation:
  key: Pseudocode
  order: 9
---

# FizzBuzz

```
LOOP through number 0-100
    If number is a multiple of 3 and 5
        RETURN "fizzbuzz"
    ELSE IF number is a multiple of 3
        RETURN "fizz"
    ELSE IF number is a multiple of 5
        RETURN "buzz"
    ELSE
        RETURN number

```

# FixStart

```
FUNCTION fixStart(inputString)
    VARIABLE characterToReplace = inputString.getFirstCharacter()
    Variable output = ""
    LOOP THROUGH characters in the inputString:
        IF is the firstCharacter OF inputString
            THEN append characterToReplace to output
        ELSE IF current character == characterToReplace
            THEN append "*" to output
        ELSE
            THEN append "*" to output
        ELSE
            THEN append currentCharacter to output
    END LOOP

```