// object
const user = {
  username: "Yash",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
      console.log("Got user details from database");
      console.log(`Username: ${this.username}`);
      console.log(this);
  }
}
console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

// Constructor function
function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn
  this.greeting = function(){
      console.log(`Welcome ${this.username}`);

  }
  return this
}

const userOne = new User("Yash", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
