import { useState } from "react";
 
const DAYS = [
  {
    day: "Monday",
    prepDay: "sunday",
    breakfast: {
      name: "Chia Pudding with Mango",
      desc: "Creamy chia pudding made with coconut milk, topped with fresh mango, toasted coconut, and a drizzle of honey.",
      protein: "10g", cal: "~350",
      prep: "Make Sunday night. Chia sets overnight in the fridge.",
      servings: 2,
      ingredients: [
        "1/3 cup chia seeds",
        "1.5 cups unsweetened coconut milk (carton, not canned)",
        "1 tbsp honey",
        "1/2 tsp vanilla extract",
        "1 mango, diced",
        "2 tbsp toasted coconut flakes",
        "2 tbsp crushed pistachios",
      ],
      steps: [
        "Whisk chia seeds, coconut milk, honey, and vanilla in a bowl. Let sit 5 min, whisk again to prevent clumps.",
        "Cover and refrigerate overnight (or at least 4 hours) until thick and pudding-like.",
        "Divide between two bowls. Top with diced mango, toasted coconut, and pistachios.",
      ],
    },
    lunch: {
      name: "Turkey Meatball Grain Bowl",
      desc: "Baked turkey meatballs (egg-free, using flax as binder) over bulgur wheat with roasted zucchini, sun-dried tomatoes, and tzatziki.",
      protein: "40g", cal: "~530",
      prep: "Bake meatballs & cook bulgur Sunday. Reheat and assemble.",
      servings: 2,
      ingredients: [
        "1 lb ground turkey",
        "2 tbsp ground flax + 5 tbsp water (flax egg substitute)",
        "1/3 cup panko breadcrumbs (egg-free)",
        "2 cloves garlic, minced",
        "1 tsp dried oregano",
        "1/2 tsp cumin",
        "Salt and pepper",
        "1 cup bulgur wheat",
        "2 zucchini, sliced into half-moons",
        "1/4 cup sun-dried tomatoes, chopped",
        "1 tbsp olive oil",
        "--- Quick Tzatziki ---",
        "1/2 cup plain Greek yogurt",
        "1/4 cucumber, grated and squeezed dry",
        "1 clove garlic, minced",
        "1 tbsp lemon juice",
        "1 tbsp fresh dill, chopped",
        "Salt",
      ],
      steps: [
        "Mix flax and water, let sit 5 min to gel. Combine with turkey, panko, garlic, oregano, cumin, salt, and pepper.",
        "Roll into 12\u201314 meatballs. Place on a parchment-lined baking sheet. Bake at 400\u00B0F for 20\u201322 min.",
        "Cook bulgur: pour 1 cup boiling water over bulgur, cover, let stand 15 min. Fluff.",
        "Toss zucchini with olive oil, salt, and pepper. Roast at 400\u00B0F for 18\u201320 min.",
        "Make tzatziki: combine all tzatziki ingredients.",
        "Assemble bowls: bulgur, meatballs, roasted zucchini, sun-dried tomatoes, and a generous dollop of tzatziki.",
      ],
    },
    dinner: {
      name: "Miso-Glazed Salmon with Soba",
      desc: "Broiled salmon with a sweet white miso glaze, served with buckwheat soba noodles and steamed bok choy.",
      protein: "42g", cal: "~540",
      prep: "Make miso glaze Sunday and marinate salmon. Broil fresh \u2014 8 min.",
      servings: 2,
      ingredients: [
        "2 salmon fillets (6 oz each)",
        "6 oz buckwheat soba noodles",
        "2 heads baby bok choy, halved",
        "--- Miso Glaze ---",
        "2 tbsp white miso paste",
        "1 tbsp honey",
        "1 tbsp soy sauce",
        "1 tsp rice vinegar",
        "1 tsp sesame oil",
        "1 clove garlic, minced",
        "--- Garnish ---",
        "Sesame seeds",
        "Sliced green onion",
      ],
      steps: [
        "Whisk miso paste, honey, soy sauce, rice vinegar, sesame oil, and garlic into a smooth glaze.",
        "Spread glaze over salmon fillets. If marinating ahead, cover and refrigerate up to 24 hours.",
        "Set oven to broil. Place salmon on a foil-lined baking sheet. Broil 6\u20138 min until glaze is caramelized and fish flakes easily.",
        "Cook soba noodles per package directions (usually 4\u20135 min). Rinse under cold water, drain.",
        "Steam bok choy 3\u20134 min until tender. Season with a splash of soy sauce.",
        "Serve salmon over soba noodles with bok choy alongside. Garnish with sesame seeds and green onion.",
      ],
    },
    snack: {
      name: "Spiced Pumpkin Seeds & Dark Chocolate",
      desc: "Toasted pumpkin seeds with cinnamon and cayenne, paired with 2 squares of 85% dark chocolate.",
      protein: "8g", cal: "~210",
      servings: 2,
      ingredients: [
        "1/3 cup raw pumpkin seeds",
        "1/4 tsp cinnamon",
        "Pinch of cayenne",
        "Pinch of salt",
        "1 tsp olive oil",
        "4 squares 85% dark chocolate",
      ],
      steps: [
        "Toss pumpkin seeds with olive oil, cinnamon, cayenne, and salt.",
        "Toast in a dry skillet over medium heat 4\u20135 min, stirring often, until fragrant and popping.",
        "Cool and portion with chocolate squares.",
      ],
    },
  },
  {
    day: "Tuesday",
    prepDay: "sunday",
    breakfast: {
      name: "Banana-Oat Smoothie",
      desc: "Thick smoothie with banana, rolled oats, peanut butter, cocoa powder, and almond milk. Like a milkshake but healthy.",
      protein: "20g", cal: "~420",
      prep: "Pre-bag ingredients Sunday. Blend morning of.",
      servings: 2,
      ingredients: [
        "2 bananas, frozen",
        "1/2 cup rolled oats",
        "2 tbsp natural peanut butter",
        "1 tbsp cocoa powder",
        "1.5 cups unsweetened almond milk",
        "1 tbsp honey (optional)",
        "Pinch of cinnamon",
      ],
      steps: [
        "Add all ingredients to a blender. Blend on high until completely smooth, about 60 seconds.",
        "Pour into two glasses. The oats make it thick and filling \u2014 great before a morning workout.",
      ],
    },
    lunch: {
      name: "Southwest Chicken Salad",
      desc: "Cumin-lime grilled chicken over romaine with black beans, corn, peppers, tortilla strips, and chipotle-lime dressing.",
      protein: "38g", cal: "~490",
      prep: "Use Sunday batch chicken. Chop veggies and make dressing ahead.",
      servings: 2,
      ingredients: [
        "2 grilled chicken breasts, sliced (from Sunday prep)",
        "4 cups chopped romaine",
        "1/2 can black beans, drained",
        "1/2 cup roasted corn",
        "1 bell pepper, diced",
        "1/4 red onion, thinly sliced",
        "Handful of baked tortilla strips",
        "--- Chipotle-Lime Dressing ---",
        "3 tbsp Greek yogurt",
        "1 tbsp lime juice",
        "1 tsp chipotle in adobo, minced",
        "1 tbsp olive oil",
        "1 clove garlic, minced",
        "Salt",
      ],
      steps: [
        "Whisk all dressing ingredients together until smooth. Thin with water if needed.",
        "Toss romaine with half the dressing. Divide between plates.",
        "Top with sliced chicken, black beans, corn, bell pepper, red onion, and tortilla strips.",
        "Drizzle remaining dressing on top.",
      ],
    },
    dinner: {
      name: "One-Pan Italian Sausage & Peppers",
      desc: "Sliced chicken sausage with roasted bell peppers, red onion, and cherry tomatoes over whole wheat penne.",
      protein: "36g", cal: "~520",
      prep: "Slice veggies Sunday. Sheet-pan roast and boil pasta \u2014 25 min total.",
      servings: 2,
      ingredients: [
        "4 chicken sausage links (egg-free \u2014 check label), sliced",
        "3 bell peppers (mixed colors), sliced",
        "1 red onion, cut into wedges",
        "1 cup cherry tomatoes",
        "3 cloves garlic, smashed",
        "2 tbsp olive oil",
        "1 tsp Italian seasoning",
        "1/2 tsp red pepper flakes",
        "Salt and pepper",
        "6 oz whole wheat penne",
        "Fresh basil for garnish",
        "Grated Parmesan (optional)",
      ],
      steps: [
        "Preheat oven to 425\u00B0F. Toss peppers, onion, tomatoes, and garlic with olive oil, Italian seasoning, red pepper flakes, salt, and pepper on a sheet pan.",
        "Nestle sausage slices among the vegetables.",
        "Roast 22\u201325 min until sausage is browned and vegetables are caramelized.",
        "Meanwhile, cook penne per package directions. Drain, reserving 1/4 cup pasta water.",
        "Toss pasta with roasted sausage and vegetables. Add splash of pasta water if needed.",
        "Top with torn basil and Parmesan if desired.",
      ],
    },
    snack: {
      name: "Cucumber & Hummus Cups",
      desc: "Thick cucumber rounds topped with hummus, a sprinkle of za'atar, and a drizzle of olive oil.",
      protein: "6g", cal: "~160",
      servings: 2,
      ingredients: [
        "1 large English cucumber, sliced into thick rounds",
        "1/2 cup hummus",
        "Za'atar seasoning",
        "Extra-virgin olive oil",
        "Flaky sea salt",
      ],
      steps: [
        "Slice cucumber into 1/2-inch thick rounds.",
        "Top each with a small spoonful of hummus.",
        "Sprinkle with za\u2019atar and flaky salt. Drizzle with olive oil.",
      ],
    },
  },
  {
    day: "Wednesday",
    prepDay: "sunday",
    breakfast: {
      name: "Savory Oatmeal Bowl",
      desc: "Steel-cut oats cooked savory with Parmesan, topped with saut\u00E9ed spinach, roasted tomatoes, and avocado.",
      protein: "16g", cal: "~410",
      prep: "Batch cook oats Sunday. Reheat and add toppings fresh.",
      servings: 2,
      ingredients: [
        "1 cup steel-cut oats",
        "3 cups water",
        "2 tbsp grated Parmesan",
        "2 handfuls baby spinach",
        "1 cup cherry tomatoes, halved",
        "1 avocado, sliced",
        "1 tbsp olive oil",
        "Red pepper flakes",
        "Salt and pepper",
      ],
      steps: [
        "Cook steel-cut oats in water with a pinch of salt (25\u201330 min). Stir in Parmesan until creamy.",
        "Roast cherry tomato halves cut-side up at 400\u00B0F for 15 min until blistered.",
        "Saut\u00E9 spinach in olive oil for 1\u20132 min until wilted.",
        "Divide oats between bowls. Top with spinach, roasted tomatoes, and sliced avocado. Season with red pepper flakes, salt, and pepper.",
      ],
    },
    lunch: {
      name: "Thai Peanut Chicken Wrap",
      desc: "Shredded chicken with crunchy cabbage slaw, shredded carrots, and spicy peanut sauce in a whole wheat wrap.",
      protein: "36g", cal: "~510",
      prep: "Make peanut sauce and slaw Sunday. Assemble morning of.",
      servings: 2,
      ingredients: [
        "1.5 cups shredded chicken",
        "2 large whole wheat tortillas",
        "1 cup shredded purple cabbage",
        "1 carrot, shredded",
        "1/4 cucumber, julienned",
        "Fresh cilantro and mint leaves",
        "--- Peanut Sauce ---",
        "3 tbsp natural peanut butter",
        "2 tbsp soy sauce",
        "1 tbsp lime juice",
        "1 tbsp honey",
        "1 tsp sriracha (or to taste)",
        "2\u20133 tbsp warm water to thin",
      ],
      steps: [
        "Whisk peanut sauce ingredients together until smooth and pourable.",
        "Toss cabbage, carrot, and cucumber with 2 tbsp of the peanut sauce for a dressed slaw.",
        "Lay tortillas flat. Layer shredded chicken, dressed slaw, cilantro, and mint.",
        "Drizzle extra peanut sauce over top. Roll tightly, slice in half.",
      ],
    },
    dinner: {
      name: "Skirt Steak with Chimichurri & Farro",
      desc: "Grilled skirt steak with fresh herb chimichurri, warm farro salad, and grilled asparagus.",
      protein: "44g", cal: "~580",
      prep: "Cook farro and make chimichurri Sunday. Grill steak fresh \u2014 10 min.",
      servings: 2,
      ingredients: [
        "12 oz skirt steak",
        "1 cup farro, cooked",
        "1 bunch asparagus, trimmed",
        "1 tbsp olive oil",
        "Salt and pepper",
        "--- Chimichurri ---",
        "1 cup fresh parsley, finely chopped",
        "1/4 cup fresh cilantro, finely chopped",
        "3 cloves garlic, minced",
        "1/4 cup olive oil",
        "2 tbsp red wine vinegar",
        "1/2 tsp red pepper flakes",
        "Salt",
      ],
      steps: [
        "Make chimichurri: combine parsley, cilantro, garlic, olive oil, red wine vinegar, red pepper flakes, and salt. Let sit at least 15 min.",
        "Bring steak to room temp. Season generously with salt and pepper.",
        "Grill or pan-sear steak over high heat, 3\u20134 min per side for medium-rare. Rest 5 min, then slice against the grain.",
        "Toss asparagus with olive oil, salt, and pepper. Grill or roast at 425\u00B0F for 8\u201310 min.",
        "Warm farro and divide between plates. Top with sliced steak and a generous spoonful of chimichurri. Serve asparagus alongside.",
      ],
    },
    snack: {
      name: "Frozen Greek Yogurt Bark",
      desc: "Greek yogurt spread thin, topped with berries, pistachios, and dark chocolate chips. Frozen and broken into pieces.",
      protein: "10g", cal: "~200",
      servings: 4,
      ingredients: [
        "2 cups plain Greek yogurt",
        "2 tbsp honey",
        "1/2 tsp vanilla extract",
        "1/3 cup mixed berries",
        "2 tbsp crushed pistachios",
        "2 tbsp dark chocolate chips",
      ],
      steps: [
        "Mix yogurt with honey and vanilla. Spread in an even layer (about 1/4 inch thick) on a parchment-lined baking sheet.",
        "Scatter berries, pistachios, and chocolate chips on top. Press gently into yogurt.",
        "Freeze 2\u20133 hours until solid. Break into irregular pieces.",
        "Store in a freezer bag. Grab 3\u20134 pieces per serving.",
      ],
    },
  },
  {
    day: "Thursday",
    prepDay: "wednesday",
    breakfast: {
      name: "Peanut Butter Banana Toast",
      desc: "Whole grain toast with peanut butter, sliced banana, chia seeds, and a drizzle of honey.",
      protein: "14g", cal: "~380",
      prep: "Fresh \u2014 5 min. Pair with coffee.",
      servings: 2,
      ingredients: [
        "4 slices whole grain bread",
        "3 tbsp natural peanut butter",
        "1 banana, sliced",
        "1 tbsp chia seeds",
        "2 tsp honey",
        "Pinch of cinnamon",
      ],
      steps: [
        "Toast bread until golden. Spread peanut butter generously on each slice.",
        "Top with banana slices, chia seeds, cinnamon, and a drizzle of honey.",
      ],
    },
    lunch: {
      name: "Salmon Poke Bowl",
      desc: "Cubed sushi-grade salmon (or cooked salmon) over brown rice with cucumber, avocado, edamame, and spicy mayo.",
      protein: "38g", cal: "~520",
      prep: "Cook rice Wednesday. Chop toppings and assemble fresh.",
      servings: 2,
      ingredients: [
        "10 oz sushi-grade salmon, cubed (or cooked salmon, flaked)",
        "2 cups cooked brown rice",
        "1 cucumber, diced",
        "1 avocado, sliced",
        "1/2 cup shelled edamame",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "1 tsp rice vinegar",
        "Sesame seeds",
        "Sliced green onion",
        "--- Spicy Mayo ---",
        "2 tbsp Greek yogurt (sub for mayo)",
        "1 tsp sriracha",
        "1 tsp lime juice",
      ],
      steps: [
        "If using raw salmon, toss cubes gently with soy sauce, sesame oil, and rice vinegar. Let marinate 10 min.",
        "Mix spicy mayo: combine Greek yogurt, sriracha, and lime juice.",
        "Divide rice between bowls. Arrange salmon, cucumber, avocado, and edamame on top.",
        "Drizzle with spicy mayo. Garnish with sesame seeds and green onion.",
      ],
    },
    dinner: {
      name: "Moroccan Chicken & Sweet Potato Stew",
      desc: "Chicken thighs braised with sweet potatoes, chickpeas, apricots, and warm spices. Served over couscous.",
      protein: "42g", cal: "~570",
      prep: "Cook fresh Wednesday night \u2014 double batch for Friday lunch.",
      servings: 4,
      ingredients: [
        "1.5 lbs boneless chicken thighs, cut into chunks",
        "2 medium sweet potatoes, peeled and cubed",
        "1 can (15 oz) chickpeas, drained",
        "1 can (14 oz) diced tomatoes",
        "1/4 cup dried apricots, chopped",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "2 tsp cumin",
        "1 tsp cinnamon",
        "1 tsp turmeric",
        "1/2 tsp smoked paprika",
        "2 cups chicken broth",
        "1 tbsp olive oil",
        "Salt and pepper",
        "1 cup whole wheat couscous",
        "Fresh cilantro for garnish",
      ],
      steps: [
        "Heat olive oil in a Dutch oven over medium-high. Season chicken with salt, pepper, cumin, and paprika. Brown 3 min per side. Remove.",
        "Saut\u00E9 onion 4 min. Add garlic, ginger, cinnamon, and turmeric. Stir 1 min.",
        "Add sweet potatoes, tomatoes, broth, chickpeas, and apricots. Return chicken to pot.",
        "Bring to a simmer, cover, and cook 25\u201330 min until sweet potatoes are tender and chicken is cooked through.",
        "Meanwhile, cook couscous per package directions.",
        "Serve stew over couscous, garnished with cilantro. Save 2 portions for Friday lunch.",
      ],
    },
    snack: {
      name: "Almond Butter Energy Balls",
      desc: "No-bake balls with oats, almond butter, dark chocolate chips, honey, and flax seeds.",
      protein: "6g", cal: "~180",
      servings: 6,
      ingredients: [
        "1 cup rolled oats",
        "1/2 cup almond butter",
        "1/4 cup dark chocolate chips",
        "3 tbsp honey",
        "2 tbsp ground flax seeds",
        "1/4 tsp cinnamon",
        "Pinch of salt",
      ],
      steps: [
        "Combine all ingredients in a bowl. Stir until mixture holds together.",
        "Refrigerate 30 min to firm up slightly.",
        "Roll into 12 balls (about 1 tbsp each). Store in the fridge up to 1 week.",
        "Grab 2 balls per serving.",
      ],
    },
  },
  {
    day: "Friday",
    prepDay: "wednesday",
    breakfast: {
      name: "Tropical Smoothie Bowl",
      desc: "Frozen pineapple, mango, and banana blended with coconut milk and protein powder. Topped with granola and hemp seeds.",
      protein: "26g", cal: "~410",
      prep: "Pre-bag frozen fruit Wednesday. Blend morning of.",
      servings: 2,
      ingredients: [
        "1 cup frozen pineapple chunks",
        "1 cup frozen mango chunks",
        "1 banana, frozen",
        "2 scoops vanilla protein powder (egg-free)",
        "1/2 cup coconut milk (carton)",
        "--- Toppings ---",
        "1/4 cup egg-free granola",
        "2 tbsp hemp seeds",
        "2 tbsp unsweetened coconut flakes",
        "Fresh berries (optional)",
      ],
      steps: [
        "Blend frozen fruit, protein powder, and coconut milk until thick and smooth. Add milk 1 tbsp at a time if too thick.",
        "Divide into two bowls. Top with granola, hemp seeds, coconut, and berries if using.",
      ],
    },
    lunch: {
      name: "Leftover Moroccan Stew",
      desc: "Thursday\u2019s chicken & sweet potato stew over couscous with fresh cilantro.",
      protein: "42g", cal: "~570",
      prep: "Portioned from Thursday\u2019s double batch. Reheat and go.",
      servings: 2,
      ingredients: [
        "2 portions leftover Moroccan chicken stew",
        "1 cup whole wheat couscous",
        "Fresh cilantro",
        "Squeeze of lemon",
      ],
      steps: [
        "Reheat stew on the stove or in the microwave until hot throughout.",
        "Cook fresh couscous (takes 5 min). Fluff with a fork.",
        "Serve stew over couscous. Finish with cilantro and a squeeze of lemon.",
      ],
    },
    dinner: {
      name: "Blackened Tilapia Tacos",
      desc: "Cajun-spiced tilapia in corn tortillas with mango-avocado salsa, shredded cabbage, and lime crema.",
      protein: "34g", cal: "~470",
      prep: "Make slaw and salsa Wednesday. Cook tilapia fresh \u2014 6 min.",
      servings: 2,
      ingredients: [
        "2 tilapia fillets (6 oz each)",
        "6 small corn tortillas",
        "1 cup shredded green cabbage",
        "1 tbsp olive oil",
        "--- Blackening Spice ---",
        "1 tsp smoked paprika",
        "1/2 tsp garlic powder",
        "1/2 tsp onion powder",
        "1/4 tsp cayenne",
        "1/2 tsp dried oregano",
        "Salt and pepper",
        "--- Mango-Avocado Salsa ---",
        "1 mango, diced",
        "1 avocado, diced",
        "2 tbsp red onion, minced",
        "2 tbsp cilantro, chopped",
        "1 tbsp lime juice",
        "--- Lime Crema ---",
        "3 tbsp Greek yogurt",
        "1 tbsp lime juice",
        "Salt",
      ],
      steps: [
        "Combine all blackening spices. Pat tilapia dry and coat both sides with spice mix.",
        "Heat olive oil in a skillet over medium-high heat. Cook tilapia 3 min per side until blackened and flaky.",
        "Make mango-avocado salsa: gently combine all salsa ingredients.",
        "Make lime crema: mix yogurt, lime juice, and salt.",
        "Warm tortillas. Break tilapia into large chunks and divide among tortillas.",
        "Top with cabbage, mango-avocado salsa, and a drizzle of lime crema.",
      ],
    },
    snack: {
      name: "Crispy Air-Popped Popcorn",
      desc: "Air-popped popcorn tossed with nutritional yeast, garlic powder, and a drizzle of olive oil.",
      protein: "5g", cal: "~140",
      servings: 2,
      ingredients: [
        "1/3 cup popcorn kernels",
        "2 tbsp nutritional yeast",
        "1/2 tsp garlic powder",
        "1 tbsp olive oil",
        "Salt",
      ],
      steps: [
        "Pop kernels in an air popper or in a covered pot with a tiny bit of oil over medium-high heat.",
        "Drizzle popped corn with olive oil, then toss with nutritional yeast, garlic powder, and salt.",
        "Divide into two bowls. This makes about 6 cups total \u2014 big volume, low calories.",
      ],
    },
  },
  {
    day: "Saturday",
    prepDay: "wednesday",
    breakfast: {
      name: "Sweet Potato & Black Bean Hash",
      desc: "Diced sweet potato and black beans saut\u00E9ed with peppers, onion, and cumin. Topped with avocado and hot sauce.",
      protein: "18g", cal: "~430",
      prep: "Use pre-roasted sweet potatoes from Wed. Saut\u00E9 fresh \u2014 10 min.",
      servings: 2,
      ingredients: [
        "2 cups diced sweet potato (pre-roasted or raw)",
        "1/2 can black beans, drained",
        "1 bell pepper, diced",
        "1/2 onion, diced",
        "2 cloves garlic, minced",
        "1 tsp cumin",
        "1/2 tsp smoked paprika",
        "1 tbsp olive oil",
        "1 avocado, sliced",
        "Hot sauce",
        "Fresh cilantro",
        "Salt and pepper",
      ],
      steps: [
        "Heat olive oil in a large skillet over medium-high. If using raw sweet potato, cook 8\u201310 min until tender. If pre-roasted, add in step 3.",
        "Add bell pepper and onion. Cook 4\u20135 min until softened.",
        "Add garlic, cumin, paprika, black beans, and sweet potato (if pre-roasted). Stir and cook 3\u20134 min until heated through and slightly crispy.",
        "Season with salt and pepper. Top with sliced avocado, hot sauce, and cilantro.",
      ],
    },
    lunch: {
      name: "Shrimp & Mango Summer Rolls",
      desc: "Fresh rice paper rolls filled with shrimp, mango, avocado, mint, and vermicelli noodles. Peanut dipping sauce.",
      protein: "28g", cal: "~440",
      prep: "Cook shrimp and noodles ahead. Assemble fresh \u2014 fun weekend activity.",
      servings: 2,
      ingredients: [
        "12 large cooked shrimp, halved lengthwise",
        "6 rice paper wrappers",
        "2 oz rice vermicelli noodles, cooked",
        "1/2 mango, julienned",
        "1 avocado, sliced",
        "1 carrot, julienned",
        "Fresh mint and cilantro leaves",
        "Butter lettuce leaves",
        "--- Peanut Sauce ---",
        "3 tbsp peanut butter",
        "2 tbsp soy sauce",
        "1 tbsp lime juice",
        "1 tbsp honey",
        "1 tsp sriracha",
        "2\u20133 tbsp warm water",
      ],
      steps: [
        "Cook rice vermicelli per package. Rinse with cold water, drain.",
        "Make peanut sauce: whisk all sauce ingredients together until smooth.",
        "Dip one rice paper wrapper in warm water for 10\u201315 seconds until pliable. Lay flat on a damp cutting board.",
        "Layer a lettuce leaf, a few shrimp halves, noodles, mango, avocado, carrot, and herbs across the lower third.",
        "Fold bottom edge up over filling, fold in sides, and roll tightly (like a burrito). Repeat.",
        "Slice rolls in half. Serve with peanut dipping sauce.",
      ],
    },
    dinner: {
      name: "Herb-Roasted Pork Tenderloin",
      desc: "Dijon and herb-crusted pork tenderloin with roasted Brussels sprouts and wild rice pilaf.",
      protein: "40g", cal: "~530",
      prep: "Cook wild rice Wednesday. Roast pork and sprouts fresh \u2014 30 min.",
      servings: 2,
      ingredients: [
        "1 pork tenderloin (about 1 lb)",
        "2 cups Brussels sprouts, halved",
        "1 cup wild rice blend, cooked",
        "2 tbsp Dijon mustard",
        "2 cloves garlic, minced",
        "1 tbsp fresh rosemary, chopped",
        "1 tbsp fresh thyme, chopped",
        "3 tbsp olive oil, divided",
        "Salt and pepper",
        "1 tbsp balsamic vinegar (for sprouts)",
      ],
      steps: [
        "Preheat oven to 425\u00B0F. Pat pork dry, season with salt and pepper.",
        "Mix Dijon, garlic, rosemary, thyme, and 1 tbsp olive oil. Spread over the pork.",
        "Sear pork in a hot oven-safe skillet with 1 tbsp olive oil, 2 min per side.",
        "Toss Brussels sprouts with 1 tbsp olive oil, salt, and pepper. Add to the pan around the pork.",
        "Roast 18\u201322 min until pork reaches 145\u00B0F and sprouts are caramelized.",
        "Rest pork 5 min, then slice. Drizzle balsamic over sprouts.",
        "Serve with warmed wild rice pilaf.",
      ],
    },
    snack: {
      name: "Cottage Cheese & Berries",
      desc: "High-protein cottage cheese topped with mixed berries and a sprinkle of hemp seeds.",
      protein: "20g", cal: "~190",
      servings: 2,
      ingredients: [
        "1.5 cups low-fat cottage cheese",
        "1 cup mixed berries",
        "1 tbsp hemp seeds",
        "Drizzle of honey (optional)",
      ],
      steps: [
        "Divide cottage cheese between two bowls. Top with berries and hemp seeds. Drizzle honey if desired.",
      ],
    },
  },
  {
    day: "Sunday",
    prepDay: "wednesday",
    breakfast: {
      name: "Buckwheat Banana Pancakes (Egg-Free)",
      desc: "Light, nutty buckwheat pancakes with mashed banana as binder, topped with fresh fruit and maple syrup.",
      protein: "14g", cal: "~400",
      prep: "Fresh \u2014 Sunday morning tradition.",
      servings: 2,
      ingredients: [
        "1 cup buckwheat flour",
        "1 tbsp baking powder",
        "1/4 tsp salt",
        "1 ripe banana, mashed",
        "1 cup almond milk",
        "1 tbsp maple syrup (plus more for serving)",
        "1 tsp vanilla extract",
        "1 tbsp coconut oil (for pan)",
        "Fresh fruit for topping (berries, sliced peach, or banana)",
      ],
      steps: [
        "Whisk buckwheat flour, baking powder, and salt.",
        "Mash banana until smooth. Mix in almond milk, maple syrup, and vanilla.",
        "Combine wet and dry \u2014 stir until just combined.",
        "Heat coconut oil in a nonstick pan. Pour \u00BC cup batter per pancake.",
        "Cook 2\u20133 min until bubbles appear. Flip, cook 1\u20132 min more.",
        "Stack and top with fresh fruit and maple syrup.",
      ],
    },
    lunch: {
      name: "Mediterranean Chicken Flatbread",
      desc: "Whole wheat naan topped with hummus, grilled chicken, roasted red peppers, olives, feta, and arugula.",
      protein: "36g", cal: "~500",
      prep: "Use leftover grilled chicken. Assemble and broil \u2014 5 min.",
      servings: 2,
      ingredients: [
        "2 whole wheat naan (egg-free)",
        "1/3 cup hummus",
        "1 cup shredded grilled chicken",
        "1/2 cup roasted red peppers (jarred), sliced",
        "2 tbsp Kalamata olives, halved",
        "1/4 cup feta cheese crumbles",
        "1 cup arugula",
        "1 tbsp olive oil",
        "Squeeze of lemon",
        "Red pepper flakes",
      ],
      steps: [
        "Preheat oven to broil. Place naan on a baking sheet.",
        "Spread hummus across each naan. Top with chicken, roasted peppers, olives, and feta.",
        "Broil 3\u20145 min until edges are golden and cheese softens.",
        "Remove, top with fresh arugula. Drizzle olive oil and lemon. Sprinkle red pepper flakes.",
      ],
    },
    dinner: {
      name: "Garlic-Herb Flank Steak & Roasted Veggies",
      desc: "Marinated flank steak with a sheet pan of roasted root vegetables \u2014 beets, carrots, and potatoes.",
      protein: "40g", cal: "~560",
      prep: "Marinate steak Sunday morning. Roast while doing weekly meal prep.",
      servings: 2,
      ingredients: [
        "12 oz flank steak",
        "2 medium beets, peeled and cubed",
        "3 carrots, cut into chunks",
        "3 small potatoes, quartered",
        "3 tbsp olive oil, divided",
        "Salt and pepper",
        "--- Marinade ---",
        "2 tbsp olive oil",
        "3 cloves garlic, minced",
        "1 tbsp fresh rosemary, chopped",
        "1 tbsp fresh thyme, chopped",
        "1 tbsp balsamic vinegar",
        "1 tsp Dijon mustard",
      ],
      steps: [
        "Whisk marinade ingredients. Place steak in a bag or dish, pour marinade over, and refrigerate 1\u20134 hours.",
        "Preheat oven to 425\u00B0F. Toss beets, carrots, and potatoes with 2 tbsp olive oil, salt, and pepper. Spread on a sheet pan.",
        "Roast vegetables 30\u201335 min until tender and caramelized, tossing halfway.",
        "While veggies roast, heat 1 tbsp olive oil in a cast-iron skillet over high heat. Sear steak 4\u20135 min per side for medium-rare.",
        "Rest steak 5\u201310 min. Slice thin against the grain.",
        "Serve sliced steak over roasted vegetables with any pan juices drizzled on top.",
      ],
    },
    snack: {
      name: "Dark Chocolate Dipped Strawberries",
      desc: "Fresh strawberries half-dipped in melted 85% dark chocolate with crushed pistachios.",
      protein: "4g", cal: "~190",
      servings: 2,
      ingredients: [
        "12 large strawberries",
        "3 oz 85% dark chocolate, chopped",
        "2 tbsp crushed pistachios",
        "Flaky sea salt",
      ],
      steps: [
        "Wash and dry strawberries completely (moisture prevents chocolate from setting).",
        "Melt chocolate in 30-second microwave intervals, stirring between.",
        "Dip each strawberry halfway into chocolate. Sprinkle with pistachios and a tiny pinch of sea salt.",
        "Place on parchment paper. Refrigerate 15\u201320 min until set.",
      ],
    },
  },
];
 
