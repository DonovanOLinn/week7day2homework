//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
//console.log(person3)
let answer1 = function(my_obj){
    for (let my_variable in my_obj) {
        if (my_variable === 'pizza') {
            console.log(`Person 3 likes ${my_obj[my_variable][0]} ${my_variable}`)
            console.log(`Person 3 likes ${my_obj[my_variable][1]} ${my_variable}`)
        } else if (my_variable === 'ice_cream'){
            console.log(`Person 3 likes ${my_obj[my_variable][0]} ${my_variable}`)
            console.log(`Person 3 likes ${my_obj[my_variable][1]} ${my_variable}`)
            console.log(`Person 3 likes ${my_obj[my_variable][2]} ${my_variable}`)
            
        } else if (my_variable === 'shakes') {
            console.log(`Person 3 likes ${my_obj.shakes[0].oberwise} Oberwise ${my_variable}`)
            console.log(`Person 3 likes ${my_obj.shakes[0].dunkin} Dunkin ${my_variable}`)
            console.log(`Person 3 likes ${my_obj.shakes[0].culvers} Culvers ${my_variable}`)
            console.log(`Person 3 likes ${my_obj.shakes[0].mcDonalds} McDonalds ${my_variable}`)
            console.log(`Person 3 likes ${my_obj.shakes[0].cupids_candies} Cupids Candies ${my_variable}`)
        } else {
            console.log(`Person 3 likes ${my_obj[my_variable]} ${my_variable}`)
        }

    }
}
answer1(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class PersonA {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`${this.name} is ${this.age} years old`)
    }

    addAge = () => {
        this.age ++
        
    }
}

let luke = new PersonA('Luke', 20);
luke.printInfo()
luke.addAge()
luke.printInfo()

let leia = new PersonA('Leia', 20)
leia.printInfo()
leia.addAge()
leia.addAge()
leia.addAge()
leia.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let countString = my_str => {
    return new Promise ((resolve, reject) => {
        if (my_str.length > 10){
            resolve(my_str);
        } else {
            reject(my_str);
        }
    })
}


countString('superduperz').then((result) => {console.log(`${result}`)}).catch((result) => {console.log(`Small Number`)});
countString('notsuper').then((result) => {console.log(`${result}`)}).catch((result) => {console.log(`Small Number`)});

//CODE WARS
function findShort(s){
    let x = s.split(" ");
    let short_word = x[0]
    for (i = 0; i < x.length; i++){
      if (x[i].length < short_word.length){
        short_word = x[i]
      }
    }
    return short_word.length
  }

const reverseSeq = n => {
    let x = []
    for (i = n; i > 0; i--){
        x.push(i)
    }
    return x
};