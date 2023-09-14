// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

function lesson112() {

    const parent = document.querySelector('.mouse-event');
    const h2 = parent.firstElementChild;
    const btn = document.querySelector('.mouse-event .btn');
    const p = btn.nextElementSibling;
    
    btn.addEventListener('mousedown', () => {
        h2.classList.add('blue')
        console.log('down')
    })
    btn.addEventListener('mouseup', () => {
        h2.classList.remove('blue')
        console.log('down')
    })

    p.addEventListener("mouseenter", (e) => {
        const el = e.target;
        el.classList.add('circle');
    })
    p.addEventListener("mouseleave", (e) => {
        const el = e.target;
        el.classList.remove('circle');
    })


    console.log(h2, btn, p)
}

// lesson112()