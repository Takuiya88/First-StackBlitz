// JSON.stringify(), JSON.parse()
function lesson121() {
    const friends = ['John', 'Peter', 'jane'];
    const localSt = localStorage;
    
    localSt.setItem('friends', JSON.stringify(friends));
    
    const getValue = JSON.parse(localSt.getItem('friends'));
    console.log(getValue[0])
    
    // More example
    let fruits;
    
    if (localSt.getItem('fruits')) {
        fruits = JSON.parse(localSt.getItem('fruits'))
    } else {
        fruits = [];
    }
    
    console.log(fruits)
    // fruits.push('apple');
    fruits.push('orange')
    // Convert to stringify
    localSt.setItem('fruits', JSON.stringify(fruits))
}