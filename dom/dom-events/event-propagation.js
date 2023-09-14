// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

function lesson117() {

    const container = document.querySelector('.event-p');
    const btn = container.lastElementChild;
    const heading = container.firstElementChild;
    
    function hello() {
        console.log('hello')
    }
    
    btn.addEventListener('click', () => {
        const element = document.createElement('h1');
        element.classList.add('heading');
        element.textContent = `I'm inside the container`;
        container.appendChild(element);
        console.log(element)
    })
    container.addEventListener('click', function(e) {
        if  (e.target.classList.contains('heading')) {
            console.log('hello world')
        }
    })

    heading.addEventListener('click', hello);

}

lesson117()