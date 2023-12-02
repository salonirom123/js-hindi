const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobj) {
    // console.log(`${key} for ${myobj[key]}`);
}

const programming = ["js", "rb", "py", "cpp"]

for (const key in programming) {
   console.log(programming[key]);
}