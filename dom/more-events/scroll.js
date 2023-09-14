/**
Scroll Event - on element o4r document


window.addEventListener('scroll', function() {
    let y = window.scrollY + 'px';
    let x = window.scrollX + 'px';
})

document

scrollY - returns the nunmber of pixels the document is currently
scrolled along the vertical axis (pageYOffset)

scrollX - return the number of pizels scrolled along the
horizontal axis (pageXOffset)

 */

function lesson125() {
    window.addEventListener('scroll', () => {
        console.log(window.screenY + 'px')
        console.log(window.screenX + 'px')
    })
}

