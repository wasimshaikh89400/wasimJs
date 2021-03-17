var jsonObj = require("./exp-json");
console.log("jsonObj : ", jsonObj);
console.log(`${jsonObj.firstName} ${jsonObj.lastName}`);

({ firstName: fn, lastName: ln } = jsonObj);

console.log(`${fn} ${ln}`);
