// Arrays

// let arr = [
//   1,
//   2,
//   3,
//   false,
//   "Arzu",
//   null,
//   undefined,
//   [1, 2, [3, 4]],
//   { name: "Arzu", age: 29 },
// ];

// let arr = [];

// arr[0] = 5;
// arr[1] = 10;
// arr[2] = 8;

// console.log(arr[arr.length - 1]);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// arr[3] = 20;
// delete arr[2];
// arr[20] = 100;
// console.log(arr);

// const arr = new Array(40, 50);

// console.log(arr);

// length, custom changing, empty
// new Array
// delete

// arr.forEach((item, index, arr) => {
//   console.log(item * 2);
// });

// console.log(arr);
//forEach - array loop,
//pop- sondan bir element silir geriye sildiyi elementi qaytarir
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.pop());
// console.log(arr.push(22));
// console.log(arr.shift());
// console.log(arr.unshift(100));
// console.log(arr);

// push - sona element elave edir, geriye length qaytarir,

//shift - pop ile eynidi ferqi on teref,
//unshift - push ile eynidi ferqi on teref,
//splice - 1ci deyer index, 2ci deyer say. Verilen indexden say qeder kesir geriye kesdiyini array kimi qaytarir.ehtiyac olduqda sildiyi itemlari bashqasi ile deyishdirir. Originali deyishdirir ,
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr.splice(3, 3,12,13,14));
// console.log(arr);

//toString - arrayi stringe chevirir. Originali deyishdirmir,
// let arr = ["Leyli", "Cemile", "Sevda", "Adem"];

// console.log(arr.toString());
// console.log(arr);
//concat - arrayleri birleshdirir, originali deyishdirmir,

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1.concat(10, 11));

//join - arrayi stringe chevirir ama verilen seperatorla,
// let arr = ["Leyli", "Cemile", "Sevda", "Adem"];

// console.log(arr.join(" "));

//slice - bashlangic ve son index alir ve hemin araliqda olan elementleri teze arrde qaytarir, Originali deyishdirmir, Menfi deyer de qebul edir

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.slice(0, 4));
// console.log(arr);

//reverse - tersine cevirir, originali deyishdirir,

// console.log(arr.reverse());
// console.log(arr.toReversed());
// console.log(arr);

// toReversed - 2023de gelib, originali deyishdirmir
//indexOf - elementin indexini tapir, eyni elementden 1den daha choxdusa onda 2ci deyer olaraq say bildirilir,
// let arr = [1, 2, 3, 4, 5, 6, 5, 5, 7, 8];
// console.log(arr.indexOf(5, 10));

//includes - boolean qaytarir, verilen elementin arrayda olub olmamasini yoxlayir,
// let arr = ["Arzu", "Cemile", "Tural", "Emin", "Elsane"];

// console.log(arr.includes("Arzu"));
//flat - ic ice olan arrayleri duzleshdirir,originali deyishdirmir,

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const news = arr.flatMap((item) => {
//   return item * 2;
// });

// console.log(news);
// console.log(arr.flat(2));
//flatmap - hem duzleshdirir hem de bir bir elementler uzerinde gezinir,
//map - elementler uzerinde hereket edir ve mueyyen prosesi icra edir,
// const mapping = arr.map((item) => {
//   return item * 2;
// });

// console.log(mapping);
//filter - sherte gore her bir elementi filter edir,
// const filtered = arr.filter((item) => item % 2 == 0);
// const filtered = arr.find((item) => item % 2 == 0);
// const filtered = arr.findIndex((item) => item % 2 == 0);
// const filtered = arr.every((item) => item % 2 == 0);

// console.log(filtered);
//find - filter kimidi ferq tapdigi ilk elementi getirir,
// findIndex - tapdigi ilk elementin indexini getirir,
//some - verilen shertin en az birinde kecerlidise true,
//every - verilen shertin en az biri falsedursa false,
// sort - arrayleri siralayir, originali deyishdirir,
// let arr = [11, 23, 44, 5, 7, 3, 8, 19];

// const sorted = arr.sort((a, b) => a - b);
// const sorted = arr.toSorted((a, b) => a - b);
// console.log(sorted);
// console.log(arr);
// toSorted (2023)
// reduce

// destructuring

// const computerModels = [
//   {
//     title: "MacBook Pro",
//     price: 1999.99,
//     category: "Laptop",
//   },
//   {
//     title: "Dell XPS 13",
//     price: 1299.99,
//     category: "Laptop",
//   },
//   {
//     title: "HP Spectre x360",
//     price: 1399.99,
//     category: "Convertible",
//   },
//   {
//     title: "Lenovo ThinkPad X1 Carbon",
//     price: 1699.99,
//     category: "Laptop",
//   },
//   {
//     title: "Custom Gaming PC",
//     price: 2499.99,
//     category: "Desktop",
//   },
//   {
//     title: "Asus ROG Strix G15",
//     price: 1799.99,
//     category: "Gaming Laptop",
//   },
//   {
//     title: "Acer Predator Helios 300",
//     price: 1599.99,
//     category: "Gaming Laptop",
//   },
//   {
//     title: "Microsoft Surface Pro 7",
//     price: 1299.99,
//     category: "Tablet",
//   },
//   {
//     title: "Apple iMac",
//     price: 2299.99,
//     category: "Desktop",
//   },
//   {
//     title: "Lenovo Legion Y540",
//     price: 1499.99,
//     category: "Gaming Laptop",
//   },
//   {
//     title: "HP Envy x360",
//     price: 1199.99,
//     category: "Convertible",
//   },
//   {
//     title: "Dell Alienware Aurora",
//     price: 2799.99,
//     category: "Gaming Desktop",
//   },
//   {
//     title: "Samsung Galaxy Book S",
//     price: 1099.99,
//     category: "Laptop",
//   },
//   {
//     title: "Google Pixelbook",
//     price: 899.99,
//     category: "Chromebook",
//   },
//   {
//     title: "MSI GL65 Leopard",
//     price: 1299.99,
//     category: "Gaming Laptop",
//   },
//   {
//     title: "Razer Blade 15",
//     price: 1999.99,
//     category: "Gaming Laptop",
//   },
// ];

// const user = prompt("Istediyiniz kompu daxil edin :");

// function filtered(arr) {
//   const filtered = arr
//     .filter((item) => {
//       return item.title.toUpperCase().includes(user.toUpperCase());
//     })
//     .map((el) => {
//       return {
//         title: el.title,
//         price: el.price,
//       };
//     });

//   return filtered;
// }

// let result = filtered(computerModels);
// console.log(result);

const filterPrice = (arr) => {
  const filtered = arr
    .filter((item) => item.price < 1000)
    .map((el) => el.title);
  return filtered;
};

console.log(filterPrice(computerModels));