const DRINKS = [
  { name: "Water", icon: "\u{1F4A7}", note: "80\u2013100 oz/day. Try adding cucumber + mint or lemon + ginger.", when: "All day" },
  { name: "Black Coffee", icon: "\u2615", note: "1\u20132 cups before noon. Splash of oat milk if needed.", when: "Morning" },
  { name: "Green Tea", icon: "\u{1F375}", note: "Antioxidants & gentle caffeine. Great afternoon pick-me-up.", when: "Afternoon" },
  { name: "Post-Workout Shake", icon: "\u{1F964}", note: "Protein powder + almond milk + banana. Lift days only.", when: "After gym" },
  { name: "Sparkling Water", icon: "\u{1FAE7}", note: "LaCroix, Spindrift, or 365 brand. Soda replacement.", when: "Anytime" },
  { name: "Golden Milk", icon: "\u{1F31F}", note: "Warm almond milk with turmeric, cinnamon, ginger, and honey. Anti-inflammatory bedtime drink.", when: "Evening" },
];
 
const CHIP_SWAPS = [
  { old: "Potato chips", swap: "Roasted chickpeas", why: "Crunchy, salty, 7g protein per serving, high fiber" },
  { old: "Tortilla chips", swap: "Baked kale chips", why: "Satisfying crunch, loaded with vitamins, very low cal" },
  { old: "Doritos / Cheetos", swap: "Seaweed crisps", why: "Umami-rich, crispy, virtually zero-calorie" },
  { old: "Pita chips", swap: "Seed crackers (Mary's Gone)", why: "Whole seeds, high omega-3s, great with hummus" },
  { old: "Any bagged chips", swap: "Air-popped popcorn", why: "Whole grain, 3 cups = 90 cal. Season with nutritional yeast" },
];
 
