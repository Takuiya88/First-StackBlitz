// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbled up -- default
// event capturing - fires at the root and fires until reaches target

function lesson116() {
    
    const container = document.querySelector('.propagation');
    const ul = container.firstElementChild;
    const list = ul.querySelectorAll('li');
    
    function showBubbling(e) {
        console.log('current target', e.currentTarget);
        console.log('target', e.target);
        if(e.target.tagName = 'li') {
            console.log('you clicked the link')
        }
    };
    
    function stopPropagation(e) {
        console.log('clicked the list')
        
        e.stopPropagation();
    }

    ul.addEventListener('click', showBubbling, {capture: true});
    container.addEventListener('click', showBubbling, {capture: true});
    document.addEventListener('click', showBubbling, {capture: true});
    window.addEventListener('click', showBubbling, {capture: true});
}

// lesson116()