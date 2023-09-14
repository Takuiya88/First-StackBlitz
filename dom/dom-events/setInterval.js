/**
setInterval - runs function repeatedly, at specific interval

- pass function reference
- duration in ms (1000 ms - 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
- on window object
*/
function lesson124() {
    let score = 0;
    
    function showScore(name) {
        score += 10;
        if(score % 50 === 0 || score % 100 === 0) {
            console.log('good')
        }
        console.log(`Well done  ${name}, socre is ${score}`);
    }
    
    function encourageMessage() {
        console.log(`You are great! keep going`)
    }
    
    
    const firstId = setInterval(showScore, 1000, 'bordy');
    const secondId = setInterval(encourageMessage, 4000)
    
    window.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(firstId);
        clearInterval(secondId);
    })
}