---
layout: layouts/post.njk
title: Loops, Arrays & Objects
templateClass: tmpl-post
eleventyNavigation:
  key: Loops, Arrays & Objects
  order: 9
---

# Task 1 - Loops

```
for (var i= 1; i <= 12; i++) {
    console.log(`${i} x 7 = ${i * 7}`)
}

for (var i = 1; i <= 12; i++) {
    var result = i * 7;
    console.log(result)
}

```

# Task 2 - Arrays

```

let favouriteFoods = ["Passion Fruite", "Prawns", "Octopus", "Lamb", "Beef"];
console.log(favouriteFoods[1], favouriteFoods[2]);

```

# Task 3 - Loop through an array

```
let favouriteFoods = ["Passion Fruite", "Prawns", "Octopus", "Lamb", "Beef"];

for (let i = 0; i < favouriteFoods.length; i++) {
    console.log(favouriteFoods[i])
}

```

# Task 4 - Objects

```
let favouriteRecipe = {
    recipeTitle: "Zacusca",
    servings: 5,
    ingredients:  ["2 medium eggplants (aka aubergines)",
                    "4 large red bell peppers",
                    "1 tablespoon olive oil",
                    "1 medium white onion, chopped",
                    "2 jalapeno peppers (optional)",
                    "1 pound fresh tomatoes, diced (canned tomatoes are good, too, or even tomato sauce)",
                    "½ cup sunflower oil (you can use olive oil or other vegetable oil)",
                    "1 bay leaf",
                    "1 tablespoon honey (optional)",
                    "Salt and pepper to taste (I use about 1 teaspoon each)"
                    ],
    directions: ["First, poke the eggplant flesh in several places with a knife (this allows steam to escape when cooking). Remove the stems from the peppers and core them. Slice them in half lengthwise.",
                "Heat the grill to medium heat and lightly oil the grates. Set the eggplant and red peppers (skin sides up) onto the grates and close the lid. Grill 20 minutes, or until the red pepper skins bubble up and char.",
                "Continue to grill the eggplant, flipping every few minutes to get an even char on the skins and the flesh is softened up, another 20 minutes or so. You can see how the eggplant skin has darkened and is ready to come off the grill.",
                "Remove from heat. When the peppers and eggplant are done, remove the pepper skins and discard them. Set them aside for now, covered. Scoop out the eggplant flesh and discard the skins. Place the eggplant flesh into a strainer and sprinkle with salt. Let the liquids drain out for 1 hour. Add the drained eggplant and chili peppers to a blender or food processor and process until chunky.",
                "Heat 1 tablespoon of oil in a large pan and add the onion and jalapeno peppers (and/or serrano peppers, if you’re using them). Cook for 5 minutes, stirring, until everything softens up.",
                "Add the processed eggplant and red peppers, fresh or canned tomatoes, sunflower oil, honey (if using), and salt and pepper. Bring to a quick boil, then reduce the heat. Simmer for at least 30 minutes, or until everything breaks down and combines into a thicker spread to your preferred thickness. I like to simmer 60-90 minutes to develop more flavor. If it dries out too much, add in a few tablespoons of water.",
                "Remove the bay leaf and adjust for salt and pepper. You can serve up your zacusca right away or let is cool a bit and store it in sealed containers in the refrigerator. The flavors meld and develop over time, so it is usually better to wait."
}

for (const key in favouriteRecipe) {
    console.log(`${key}: ${favouriteRecipe[key]}`)
}

```