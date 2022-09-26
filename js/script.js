let nowDate = new Date();

console.log(nowDate);

document.querySelector("#display-date").innerHTML = nowDate;

let displayPartOfDate = {
	years: nowDate.getFullYear(),
	months: nowDate.getMonth(),
	days: nowDate.getDay(),
	minutes: nowDate.getMinutes(),
	seconds: nowDate.getSeconds(),
	milliseconds: nowDate.getMilliseconds(),
};

let listOfPartDate = document.querySelectorAll("#display-parts-of-date li");
console.log(listOfPartDate);

listOfPartDate[0].textContent = `Anni: ${displayPartOfDate.years}`;
listOfPartDate[1].textContent = `Mesi : ${displayPartOfDate.months}`;
listOfPartDate[2].textContent = `Giorni : ${displayPartOfDate.days}`;
listOfPartDate[3].textContent = `Minuti: ${displayPartOfDate.minutes}`;
listOfPartDate[4].textContent = `Secondi: ${displayPartOfDate.seconds}`;
listOfPartDate[5].textContent = `MilleSecondi: ${displayPartOfDate.milliseconds}`;

document.querySelector(
	"#show-europe-date"
).innerHTML = `${displayPartOfDate.days}/${displayPartOfDate.months}/${displayPartOfDate.years}`;

document.querySelector(
	"#differents-format-date"
).innerHTML = `<p>${nowDate.toLocaleDateString()}</p>
<p>${nowDate.toLocaleDateString("en-US", {
	month: "long",
})}</p>
<p>${nowDate.toISOString()}</p>
<p>${nowDate.toDateString()}</p>
<p>${nowDate.toLocaleTimeString()}</p>`;
