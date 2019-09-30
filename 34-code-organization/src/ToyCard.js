class ToyCard {

  constructor(name, imageUrl, likes, id){
    this.name = name
    this.imageUrl = imageUrl
    this.likes = likes
    this.id = id
  }

  render(){
    const div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `
      <h2>${ this.name }</h2>
      <img src="${ this.imageUrl }" class="toy-avatar" />
      <p><span class="likes-number">${ this.likes }</span> Likes </p>
      <button class="like-btn">Like <3</button>`

    this.likeButton = div.querySelector(".like-btn")
    this.likeButton.addEventListener("click", this.liked)

    this.likesNumber = div.querySelector(".likes-number")

    return div
  }

  liked = () => {
    ToyAdapter.increaseLikes(this.id, this.likes + 1, this.slapLikesOnTheDOM)
  }

  slapLikesOnTheDOM = (toy) => {
    this.likes = toy.likes
    this.likesNumber.innerText = this.likes
  }


}