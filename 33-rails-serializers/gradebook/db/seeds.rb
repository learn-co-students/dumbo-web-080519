michelle = Teacher.create(name: "Michelle", subject: "Ping Pong")
kimberly = Teacher.create(name: "Kimberly", subject: "Sleeping")

sleep501 = Course.create(name: "Sleeping 501", teacher: kimberly, textbook: "Graduate's Course for Sleeping: You won't believe what happens here!")
Assignment.create(name: "Get good night's sleep", course: sleep501)
Assignment.create(name: "Get good weekend's sleep", course: sleep501)

sleep101 = Course.create(name: "Sleeping 101", teacher: kimberly, textbook: "Intro to Sleeping")
Assignment.create(name: "How to take a nap", course: sleep101)

ace = Course.create(name: "Serving Like an Ace", teacher: michelle, textbook: "Get schooled, nerds")
Assignment.create(name: "Watch Balls of Fury", course: ace)

poop = Course.create(name: "Talking 💩", teacher: michelle, textbook: "The Art of 💩 Talking")
Assignment.create(name: "Check yourself before you wreck yourself", course: poop)
