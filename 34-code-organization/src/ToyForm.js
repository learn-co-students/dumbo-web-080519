class ToyForm {

  constructor(createdCallback){
    this.createdCallback = createdCallback
    this.toyForm = document.querySelector(".add-toy-form")
    this.toyForm.addEventListener("submit", this.submit.bind(this))
  }

  submit(e){
    e.preventDefault()
    ToyAdapter.createToy(this.getValuesFromForm(), this.createdCallback)
  }

  getValuesFromForm(){
    return {
      name: this.toyForm.name.value,
      image: this.toyForm.image.value
    }
  }

}