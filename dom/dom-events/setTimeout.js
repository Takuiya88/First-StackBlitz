/**
setTimeout - runs function once after specific time

- pass function reference
- duration in ms (1000 ms - 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object
*/


function sayHello() {
    console.log('hello');
}


// setTimeout(sayHello, 1000);
    
// Don't do this
// setTimeout(sayHello(), 1000)



// Alternative approach, ES6 arrow function
// setTimeout(function() {
//     console.log('hello taku');
// }, 2000)

// pass arguments
function lesson123() {
    function showScore(name, score) {
        console.log(`Good ${name}!, your score is ${score}`);
    }
    
    
    // setTimeout(showScore, 1000, 'tomo', 100);
    
    const firstId = setTimeout(showScore, 1000, 'tomo', 100);
    const secondId = setTimeout(showScore, 1000, 'peter', 100);
    console.log(firstId)
    console.log(secondId)
    
    clearTimeout(firstId)
}