const PREP_SCHEDULE = {
  sunday: {
    label: "Sunday Prep", covers: "Mon \u2013 Wed", time: "~90 min",
    tasks: [
      "Grill or bake 2 lbs chicken breast \u2014 season with cumin-lime for Tuesday salad and Wednesday wraps",
      "Cook bulgur wheat (for Monday\u2019s meatball bowl) and farro (for Wednesday\u2019s steak)",
      "Bake turkey meatballs (Monday lunch) \u2014 cool and refrigerate",
      "Make miso glaze for Monday\u2019s salmon. Marinate if cooking tomorrow",
      "Prep chimichurri sauce (Wednesday dinner) \u2014 keeps great in the fridge",
      "Make peanut sauce (Wednesday lunch) and chipotle-lime dressing (Tuesday lunch)",
      "Make chia pudding in jars (Monday breakfast)",
      "Wash and chop all produce \u2014 cabbage, carrots, peppers, zucchini, romaine",
      "Roast zucchini for Monday lunch",
      "Bag smoothie ingredients (Tuesday + Friday) in freezer bags",
      "Make frozen yogurt bark (Wednesday snack)",
    ],
  },
  wednesday: {
    label: "Wednesday Prep", covers: "Thu \u2013 Sun", time: "~75 min",
    tasks: [
      "Double-batch Moroccan chicken stew (Thursday dinner + Friday lunch)",
      "Cook brown rice and wild rice blend",
      "Roast sweet potatoes for Saturday breakfast hash",
      "Cook couscous for Thursday dinner",
      "Make almond butter energy balls (Thursday snack) \u2014 roll and refrigerate",
      "Bag tropical smoothie ingredients for Friday",
      "Make mango-avocado salsa and cabbage slaw for Friday tacos",
      "Cook shrimp for Saturday\u2019s summer rolls",
      "Cook rice vermicelli noodles for Saturday rolls",
      "Prep peanut dipping sauce for Saturday",
      "Dip strawberries in dark chocolate for Sunday snack",
    ],
  },
};
 
