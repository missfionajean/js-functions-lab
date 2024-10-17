console.log("I've added extra test cases to each function to ensure accuracy.\n")
console.log("The GA-provided tests are the first result for each question.\n")

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x
    } else {
      return y
    }
}
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))
console.log('Exercise 1 Result:', maxOfTwoNumbers(120, 294))
console.log('Exercise 1 Result:', maxOfTwoNumbers(0, 0),'\n')


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

// practicing arrow functions
const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}

console.log('Exercise 2 Result:', isAdult(21))
console.log('Exercise 2 Result:', isAdult(14))
console.log('Exercise 2 Result:', isAdult(18),'\n')


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// practicing arrow functions
const isCharAVowel = (char) => {
    return 'aeiouAEIOU'.includes(char)
}

console.log('Exercise 3 Result:', isCharAVowel("a"))
console.log('Exercise 3 Result:', isCharAVowel("c"))
console.log('Exercise 3 Result:', isCharAVowel("e"),'\n')


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// practicing function expressions
const generateEmail = function(username, domain) {
    return `${username}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))
console.log('Exercise 4 Result:', generateEmail("mariamaria", "gmail.com"))
console.log('Exercise 4 Result:', generateEmail("bloop4blorp", "aol.com"),'\n')

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

// practicing function expressions and default parameter values
const greetUser = function(name, time = 'day') {
    return `Good ${time}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"))
console.log('Exercise 5 Result:', greetUser("Mrs. Frizzle", "evening"))
console.log('Exercise 5 Result:', greetUser("dude"),'\n')