const athletes = [
  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];

// Task 01
// const record = (arr) => {
//   const filtered = arr.filter(item => item.hasWorldRecord)
//   return filtered;
// }
// console.log(record(athletes))
// const worldchamions = athletes.map((item) => {
// let arr = [];
//   if (item.hasWorldRecord) {
//     arr.push(item)
//     return arr
//   }
// })
// console.log(worldchamions);
// Task 01-1
// athletes.forEach(item => {
//   if (item.hasWorldRecord) {
//     arr.push(item)
//   }
//   return arr
// });
// console.log(arr)
/* ---------------------------- */
// Task 02
// const females = (arr) => {
//   const filtered = arr.filter((item) => item.hasWorldRecord && item.gender === "Female");
//   const mapping = filtered.map((item) => item.name)
//   console.log(mapping)
// }
// females(athletes)
// const med = (arr) => {
//   const medals = arr.filter((item) => (item.totalMedals > 10))
//   return medals
// }
// console.log(med(athletes))
// Task 03
// 3. Atletlərin adlarından ibarət array yaradın.
// const athlet = (arr) => {
//   const athletFilter = arr.filter(item => item.name)
//   return athletFilter;
// }
// console.log(athlet(athletes))
// const names = athletes.map((item) => {
//   return item.name
// })
// console.log(names)
// Task 04
// const nameAndCountry = athletes.map((item) => {
//   return {
//     name: item.name,
//     country: item.country
//   }
// })
// console.log(nameAndCountry);
// Task 05
// const totalMedals = athletes.map((item) => {
//   let zero = 0
//   zero += item.totalMedals;
//   return zero
// })
// console.log(totalMedals)
// let medals = 0
// athletes.forEach((athlet)=>{
//     medals+=athlet.totalMedals
// })
// console.log(medals);
// Task 06
// function athletName(name) {
//   let bos = [];
//   athletes.forEach(item => {
//     if (item.name === name) {
//       bos.push({ item })
//       console.log(bos)
//     }
//   })
// }
// athletName("Yuna Kim")
// Task 07
// function worldchamionsPerson(arr) {
//   arr.forEach((item) => {
//     if (item.gender === "Male" && item.hasWorldRecord) {
//       console.log(item)
//     }
//   })
// }
// worldchamionsPerson(athletes);
// Task 08
// function americano() {
//   let arr = [];
//   athletes.forEach((item) => {
//     if (item.country === "United States" && item.totalMedals) {
//       arr.push(item.name)
//     }
//   })
//   console.log(arr)
// }
// americano();
// Task 09
// function year() {
//   athletes.forEach(item => {
//     if (item.gender === "Male" ) {
//     }
//   })
// }
// year();

// 1. Dünya rekordu olan atletlərdən ibarət array yaradın.

// 2. Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaradın.

// 3. Atletlərin adlarından ibarət array yaradın.

// 4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaradın.

// 5. Bütün atletlərin ümumi medallarının sayını hesablayın.

// 6. Atletin adına əsasən spesifik obyekti tapıb console-a yazın.

// 7. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlayın.

// 8. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaradın.

// 9. Kişi atletlərin yaşlarının ortalamasını tapın.