const MEAL_ICONS = { breakfast: "\u{1F305}", lunch: "\u2600\uFE0F", dinner: "\u{1F319}", snack: "\u{1F36B}" };
const TABS = [
  { id: "plan", label: "Meals" },
  { id: "snacks", label: "Snacks & Drinks" },
  { id: "prep", label: "Meal Prep" },
  { id: "shopping", label: "Shopping" },
  { id: "stores", label: "Store Guide" },
  { id: "swaps", label: "Chip Swaps" },
];
 
const TAG_COLORS = {
  sunday: { bg: "#e8dff5", text: "#6b3fa0", dot: "#9b7bcf" },
  wednesday: { bg: "#dff5e8", text: "#2e7d4f", dot: "#5cb87a" },
};
 
const SHOPPING_LIST = {
  "Produce (Weekly)": [
    "Mangoes (3)", "Bananas (6)", "Pineapple, frozen chunks (1 bag)", "Mixed berries (2 pints)",
    "Strawberries (1 pint)", "Peach (1, or frozen)", "Lemons (4)", "Limes (6)",
    "Avocados (5)", "Fresh spinach (1 bag)", "Arugula (1 container)", "Romaine hearts (2)",
    "Baby bok choy (4 heads)", "Purple cabbage (1 small)", "Green cabbage (1 small)",
    "Asparagus (1 bunch)", "Brussels sprouts (2 cups)", "Zucchini (2)",
    "Bell peppers (5)", "Cherry tomatoes (2 pints)", "Cucumber (2)", "English cucumber (1)",
    "Carrots (2 bunches)", "Red onion (3)", "Yellow onion (2)", "Garlic (2 heads)",
    "Fresh ginger (1 knob)", "Sweet potatoes (4)", "Beets (2)", "Russet potatoes (3)",
    "Green onions (2 bunches)", "Fresh herbs \u2014 parsley, cilantro, mint, dill, rosemary, thyme",
    "Edamame, frozen shelled (1 bag)", "Mango, frozen (1 bag)",
  ],
  "Proteins (Weekly)": [
    "Chicken breasts, boneless (2 lbs)", "Boneless chicken thighs (1.5 lbs)",
    "Wild-caught salmon fillets (4)", "Tilapia fillets (2)",
    "Large shrimp, cooked (12\u201314)", "Ground turkey (1 lb)",
    "Chicken sausage links, egg-free (4)", "Skirt steak (12 oz)", "Flank steak (12 oz)",
    "Pork tenderloin (1 lb)",
    "Plain Greek yogurt (64 oz)", "Low-fat cottage cheese (12 oz)",
    "Vanilla protein powder, egg-free",
  ],
  "Grains & Pantry": [
    "Bulgur wheat", "Farro", "Brown rice", "Wild rice blend",
    "Whole wheat couscous", "Buckwheat soba noodles", "Rice vermicelli noodles",
    "Buckwheat flour", "Rolled oats", "Steel-cut oats",
    "Whole wheat tortillas", "Whole wheat naan (egg-free)", "Corn tortillas",
    "Whole grain bread", "Rice paper wrappers", "Egg-free granola",
    "Panko breadcrumbs (egg-free)", "Popcorn kernels",
    "Canned chickpeas (2)", "Canned black beans (1)", "Canned diced tomatoes (2)",
    "Roasted red peppers, jarred", "Sun-dried tomatoes", "Dried apricots",
    "Kalamata olives", "Water chestnuts (1 can)",
    "White miso paste", "Hoisin sauce", "Dijon mustard", "Hummus",
    "Soy sauce / tamari", "Rice vinegar", "Red wine vinegar", "Balsamic vinegar",
    "Olive oil", "Sesame oil", "Coconut oil",
    "Chipotle in adobo (small can)", "Sriracha",
    "Chicken broth (1 carton)", "Maple syrup", "Honey",
    "Italian seasoning", "Za'atar seasoning",
  ],
  "Snack Staples": [
    "85% dark chocolate bars (2)", "Dark chocolate chips",
    "Natural peanut butter", "Almond butter",
    "Pistachios", "Hemp seeds", "Chia seeds", "Flax seeds",
    "Sesame seeds", "Pumpkin seeds",
    "Unsweetened coconut flakes", "Feta cheese crumbles", "Grated Parmesan",
    "Coconut milk, carton (1)", "Almond milk, unsweetened (2 cartons)",
    "Nutritional yeast", "Cocoa powder",
    "Baked tortilla strips (small bag)",
  ],
  "Drinks": [
    "Sparkling water (2 cases)", "Green tea", "Coffee",
    "Turmeric powder (for golden milk)",
    "Oat milk (1 carton, optional)",
  ],
};
 
