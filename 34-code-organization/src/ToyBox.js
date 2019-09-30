class ToyBox {
  
  constructor(){

    this.toyContainer = document.querySelector("#toy-collection")
    this.toyCards = []

    ToyAdapter.getAllToys(data => {
      // console.log(this)
      data.forEach(toy => {
        const toyCard = new ToyCard(toy.name, toy.image, toy.likes, toy.id)
        this.toyCards.push(toyCard)
      })

      this.toyContainer.append(...this.render())
    })
  }

  addToy = (toy) => {
    console.log(this)
    const newToyCard = new ToyCard(toy.name, toy.image, 0, toy.id)
    this.toyContainer.append(newToyCard.render())
  }

  render(){
    return this.toyCards.map(card => card.render())
  }

}