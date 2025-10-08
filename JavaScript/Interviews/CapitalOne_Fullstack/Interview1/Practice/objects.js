let user = {
  username: "Sahr",
  age: 20,
  email: "sahr@gmail.com",
  hobbies: ["Study", "Code"],
  "like gyn": true,
};

user.age = 30;
console.log(user);

delete user.email;

console.log(user);

// For multiproperty: dot notation does not work
user["like gyn"] = false;

console.log(user);

//Get keys
for (keys in user) {
  console.log(keys);
}

// Copying Object
let cloneUser = {};

for (let key in user) {
  cloneUser[key] = user[key];
}
console.log(cloneUser);