const STORE_GUIDE = {
  "Whole Foods": {
    color: "#1a6b3a", bg: "#eef7f0", border: "#c8e6cf", icon: "\u{1F7E2}",
    address: "River St, Prospect St, or Alewife",
    tip: "Best for: seafood, organic produce, specialty & allergy-friendly items",
    sections: [
      { name: "Seafood Counter", why: "Superior wild-caught selection. Ask for sushi-grade salmon for the poke bowl.",
        items: ["Wild-caught salmon fillets (4 \u2014 ask for sushi-grade for Thu)", "Tilapia fillets (2)", "Cooked shrimp (12\u201314)"] },
      { name: "Organic Produce", why: "Better quality organic berries, leafy greens, and fresh herbs.",
        items: ["Mixed berries (2 pints)", "Strawberries (1 pint)", "Fresh spinach", "Arugula", "Romaine hearts", "Baby bok choy (4 heads)", "Asparagus", "Brussels sprouts", "Fresh herbs \u2014 parsley, cilantro, mint, dill, rosemary, thyme", "Avocados (5)"] },
      { name: "Specialty & Allergy-Friendly", why: "Best place for miso paste, buckwheat soba, rice paper, and egg-free items.",
        items: ["White miso paste", "Buckwheat soba noodles", "Rice paper wrappers", "Rice vermicelli noodles", "Buckwheat flour", "Egg-free granola", "Protein powder, egg-free", "Za'atar seasoning", "Chipotle in adobo", "Sun-dried tomatoes", "Dried apricots"] },
      { name: "Snacks & Chocolate", why: "Best dark chocolate and specialty snack selection.",
        items: ["85% dark chocolate bars (Hu Kitchen or Alter Eco)", "Dark chocolate chips", "Hemp seeds", "Nutritional yeast", "Cocoa powder"] },
      { name: "Drinks", why: "Good tea and specialty drink ingredients.",
        items: ["Green tea", "Turmeric powder", "Oat milk"] },
    ],
  },
  "Wegmans": {
    color: "#1a4a8b", bg: "#eef2f9", border: "#c4d4ec", icon: "\u{1F535}",
    address: "Meadow Glen Mall, Medford",
    tip: "Best for: meats, bulk grains, pantry staples, everyday value",
    sections: [
      { name: "Meat & Poultry", why: "Better prices and great quality on all your proteins this week.",
        items: ["Chicken breasts (2 lbs)", "Chicken thighs (1.5 lbs)", "Ground turkey (1 lb)", "Chicken sausage, egg-free (4 links)", "Skirt steak (12 oz)", "Flank steak (12 oz)", "Pork tenderloin (1 lb)"] },
      { name: "Grains & Bulk", why: "Store-brand grains at great prices. Couscous selection is strong.",
        items: ["Bulgur wheat", "Farro", "Brown rice", "Wild rice blend", "Whole wheat couscous", "Rolled oats", "Steel-cut oats", "Popcorn kernels"] },
      { name: "Bread & Wraps", why: "Better prices and wider variety.",
        items: ["Whole wheat tortillas", "Whole wheat naan (check egg-free)", "Corn tortillas", "Whole grain bread"] },
      { name: "Canned & Pantry", why: "Wegmans brand saves 30\u201340% across the board.",
        items: ["Chickpeas (2 cans)", "Black beans (1 can)", "Diced tomatoes (2 cans)", "Roasted red peppers, jarred", "Kalamata olives", "Water chestnuts", "Hummus", "Dijon mustard", "Soy sauce", "Rice vinegar", "Red wine vinegar", "Balsamic vinegar", "Olive oil", "Sesame oil", "Coconut oil", "Panko breadcrumbs", "Sriracha", "Hoisin sauce", "Italian seasoning", "Chicken broth", "Maple syrup", "Honey"] },
      { name: "Dairy & Nuts", why: "Greek yogurt and nut butters are consistently cheaper here.",
        items: ["Greek yogurt (64 oz)", "Cottage cheese (12 oz)", "Feta crumbles", "Grated Parmesan", "Natural peanut butter", "Almond butter", "Almond milk (2 cartons)", "Coconut milk, carton", "Pistachios", "Pumpkin seeds", "Chia seeds", "Flax seeds", "Sesame seeds", "Coconut flakes", "Baked tortilla strips"] },
      { name: "Everyday Produce", why: "Great for everyday veggies, potatoes, and frozen items.",
        items: ["Mangoes (3)", "Bananas (6)", "Pineapple, frozen", "Mango, frozen", "Peach", "Lemons (4)", "Limes (6)", "Purple cabbage", "Green cabbage", "Zucchini (2)", "Bell peppers (5)", "Cherry tomatoes (2 pints)", "Cucumbers (3)", "Carrots (2 bunches)", "Red onion (3)", "Yellow onion (2)", "Garlic (2 heads)", "Ginger", "Sweet potatoes (4)", "Beets (2)", "Potatoes (3)", "Green onions (2 bunches)", "Edamame, frozen"] },
      { name: "Drinks", why: "Best sparkling water prices by the case.",
        items: ["Sparkling water (2 cases)", "Coffee"] },
    ],
  },
};
 
