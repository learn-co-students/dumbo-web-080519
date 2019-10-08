// What is the spread operator and why would I want to use it?

  /*
  const graham2018 = {
    name: "Graham",
    employer: "Access Labs",
    borough: "Brooklyn",
    shopsAtUniqloTooMuch: true,
    // ordersGrubhubTooOften: true
  }

  const goodHabits = {
    shopsAtUniqloTooMuch: false,
    eatsLotsOfVegetables: true,
    runsInTheMorning: true,
    sleeps8Hours: true
  }

  //can I do this in a more DRY way?
  const graham2019 = {
    shopsAtUniqloTooMuch: "sometimes",
    ...goodHabits,
    ...graham2018,
    // name: graham2018.name,
    // employer: graham2018.employer,
    // borough: graham2018.borough,
    // shopsAtUniqloTooMuch: goodHabits.shopsAtUniqloTooMuch,
    // eatsLotsOfVegetables: goodHabits.eatsLotsOfVegetables,
    // sleeps8Hours: goodHabits.sleeps8Hours,
    pets: [
      "elliott"
    ]
  }

  const newYearSameMe = {
    ...graham2018
  }

  // console.log(graham2018)
  // console.log(graham2019)
  // console.log(newYearSameMe)

  console.log(newYearSameMe === newYearSameMe)
  console.log(newYearSameMe === graham2018)

  */

// Could I do it to an array?

/*
  const bodyParts = ["head", "shoulders", "knees", "toes", "ears", "mouth", "esophagus"];

  const funSong = [ ...bodyParts, "knees", "toes"];

  // console.log(funSong2)
  console.log(funSong.join(" and "))
  // console.log(funSong2.join(" and "))

*/
// Could I do it to the parameters of a function?


  // function canTakeSixArguments(one, two, three, four, five, six) {
  //   console.log(one)
  //   console.log(two)
  //   console.log(three)
  //   console.log(four)
  //   console.log(five)
  //   console.log(six)
  // }



  const extendedDanceRemix = ["head", "shoulders", "knees", "toes", "knees", "toes"];


  // canTakeSixArguments(...extendedDanceRemix)
  


  function thisOnetakesRestParams(...params) {
    // console.log(greeting)
    console.log(params)
  }




// thisOnetakesRestParams("hello")


thisOnetakesRestParams(extendedDanceRemix)







