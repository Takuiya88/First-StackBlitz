// submit event listener
// prevent default
// how to get a value

function lesson118(){
    const form = document.querySelector('.form');
    const name  = document.querySelector('.name');
    const password = document.querySelector('.password');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Success: form has been submitted')
        console.log(name.value);
        console.log(password.value);
    })
    
    console.log(form, name, password)

}