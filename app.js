// Problem: We need a simple way to look at a user's badge count and javascript points
// Use Node.js to connect to treehouse's API to get profile infomation to print out
var profile = require("./profile");
var users = process.argv.slice(2);
users.forEach(profile.get);