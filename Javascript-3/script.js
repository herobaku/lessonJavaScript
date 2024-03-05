// switch case
// while
// do while
// break , continue
// Functions (declaration and expressions)
// Parametrli , arguments, default parametr
// Return

// let a = false;

// console.log(a ? "okay" : "not");

// let choise = prompt("Hefteni regem olaraq daxil edin");

// switch (choise) {
//   case "1":
//     console.log("Bazarertesi");
//     break;
//   case "2":
//     console.log("Cersh. axh");
//     break;
//   case "3":
//     console.log("Chershenbe");
//     break;
//   default:
//     console.log("Bele bir hefte gunu yoxdur");
//     break;
// }

// for (let i = 0; i < 50; i++) {
//   if (i === 17) {
//     continue;
//   }

//   console.log(i);
// }

// let a = 0;

// while (a < 50) {
//   console.log(a);
//   a++;
// }

// do {
//   console.log(a);
//   a++;
// } while (a > 50);

// function hello() {
//   console.log("Salam Dunya");
// }
// hello();

// hello();

// const hello = () => {
//   console.log("Hello");
// };

// const hello = function () {
//   console.log("hello");
// };

// hello();

// function hello () {

// }

// const hello = x => console.log("hello");

// function hello(name, surname = "Qasimova") {
//   console.log(name + " " + surname + " salam");
// }

// hello("Arzu", "Shabanova");
// hello("Leyli", "Ceferova");
// hello("Sevda");
// hello("Sinan", "Gunduz");

// arrow function

// function kv(num) {
//   let result = num * num;
//   let sum = num + num;
//   let minus = num - num;
//   return result;

// }
// let result = kv(5);
// console.log(result);

// function kub(num) {
//   let result = num ** 3;
//   return result;
// }

// let final = kub(result);
// console.log(final);

// 2 parametr = sum
// name and surname hello
// sahe ve perimetr
// kub
// type'a gore deyishenler uzerinde aritmetik emeliyyatlar
// 3 eded alan bir funct en boyuk olan ededi tapin

// function duz(a, b, t) {
//   let result;

//   if (t === "p") {
//     result = (a + b) * 2;
//   }

//   if (t === "s") {
//     result = a * b;
//   }

//   return result;
// }

// console.log(duz(4, 6, "p"));
// console.log(duz(4, 6, "s"));

// function arithmetic(num1, num2, type) {}

// arithmetic(5, 6, "+");
// arithmetic(5, 6, "-");
// arithmetic(5, 6, "*");
// arithmetic(5, 6, "/");

// function bigger(a, b, c) {
//   let biggest = a;

//   if (a < b ) {
//     biggest = b;
//   }

//   if (b < c) {
//     biggest = c;
//   }

//   return biggest;
// }

// console.log(bigger(10, 100, 2));

// userden alinan ededin neqativ ve ya pozitiv oldugunu yoxlayan bir func
// 2 eded alan bir function yaz ve ededi ortasini tap
// iki ayri str alan bir func yazin ve bu strleri birleshdirin
// 3 eded alin ve onlardan birinin diger ikisi arasinda yerleshib yerleshmediyini kontol edin (mes: 5 , 1 ve 10 arasinda yerleshir)

// let books = [
//   {
//     author: "J.K. Rowling",
//     bookName: "Harry Potter and the Sorcerer's Stone",
//     bestseller: true,
//     genre: "Fantasy",
//   },
//   {
//     author: "George Orwell",
//     bookName: "1984",
//     bestseller: false,
//     genre: "Dystopian",
//   },
//   {
//     author: "J.R.R. Tolkien",
//     bookName: "The Hobbit",
//     bestseller: true,
//     genre: "Fantasy",
//   },
//   {
//     author: "Jane Austen",
//     bookName: "Pride and Prejudice",
//     bestseller: false,
//     genre: "Classic",
//   },
//   {
//     author: "Harper Lee",
//     bookName: "To Kill a Mockingbird",
//     bestseller: true,
//     genre: "Fiction",
//   },
//   {
//     author: "F. Scott Fitzgerald",
//     bookName: "The Great Gatsby",
//     bestseller: false,
//     genre: "Classic",
//   },
//   {
//     author: "Agatha Christie",
//     bookName: "Murder on the Orient Express",
//     bestseller: true,
//     genre: "Mystery",
//   },
//   {
//     author: "Ernest Hemingway",
//     bookName: "The Old Man and the Sea",
//     bestseller: false,
//     genre: "Fiction",
//   },
//   {
//     author: "Jules Verne",
//     bookName: "Twenty Thousand Leagues Under the Sea",
//     bestseller: true,
//     genre: "Adventure",
//   },
//   {
//     author: "Arthur Conan Doyle",
//     bookName: "Sherlock Holmes",
//     bestseller: false,
//     genre: "Mystery",
//   },
// ];

// Bestseller olan kitablarin Adlarini yazdirin.
// Fantasy genre olanlarin kitab adlarini ve yazici adlarini yazdirin
// hem bestseller olub , hem de fanstasy olanlari yazdirin .

// let movies = [
//   {
//     title: "Inception",
//     director: "Christopher Nolan",
//     genre: "Science Fiction",
//     blockbuster: true,
//   },
//   {
//     title: "The Shawshank Redemption",
//     director: "Frank Darabont",
//     genre: "Drama",
//     blockbuster: false,
//   },
//   {
//     title: "The Dark Knight",
//     director: "Christopher Nolan",
//     genre: "Action",
//     blockbuster: true,
//   },
//   {
//     title: "Forrest Gump",
//     director: "Robert Zemeckis",
//     genre: "Drama",
//     blockbuster: true,
//   },
//   {
//     title: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     genre: "Crime",
//     blockbuster: false,
//   },
//   {
//     title: "The Matrix",
//     director: "Lana and Lilly Wachowski",
//     genre: "Science Fiction",
//     blockbuster: true,
//   },
//   {
//     title: "The Godfather",
//     director: "Francis Ford Coppola",
//     genre: "Crime",
//     blockbuster: false,
//   },
//   {
//     title: "Avatar",
//     director: "James Cameron",
//     genre: "Action",
//     blockbuster: true,
//   },
//   {
//     title: "Titanic",
//     director: "James Cameron",
//     genre: "Romance",
//     blockbuster: true,
//   },
//   {
//     title: "The Silence of the Lambs",
//     director: "Jonathan Demme",
//     genre: "Thriller",
//     blockbuster: false,
//   },
// ];

// bestseller olanlarin titlelarini yazdir
// Sci-fi olanlarin title ve rejissorlarini yazdir
// hem bestseller hem de sci-fi olanlarin adlarini yazdir
