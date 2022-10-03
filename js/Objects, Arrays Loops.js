/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let arr = [1, 10, 9, 7, 99];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let anagraficInfo = {
	name: "Stefano",
	surname: "Laguda",
	email: "laguda92@gmail.com",
	age: 29,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

anagraficInfo.drivingLicense = true;

// console.log(anagraficInfo);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete anagraficInfo.age;
// console.log(anagraficInfo);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let anagraficInfo_2 = {
	name: "Pinco",
	surname: "Pallino",
	email: "pinco-pallino@gmail.com",
	age: 44,
};

// console.log(anagraficInfo.email === anagraficInfo_2.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 40;
// console.log(`Spesa iniziale ${totalShoppingCart}`);

if (totalShoppingCart <= 50) {
	totalShoppingCart += 10;
	// console.log(`Spesa finale ${totalShoppingCart}`);
} else {
	// console.log(`Spesa finale ${totalShoppingCart}`);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let calcBlackFriday = () => {
	let discountedPrice = (totalShoppingCart * 20) / 100;
	// console.log(`Lo sconto applicato é pari a ${discountedPrice}`);
	return totalShoppingCart - discountedPrice;
};

// console.log(`Il totale scontato del 20% é di: ${calcBlackFriday()}`);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car_1 = {
	brand: "Hyundai",
	model: "i10",
	licensePlate: "CQ322LS",
};

let car_2 = { ...car_1, licensePlate: "LW340EP" };

let car_3 = { ...car_1, licensePlate: "AJ477LK" };

let car_4 = { ...car_1, licensePlate: "CX988ED" };

let car_5 = { ...car_1, licensePlate: "AQ112LL" };

// console.log(car_1, car_2, car_3, car_4, car_5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [{ car_1 }, { car_2 }, { car_3 }, { car_4 }, { car_5 }];
// console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log(carsForRent);

carsForRent.shift();

console.log(carsForRent);

carsForRent.pop();

console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];

carsForSale.push({ car_1 }, { car_3 }, { car_5 });

console.log(carsForSale);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
