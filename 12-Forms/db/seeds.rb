Student.destroy_all

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
