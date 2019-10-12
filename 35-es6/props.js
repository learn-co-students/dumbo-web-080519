
// Is there a shorthand way to create properties in an object literal 
// that have the the same names as variables I have in scope?
  /*
  const name = "Graham Troyer-Joy";
  const age = 33;
  const foodsDeepFriedAtHomeThisYear = [ 
    {
      name: "Shrimp Chips",
      vegan: false,
    },
    {
      name: "Pierogis",
      vegan: true
    }
  ]

  //shorthand props 
  const graham = { name, age, foods: foodsDeepFriedAtHomeThisYear };

  // //destructuring
  // const { name, age, foodsDeepFriedAtHomeThisYear } = graham;

  console.log(graham)
  */

// Is there a way to dynamically define (or compute) property names 
// in an object literal e.g. based on the value of a variable?

/*
  const propName = "feasibility";
  const propValue = true;

  const newYearsResolution = {
    body: "Write code every day",
    year: 2019,
    // could we assign attainability here instead?
    [propName]: propValue
  }

  // newYearsResolution.attainability = true
  // newYearsResolution[propName] = propValue


  console.log(newYearsResolution)

  */

