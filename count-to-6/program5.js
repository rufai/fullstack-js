let userArray = process.argv.slice(2);
// [userId, username, email, age, firstName, lastName]
const [,username,email] = userArray

console.log({username, email}  )