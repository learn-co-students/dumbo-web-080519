
function introduce(){
  return `Hey, I'm ${ this.fullName }`
}

const mazen = {
  fullName: "Mazen Al Swar",
  name: "Mazen",
  hometown: "Hoora, Bahrain",
  introduce: introduce
}

const graham = {
  legalName: "Graham Aden Troyer-Joy",
  name: "Graham",
  hometown: "Oak Park, IL",
  introduce: introduce
}

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  hometown: "TBD",
  introduce: introduce
}

console.log(mazen.introduce())
console.log(graham.introduce())
console.log(sylwia.introduce())

console.log(mazen.introduce === graham.introduce)
console.log(mazen.introduce() === graham.introduce())

/*
class ColorChanger {

  constructor(color){
    this.color = color

    this.button = document.createElement("button");
    this.button.innerText = `blort ${ this.color }`

    this.button.addEventListener("click", this.onButtonClick)

    document.body.append(this.button)
  }

  onButtonClick() {
    document.body.style.backgroundColor = this.color;
  }

}

var thing1 = new ColorChanger("#f00");

*/


