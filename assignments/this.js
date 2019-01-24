/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Always looks at the windows
* 2. Implicit Binding: It's automatic and looks to the left of the invocation
* 3. New Binding: Uses a constructor function with the new keyword to build a new instance. The this keyword inside the function is bound to the new object.
* 4. Explicit Binding: It's explicit because you are explicitly passing in a this context to call() or apply().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// let myFunction = function() {
//     console.log(this);
//  }
 
//  myFunction(); 


// Principle 2

// code example for Implicit Binding

function something(){
    console.log(this.a);
  }
  
  let a = 5;
  
  let obj = {
    a: 10,
    something: something
  }
  
  obj.something()


// Principle 3

// code example for New Binding


function WorldCup(teamattribute) {
    this.name     = teamattribute.name;
    this.country  = teamattribute.country;
    this.language = teamattribute.language;
  
  }


const usa = new WorldCup({
    name: 'USA National Team',
    country: 'United States of America',
    language: 'English',
  });


console.log(`Team: ${usa.name}, Country: ${usa.country}, Lenguage: ${usa.language}`);

// Principle 4

// code example for Explicit Binding

function greet (h1, h2, h3) {
    console.log(`Hello, my name is ${this.name} and my hobbies are ${h1}, ${h2}, and ${h3}`)
  }
  
  const user = {
    name: 'Julian',
    age: 37,
  }
  
  const hobbies = ['Video Games', 'Movies', 'Soccer']
  
  greet.call(user, hobbies[0], hobbies[1], hobbies[2])