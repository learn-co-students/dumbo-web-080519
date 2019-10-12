class ToyAdapter {
  
// a world where getAllToys returns a promise
  // static getAllToys(){
  //   return fetch("http://localhost:3000/toys")
  //     .then(res => res.json())
  //     // .then(data => potato = data)
  // }

  static getAllToys(callback){
    return fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(callback)
  }

  static createToy(toy, callback){
    return fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toy)
    }).then(res => res.json())
      .then(callback)
  }

  static increaseLikes(id, num, callback){
    fetch("http://localhost:3000/toys/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        likes: num
      })
    }).then(res => res.json())
    .then(callback)
  }


}