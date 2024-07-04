function one() {
  const username = "Yash";

  function two() {
    const website = "youtube";
    console.log(username); // run because inner function can access outer function value
  }
  // console.log(website); // not run because website is block scoped for function two()
  // outer function can't access inner function value
  two();
}
one();

if (true) {
  const UserName = "Jeel";
  if (UserName === "Jeel") {
    const Website = " fast.com";
    console.log(UserName + Website);
  }
  // console.log(Website); // not run
}
// console.log(UserName); // not run

// child function can access parent function value
