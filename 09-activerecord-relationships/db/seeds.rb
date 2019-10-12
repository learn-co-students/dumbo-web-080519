Vote.destroy_all
User.destroy_all
Name.destroy_all

avi = User.create(name: "Avi", age: rand(18), handle: "Frozen")
kenny = User.create(name: "Kenny", age: rand(18), handle: "Horseman")
sukrit = User.create(name: "Sukrit", age: rand(18), handle: "The Politician")
michelle = User.create(name: "Michelle", age: rand(18), handle: "080519 4 lyf3")

dumbo = Name.create(name: "080519")
freezing = Name.create(name: "It's Freezing in Here")
fruit = Name.create(name: "Fruit Snack Devs")
horse = Name.create(name: "I Need this Horse")

Vote.create(user_id: avi.id, name_id: freezing.id, day: "Monday")
Vote.create(user_id: avi.id, name_id: fruit.id, day: "Tuesday")
Vote.create(user_id: michelle.id, name_id: dumbo.id, day: "Thursday")
Vote.create(user_id: sukrit.id, name_id: fruit.id, day: "Friday")

puts "It has been seeded"
