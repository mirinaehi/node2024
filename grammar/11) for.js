const fruits = ['apple', 'banana', 'orange', 'pear']

for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i])
}

fruits.forEach(f => console.log(f))

for(let f of fruits) {
    console.log(f);
}