const mynum = [1,2,3]

// reduce method

// const mytotal = mynum.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

const mytotal = mynum.reduce((acc, curr) => acc+curr, 0)
// console.log(mytotal);

const shoppingcard = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 9999
    },
    {
        itemName: "py course",
        price: 299
    },
    {
        itemName: "rb course",
        price: 1999
    },
]

const pricetotal = shoppingcard.reduce((acc, item) => acc + item.price,0)

console.log(pricetotal);