// if-else statements
// conditions: <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("Yes!");
}

if (2 === "2") {
  console.log("Executed!");
} else {
  console.log("Not executed!");
}

// const balance = 1000;
// if (balance > 500) console.log("You have money!"),console.log("Ha tara Paisa!"); // Don't do like this

// *************************************************************************
// else if statements
const balance = 1000;
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to shoping...");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}
