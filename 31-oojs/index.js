
const mazen = {
  fullName: "Mazen Al Swar",
  name: "Mazen",
  hometown: "Hoora, Bahrain",
  introduce: function () {
    return `Hey, I'm Mazen`
  }
}

const graham = {
  legalName: "Graham Aden Troyer-Joy",
  name: "Graham",
  hometown: "Oak Park, IL",
  introduce: function () {
    return `Hey, I'm Graham`
  }
}

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  hometown: "TBD",
  introduce: function () {
    return `Hey, I'm Sylwia`
  }
}

console.log(mazen.introduce())
console.log(graham.introduce())
console.log(sylwia.introduce())

console.log(mazen.introduce === graham.introduce)
console.log(mazen.introduce() === graham.introduce())


