### Deliverables:
1. Getting all sushi and displaying them
    - fetch data from JSON in App.js in componentDidMount()
    - saving the data to state
    - sending the data down as props 
    - mapping the prop into Sushi component 
    - in sushi.js rendering the data

2. Limiting the display to only 4 sushi at a time 
    - App.js: when creating sushi components make sure we handle only 4 at a time
    - .slice(startIndex, endIndex)

3. Eating the sushi
    - in App.js create a state -> "eaten: []", 
    - clicked sushi gets added to the array,
    - in Sushi.js check if the sushi included in the state - if yes, it will remove the sushi from the plate

4. Getting the plates to stack up
    - pass down the eaten sushi array to table
    - renderPlates method will accept eaten as an argument

5. Clicking a button to display next four
    - in App.js create a state indexNumber that starts with 0,
    - new function for moreButton and pass it;
    - function should update the number
    - when we hit the end, you wanna reset it to 0;

6. Subtracting the sushi price from the budget
    - state in App.js money;
    - method to subtract sushi price;
    - pass method to table;

