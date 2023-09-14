// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear


// localStorage.setItem('name', 'captain');
// sesstionStorage.setItem('name', 'Mario');
function lesson119() {
    localStorage.setItem('job', 'developer');
    localStorage.setItem('likes', 'tiktok');
    localStorage.setItem('flower', 'ponny');
    localStorage.setItem('address', '123 street');
    
    // Access getItem
    const name = localStorage.getItem('name')
    console.log(name)
    
    localStorage.removeItem(name)
    localStorage.clear();
}





