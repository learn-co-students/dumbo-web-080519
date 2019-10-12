Student.destroy_all
Snack.destroy_all

student_names = ["Avijit Lodh",
"Brandon James",
"Brian Wong",
"Derya Tanriverdi",
"Joel Mendoza",
"Joshua Nho",
"Kenneth Marks",
"Kimberly Bone",
"Matt Werner",
"Michelle Nguyen",
"Renée Cruz",
"Shane Lonergan",
"Sukrit Walia",
"Zermina Ejaz"
]

student_names.shuffle.each do |name|
  Student.create(name: name, age: rand(18))
end

derya = Student.find_by(name: "Derya Tanriverdi")

kim = Student.find_by(name: "Kimberly Bone")

sukrit = Student.find_by(name: "Sukrit Walia")

shane = Student.find_by(name: "Shane Lonergan")

Snack.create(name: "Chocolate", yumminess: 10, student_id: derya.id)
Snack.create(name: "Popcorn", yumminess: 15, student: kim)
sukrit.snacks.create(name: "blueberry yogurt quadratini", yumminess: 426)
shane.snacks << Snack.create(name: "Cinnamon Toast Crunch", yumminess: 3000)












#
