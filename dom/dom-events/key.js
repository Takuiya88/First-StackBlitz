// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const input = document.querySelector('.key-input');

input.addEventListener('keypress', () => {
    console.log('keypress: ' + input.value)
})

input.addEventListener('keydown', () => {
    console.log('keydown: ' + input.value)
})

input.addEventListener('keyup', () => {
    console.log('keyup: ' + input.value)
})


console.log(input)