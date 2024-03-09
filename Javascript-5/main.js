const books = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    pageCount: 176,
    isRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pageCount: 281,
    isRead: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    pageCount: 180,
    isRead: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    pageCount: 328,
    isRead: false,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pageCount: 310,
    isRead: true,
  },
];

// 1. Fiction tipindeki kitablari consola yazdirin(filter)
// const fict = (arr) => {
//   const booksType = arr.filter(item => item.genre === "Fiction" ? item : "")
//   return booksType
// }
// console.log("Fiction")
// console.log(fict(books))
// 2. Toplam seyfe sayi 200'den chox olan kitapların sayini tapin.
// const booksPages = (arr) => {
//   const booksPages200 = arr.filter(item => item.pageCount >= 200 ? item : "")
//   return booksPages200
// }
// console.log("PagesCount")
// console.log(booksPages(books))
// Kitapların umumi seyfe sayini hesablayın.
// const bookTotalPages = (arr) => {
//   const total = arr.reduce((acc, item) => acc + item.pageCount, 0)
//   return total
// }
// console.log("Kitablarin sayi")
// console.log(bookTotalPages(books))
// verilen bir kitabın oxunma veziyyetini yenileyin.
// --------------------------- Sehvdir Begin
// const booksRead = (arr) => {
//   const readTrue = arr.filter(item => !item.isRead)
//   return readTrue
// }
// console.log("Read")
// console.log(booksRead(books));
// --------------------------- Sehvdir End
// --------------------------- Duzdu Begin
// const findBooks = (arr, title) => {
//   let books = arr.find((item) => item.title === title)
//   if (books) {
//     books = !books.isRead
//   }
//   return books
// }
// console.log(findBooks(books, "1984"))
// --------------------------- Duzdu End