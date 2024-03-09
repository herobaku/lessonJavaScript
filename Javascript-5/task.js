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
// Task 1
// const genres = (arr) => {
//   const reduce = arr.filter((item) => {
//     if( item.genre === "Fiction" ) {
//       return item
//     }
//   })
//   return reduce
// }
// console.log(genres(books))
// Task 1 01
// const calcBooks = () => {
//   const filter = books.filter((item) => item.genre === "Fiction" ? item : "" ).map(item=> item)
//   return filter
// }
// console.log( calcBooks() )


// author adinda  "J" herfi olan kitabları yazin.
// const booksLetter = () => {
//   const  result = books.filter((book) => book.author.includes("J"))
//   return result;
// }
// console.log(booksLetter())



// Mystery genre'ine sahib olan kitablarin authorlarini elifba sirasina gore yazin.
// const  mysteryAuthor = () => {
//   const  filteredBooks = books.filter((book)=> book.genre ==="Mystery")
//   return filteredBooks
// }

// console.log(mysteryAuthor())


// Classic genre'ine sahip olub bestseller olmayan kitaplarin sayini tapin.
// const bestssellerFalse = () => {
//   const filterBest = books.filter(book => !book.bestseller);
//   return filterBest.length;
// }

// console.log(bestssellerFalse());


// Fiction olan kitablarin ad ve authordan ibaret teze objectden ibaret arr yaradin

// const authorBooks = () => {
//   const filteredBooks = books.filter((book) => book.genre === "Mystery").map(item => ({ author: item.author, bookName: item.bookName }));
//   return filteredBooks;
// }

// console.log(authorBooks())



// Mueyyen bir kitabı array'den silin.
// const removeBook = (arr, item) => {
//   let index = arr.indexOf(item);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
// }
// removeBook(books, books[3])
// console.log(books)
