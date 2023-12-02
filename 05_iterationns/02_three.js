// for of loop

const  arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set(`IN`, `India`)
map.set(`USA`,`United states of America`)
map.set(`Fr`, `france`)

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, `:-`, value);
}

const myobj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const [key, value] of myobj) {
    console.log(key, ':-', value);
}