export default function MealPlan() {
  const [view, setView] = useState("plan");
  const [selectedDay, setSelectedDay] = useState(0);
  const [expandedMeal, setExpandedMeal] = useState(null);
 
  const toggleRecipe = (mealType) => {
    setExpandedMeal(expandedMeal === mealType ? null : mealType);
  };
 
  return (
    <div style={{
      fontFamily: "'Newsreader', 'Georgia', serif",
      maxWidth: 720, margin: "0 auto", padding: "24px 16px 40px",
      color: "#2d2a26",
      background: "linear-gradient(180deg, #faf8f4 0%, #f0ece4 100%)",
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
 
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#7a6b5a", marginBottom: 8 }}>
          Week 2 \u00B7 Egg-Free \u00B7 28 New Recipes
        </p>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Weekly Meal Plan</h1>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#8a7e6b", marginTop: 8, lineHeight: 1.5 }}>
          High protein \u00B7 Whole grains \u00B7 Weight loss \u00B7 Cardio & lifting 3\u20134\u00D7/week
        </p>
      </div>
 
      <div style={{ display: "flex", gap: 1, margin: "16px 0 24px", borderRadius: 12, overflow: "hidden", background: "#2d2a26", padding: 1 }}>
        {[
          { label: "Calories", value: "~1,800\u20132,000/day" },
          { label: "Protein", value: "120\u2013150g/day" },
          { label: "Prep days", value: "Sun & Wed" },
        ].map((stat, i) => (
          <div key={i} style={{ flex: 1, padding: "10px 8px", textAlign: "center", background: "#2d2a26" }}>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#a09585", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{stat.label}</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#faf8f4", fontWeight: 700 }}>{stat.value}</div>
          </div>
        ))}
      </div>
 
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "2px solid #e2dbd0", overflowX: "auto" }}>
        {TABS.map((tab) => (
          <button key={tab.id} onClick={() => { setView(tab.id); setExpandedMeal(null); }} style={{
            flex: "0 0 auto", padding: "10px 10px", border: "none", background: "none", cursor: "pointer",
            fontFamily: "'DM Sans'", fontSize: 11.5, fontWeight: view === tab.id ? 700 : 500,
            color: view === tab.id ? "#2d2a26" : "#a09585",
            borderBottom: view === tab.id ? "2px solid #2d2a26" : "2px solid transparent",
            marginBottom: -2, transition: "all 0.2s", whiteSpace: "nowrap",
          }}>{tab.label}</button>
        ))}
      </div>
 
      {view === "plan" && (
        <div>
          <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
            {DAYS.map((d, i) => (
              <button key={d.day} onClick={() => { setSelectedDay(i); setExpandedMeal(null); }} style={{
                flex: "1 1 calc(14.28% - 6px)", minWidth: 42,
                padding: "8px 0", border: selectedDay === i ? "2px solid #2d2a26" : "1px solid #d9d0c3",
                borderRadius: 10, background: selectedDay === i ? "#2d2a26" : "#fff",
                color: selectedDay === i ? "#faf8f4" : "#6b6155", cursor: "pointer",
                fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 600, transition: "all 0.2s",
              }}>{d.day.slice(0, 3)}</button>
            ))}
          </div>
 
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 12px", borderRadius: 20,
              background: TAG_COLORS[DAYS[selectedDay].prepDay].bg,
              color: TAG_COLORS[DAYS[selectedDay].prepDay].text,
              fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 600,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: TAG_COLORS[DAYS[selectedDay].prepDay].dot }} />
              Prepped on {DAYS[selectedDay].prepDay === "sunday" ? "Sunday" : "Wednesday"}
            </div>
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#a09585" }}>Tap a meal for the full recipe</span>
          </div>
 
          {["breakfast", "lunch", "dinner", "snack"].map((mealType) => {
            const meal = DAYS[selectedDay][mealType];
            const isExpanded = expandedMeal === mealType;
            return (
              <div key={mealType} style={{
                background: "#fff", borderRadius: 14, padding: 18, border: isExpanded ? "2px solid #2d2a26" : "1px solid #e8e1d6",
                boxShadow: isExpanded ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
                marginBottom: 12, transition: "all 0.2s", cursor: "pointer",
              }} onClick={() => toggleRecipe(mealType)}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 16 }}>{MEAL_ICONS[mealType]}</span>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#a09585", fontWeight: 600 }}>{mealType}</span>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#2a5a8c", fontWeight: 600, background: "#dce8f5", padding: "2px 8px", borderRadius: 20 }}>{meal.protein}</span>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#6b6155", fontWeight: 500, background: "#f0ebe3", padding: "2px 8px", borderRadius: 20 }}>{meal.cal}</span>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: 9, color: "#b5ab9a", fontWeight: 500 }}>/ person</span>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#a09585", transition: "transform 0.2s", transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}>{"\u25BC"}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>{meal.name}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "#5e574d", margin: 0, fontStyle: "italic" }}>{meal.desc}</p>
 
                {isExpanded && (
                  <div onClick={(e) => e.stopPropagation()} style={{ marginTop: 16, cursor: "default" }}>
                    <div style={{ height: 1, background: "#e8e1d6", margin: "0 0 16px" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <span style={{ fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 600, color: "#9a8c73", background: "#f5f0e8", padding: "3px 10px", borderRadius: 20 }}>Serves {meal.servings}</span>
                      {meal.prep && <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#8a7e6b", fontStyle: "italic" }}>{"\u{1F4CB}"} {meal.prep}</span>}
                    </div>
 
                    <h4 style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 700, margin: "0 0 8px", color: "#2d2a26" }}>Ingredients</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 16 }}>
                      {meal.ingredients.map((ing, i) => {
                        if (ing.startsWith("---")) {
                          return <div key={i} style={{ fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 700, color: "#9a8c73", marginTop: 6, textTransform: "uppercase", letterSpacing: 1 }}>{ing.replace(/---/g, "").trim()}</div>;
                        }
                        return (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#cdc3b4", flexShrink: 0, marginTop: 6 }} />
                            <span style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#4a4540", lineHeight: 1.4 }}>{ing}</span>
                          </div>
                        );
                      })}
                    </div>
 
                    <h4 style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 700, margin: "0 0 8px", color: "#2d2a26" }}>Steps</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {meal.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <div style={{
                            width: 22, height: 22, borderRadius: "50%", background: "#2d2a26", color: "#faf8f4",
                            fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 700,
                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                          }}>{i + 1}</div>
                          <p style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#4a4540", lineHeight: 1.55, margin: 0 }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
 
      {view === "snacks" && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>{"\u{1F36B}"} Smart Snacking</h2>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#8a7e6b", marginBottom: 20, lineHeight: 1.5 }}>New snacks this week. Same rules: one per day, 140\u2013210 cal, high-fiber or high-protein.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {DAYS.map((d) => (
              <div key={d.day} style={{ background: "#fff", borderRadius: 12, padding: 14, border: "1px solid #e8e1d6", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 700, color: "#a09585", minWidth: 36, textAlign: "center" }}>{d.day.slice(0, 3)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{d.snack.name}</div>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#6b6155", lineHeight: 1.4 }}>{d.snack.desc}</div>
                </div>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#2a5a8c", fontWeight: 600, background: "#dce8f5", padding: "2px 8px", borderRadius: 20, whiteSpace: "nowrap" }}>{d.snack.cal}</div>
              </div>
            ))}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>{"\u{1F964}"} Daily Drinks</h2>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#8a7e6b", marginBottom: 16, lineHeight: 1.5 }}>Same hydration plan, plus golden milk as a new evening option.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DRINKS.map((d) => (
              <div key={d.name} style={{ background: "#fff", borderRadius: 12, padding: 14, border: "1px solid #e8e1d6", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ fontSize: 22 }}>{d.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{d.name}</span>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 600, color: "#9a8c73", background: "#f5f0e8", padding: "2px 8px", borderRadius: 20 }}>{d.when}</span>
                  </div>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#6b6155", lineHeight: 1.4 }}>{d.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
 
      {view === "prep" && (
        <div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#8a7e6b", marginBottom: 20, lineHeight: 1.5 }}>Same two-session rhythm. New tasks for new meals.</p>
          {Object.entries(PREP_SCHEDULE).map(([key, prep]) => (
            <div key={key} style={{ background: "#fff", borderRadius: 14, padding: 20, border: "1px solid #e8e1d6", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ padding: "4px 12px", borderRadius: 20, background: TAG_COLORS[key].bg, color: TAG_COLORS[key].text, fontFamily: "'DM Sans'", fontSize: 12, fontWeight: 700 }}>{prep.label}</div>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#a09585" }}>Covers {prep.covers} \u00B7 {prep.time}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {prep.tasks.map((task, i) => <PrepItem key={i} task={task} />)}
              </div>
            </div>
          ))}
        </div>
      )}
 
      {view === "shopping" && (
        <div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#8a7e6b", marginBottom: 20, lineHeight: 1.5 }}>Week 2 grocery list. Tap to check off. See Store Guide for which items to grab where.</p>
          {Object.entries(SHOPPING_LIST).map(([cat, items]) => <ShoppingCategory key={cat} category={cat} items={items} />)}
        </div>
      )}
 
      {view === "stores" && (
        <div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#8a7e6b", marginBottom: 8, lineHeight: 1.5 }}>Same strategy: Wegmans first for bulk, then Whole Foods for seafood and specialty items.</p>
          <div style={{ background: "#fffbeb", borderRadius: 10, padding: 12, border: "1px solid #f0e6c0", marginBottom: 20, fontFamily: "'DM Sans'", fontSize: 12, color: "#8b7a3a", lineHeight: 1.5 }}>
            {"\u{1F4B0}"} <strong>Week 2 note:</strong> You\u2019ll need sushi-grade salmon for Thursday\u2019s poke bowl \u2014 the Whole Foods seafood counter can cut it fresh. Ask for it when you pick up the other fish.
          </div>
          {Object.entries(STORE_GUIDE).map(([storeName, store]) => (
            <div key={storeName} style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: 20 }}>{store.icon}</span>
                <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{storeName}</h2>
              </div>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#8a7e6b", margin: "0 0 4px", paddingLeft: 30 }}>{store.address}</p>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: store.color, fontWeight: 600, margin: "0 0 14px", paddingLeft: 30 }}>{store.tip}</p>
              {store.sections.map((section, si) => (
                <div key={si} style={{ background: "#fff", borderRadius: 14, padding: 16, border: `1px solid ${store.border}`, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>{section.name}</h3>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 600, color: store.color, background: store.bg, padding: "2px 8px", borderRadius: 20 }}>{section.items.length} items</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#8a7e6b", margin: "0 0 10px", lineHeight: 1.4, fontStyle: "italic" }}>{section.why}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {section.items.map((item, ii) => (
                      <div key={ii} style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0", borderBottom: ii < section.items.length - 1 ? "1px solid #f2ede6" : "none" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: store.color, opacity: 0.4, flexShrink: 0 }} />
                        <span style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#4a4540", lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div style={{ background: "#fff", borderRadius: 14, padding: 16, border: "1px solid #e8e1d6", marginTop: 8 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{"\u26A0\uFE0F"} Egg Allergy \u2014 New Items to Check</h3>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#6b6155", margin: 0, lineHeight: 1.6 }}>
              This week\u2019s new label checks: <strong>chicken sausage</strong> (some brands use egg as binder), <strong>buckwheat soba noodles</strong> (some contain wheat + egg \u2014 look for 100% buckwheat), <strong>rice paper wrappers</strong> (almost always egg-free, but verify), and <strong>peanut butter</strong> (should be fine, but check flavored varieties). Same rules apply to granola, naan, and panko from Week 1.
            </p>
          </div>
        </div>
      )}
 
      {view === "swaps" && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>{"\u{1F504}"} Chip Swap Guide</h2>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#8a7e6b", marginBottom: 20, lineHeight: 1.5 }}>Same swaps as Week 1 \u2014 keep the momentum going.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CHIP_SWAPS.map((swap, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: 16, border: "1px solid #e8e1d6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#b5554a", fontWeight: 600, textDecoration: "line-through", opacity: 0.7 }}>{swap.old}</span>
                  <span style={{ color: "#a09585" }}>{"\u2192"}</span>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#2e7d4f", fontWeight: 700 }}>{swap.swap}</span>
                </div>
                <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#6b6155", margin: 0, lineHeight: 1.4 }}>{swap.why}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#f0f7f2", borderRadius: 14, padding: 16, border: "1px solid #d0e4d6", marginTop: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 6px", color: "#2e7d4f" }}>{"\u{1F36B}"} Week 2 Chocolate Check-in</h3>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#3d6b4a", margin: 0, lineHeight: 1.6 }}>
              If you started at 70% last week, try moving to <strong>80%</strong> this week. The snack rotation includes dark chocolate dipped strawberries (Sunday) and chocolate-pistachio pumpkin seeds (Monday) \u2014 great ways to enjoy it without overdoing it. You should be noticing that milk chocolate tastes too sweet now.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
 
function PrepItem({ task }) {
  const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} style={{
      display: "flex", alignItems: "flex-start", gap: 10, padding: "6px 0",
      cursor: "pointer", userSelect: "none", borderBottom: "1px solid #f2ede6",
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
        border: done ? "none" : "2px solid #cdc3b4",
        background: done ? "#2d2a26" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
      }}>
        {done && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#faf8f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </div>
      <span style={{
        fontFamily: "'DM Sans'", fontSize: 13, lineHeight: 1.4,
        color: done ? "#b5ab9a" : "#4a4540", textDecoration: done ? "line-through" : "none",
      }}>{task}</span>
    </div>
  );
}
 
function ShoppingCategory({ category, items }) {
  const [checked, setChecked] = useState({});
  const toggleItem = (i) => setChecked((p) => ({ ...p, [i]: !p[i] }));
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const ICONS = { "Produce (Weekly)": "\u{1F96C}", "Proteins (Weekly)": "\u{1F969}", "Grains & Pantry": "\u{1F33E}", "Snack Staples": "\u{1F36B}", "Drinks": "\u{1F964}" };
  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: 16, border: "1px solid #e8e1d6", marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{ICONS[category]} {category}</h3>
        <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#a09585", fontWeight: 600 }}>{checkedCount}/{items.length}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {items.map((item, i) => (
          <div key={i} onClick={() => toggleItem(i)} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "5px 0",
            cursor: "pointer", borderBottom: i < items.length - 1 ? "1px solid #f2ede6" : "none", userSelect: "none",
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: 5, flexShrink: 0,
              border: checked[i] ? "none" : "2px solid #cdc3b4",
              background: checked[i] ? "#2d2a26" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
            }}>
              {checked[i] && <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#faf8f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </div>
            <span style={{
              fontFamily: "'DM Sans'", fontSize: 12.5, lineHeight: 1.4,
              color: checked[i] ? "#b5ab9a" : "#4a4540", textDecoration: checked[i] ? "line-through" : "none",
            }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
