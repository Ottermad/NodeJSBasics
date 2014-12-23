var http = require("http");

// Print out message
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " badge(s) and " + points + " points in Javascript.";
	console.log(message);
}

// Print out error messages
function printError(error) {
	console.error(error.message);
}

function get(username) {
	var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
		var body = "";

		response.on("data", function(chunk) {
			body += chunk;
		});

		response.on("end", function() {
			if (response.statusCode === 200) {
				try {
					var profile = JSON.parse(body);
					printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch (error) {
					// Parse Error
					printError(error);
				}
			} else {
				printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] +")"});
			}
		});

	});

	// Connection Error
	request.on("error", printError);
}

module.exports.get = get;
// Connect to API url: http://teamtreehouse/com/username.json
// Read data from response
// Parse the data
// Print the data
