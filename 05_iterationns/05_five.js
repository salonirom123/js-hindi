// const coding = ["js", "rb", "java", "cpp"]

// const values = coding.forEach((item) => {
//   console.log(item);  
// })

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9]

// const nwenum = mynums.filter((num) => {
//   return num > 4
// })

const newnums = []

mynums.forEach((num) => {
  if(num > 4){
    newnums.push(num)
  }
});

// console.log(newnums);

const books = [
  {title: 'book one', genre: 'fiction', publish: 1998, edition: 2004},
  {title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2008},
  {title: 'book three', genre: 'history', publish: 1999, edition: 2007},
  {title: 'book four', genre: 'non-fiction', publish: 1990, edition: 2000},
  {title: 'book five', genre: 'science', publish: 1993, edition: 2002},
  {title: 'book six', genre: 'fiction', publish: 1994, edition: 2001},
  {title: 'book seven', genre: 'history', publish: 1997, edition: 2006},
  {title: 'book eight', genre: 'science', publish: 1998, edition: 2004},
  {title: 'book nine', genre: 'non-fiction', publish: 1998, edition: 2004},
]

let userbooks = books.filter( (bk)=> bk.genre === 'history')

 userbooks = books.filter((bk) => { 
  return bk.publish <= 2000 && bk.genre === 'history'
})
console.log(userbooks);