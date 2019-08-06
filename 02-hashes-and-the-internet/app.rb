require 'pry'
require 'rest-client'
require 'json'

def welcome
  puts "Hello, welcome to the Flatiron bookstore! 📕"
  puts "What would you like to search for today?"
  gets.chomp
end

def request_book_from_api(search_term)
  url = "https://www.googleapis.com/books/v1/volumes?q="
  url += search_term
  response = RestClient.get(url)
  response_string = response.body
  actual_response = JSON.parse(response_string)
  # response = JSON.parse(RestClient.get(url).body)
end

def get_book_titles(response_hash)
  titles = response_hash["items"].map {|book_hash| book_hash["volumeInfo"]["title"] }
  titles.each_with_index do |title, index|
    puts "#{index + 1}) #{title}"
  end

  puts "Which book do you want to see more information about?"
  gets.chomp
end

def get_more_information(title, response_hash)
  #response_hash["items"] => [{}, {}, {} , {}]
  # found_book => {}
  found_book = response_hash["items"].find do |book|
    book["volumeInfo"]["title"] == title
  end

  puts "The title of the book is:"
  puts found_book["volumeInfo"]["title"]

  puts "The author of the book is:"
  puts found_book["volumeInfo"]["authors"].join(" &")

  puts "The description of the book is:"
  puts found_book["volumeInfo"]["description"]

end

user_answer = welcome()
response_hash = request_book_from_api(user_answer)
title_of_a_book = get_book_titles(response_hash)
get_more_information(title_of_a_book, response_hash)

binding.pry






# # actual_response is a hash







#
0
