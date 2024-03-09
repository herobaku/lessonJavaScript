let books = [
  {
    author: "J.K. Rowling",
    bookName: "Harry Potter and the Sorcerer's Stone",
    bestseller: true,
    genre: "Fantasy",
  },
  {
    author: "George Orwell",
    bookName: "1984",
    bestseller: false,
    genre: "Dystopian",
  },
  {
    author: "J.R.R. Tolkien",
    bookName: "The Hobbit",
    bestseller: true,
    genre: "Fantasy",
  },
  {
    author: "Jane Austen",
    bookName: "Pride and Prejudice",
    bestseller: false,
    genre: "Classic",
  },
  {
    author: "Harper Lee",
    bookName: "To Kill a Mockingbird",
    bestseller: true,
    genre: "Fiction",
  },
  {
    author: "F. Scott Fitzgerald",
    bookName: "The Great Gatsby",
    bestseller: false,
    genre: "Classic",
  },
  {
    author: "Agatha Christie",
    bookName: "Murder on the Orient Express",
    bestseller: true,
    genre: "Mystery",
  },
  {
    author: "Ernest Hemingway",
    bookName: "The Old Man and the Sea",
    bestseller: false,
    genre: "Fiction",
  },
  {
    author: "Jules Verne",
    bookName: "Twenty Thousand Leagues Under the Sea",
    bestseller: true,
    genre: "Adventure",
  },
  {
    author: "Arthur Conan Doyle",
    bookName: "Sherlock Holmes",
    bestseller: false,
    genre: "Mystery",
  },
];

// Fiction genre'ine sahib olan kitablarin ortalama seyfe sayini hesablayin.
const genre = (arr) => {
  const reduce = arr.map((item) => {
    return item.genre === "Fiction" ?  item : ""
  })
  // console.log(reduce);
  return reduce
}
// genre(books);
console.log(genre(books))






// author adinda  "J" herfi olan kitabları yazin.
// const booksLetter = () => {

// }









// Mystery genre'ine sahib olan kitablarin authorlarini elifba sirasina gore yazin.











// Classic genre'ine sahip olub bestseller olmayan kitaplarin sayini tapin.







// Fiction olan kitablarin ad ve authordan ibaret teze objectden ibaret arr yaradin











// Mueyyen bir kitabı array'den silin.
// const findBooks = (arr) => {
  // let z = []
//   const finds = arr.findIndex((item) => item.author === "Arthur Conan Doyle")
  
//   if (finds !== -1) {
//     arr.splice(finds, 4)
//     return arr
//   }
// }
// console.log(findBooks(books))