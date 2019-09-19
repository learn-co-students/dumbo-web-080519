
fetch("http://localhost:3000/cats", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Cyata"
  })
}).then(res => res.json())
  .then(console.log)

