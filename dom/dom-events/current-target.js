// currentTarget - always refers to the element to which the event handler has been attached to 
// target - identifies the element on which the event occured


function lesson115() {
    const btns = document.querySelectorAll('.event-target button');
    
    btns.forEach(btn => {
        btn.addEventListener('click', function(e){
            // console.log(e.currentTarget);
            // e.currentTarget.style.color = 'lime'
    
            console.log('target', e.target);
            e.target.style.padding = '2rem';
        });
    });

}

