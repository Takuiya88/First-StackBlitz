function lesson111() {
    const btn = document.querySelector('.btn');
    const heading = document.querySelector('.click-event').firstElementChild;
    
    function changeStyle() {
        let hasClass = heading.classList.contains('blue');
        if(hasClass) {
            heading.classList.remove('blue');
        } else {
            heading.classList.add('blue');
        }
        // console.log('invoked')
    }

    btn.addEventListener('click', changeStyle)
}

lesson111();

// btn.addEventListener('click', () => {
//     heading.classList.add('blue');
// })

