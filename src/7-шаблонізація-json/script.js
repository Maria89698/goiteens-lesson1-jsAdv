const user = {
    name: 'Poly',
    age: 18,
    email: 'poly@ukr.net'
}
console.log(user);

const userJSON = JSON.stringify(user)
console.log(userJSON);

const user2 = JSON.parse(userJSON)
console.log(user2);
