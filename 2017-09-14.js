/**
 * Created by w0291126 on 9/14/2017.
 */
// Included packages
var readlineSync = require('readline-sync');

// Declare and initializing variables
var name = readlineSync.question;
var message = "";

// Perform calculations or operations
message = "Hello, " + name + ". It's good to see you!";

// Output result(s)
console.log(message);
