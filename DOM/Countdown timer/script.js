// 11 June 2026 2026 FIFA World Cup

// Html document-e aldigimiz deyer
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Function yaratdim ki setInterval deyeri yenilesin
const daysLeftToWorldCup = () => {
  // Indiki vaxt (timenow) - ve (FIFA) olacaq vaxti
  const FIFA = new Date("2026-06-11");
  const timenow = new Date();

  // Indiki vaxt (timenow) - ve (FIFA) olacaq vaxtindan deyeri
  const diff = FIFA.getTime() - timenow.getTime();

  // her bir zamanenin diff-e bolunmesi
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((diff % (1000 * 60)) / 1000);

  // Her bir deyerin innerHTML-e yazilir
  days.innerHTML = day;
  hours.innerHTML = String(hour).padStart(2, "00");
  minutes.innerHTML = String(minute).padStart(2, "00");
  seconds.innerHTML = String(second).padStart(2, "00");
};

// Function cagirilmasi ve document-e ise dusmesi
daysLeftToWorldCup();

// Function yenilenmesi
setInterval(daysLeftToWorldCup, 1000);
