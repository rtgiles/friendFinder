// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	 console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
		 console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		 console.log('userResponses = ' + userResponses);

		// Compute best friend match
		//var matchName = '';
		//var matchImage = '';
		//var totalDifference = 10000; // Make the initial value big for comparison
		var diffArray= [];
		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));
			let comparedFriend= friends[i];
			// Compute differences for each question
			var diff= 0;
			for (var j = 0; j < comparedFriend.scores.length; j++) {
				diff += Math.abs(parseInt(comparedFriend.scores[j]) - parseInt(userResponses[j]));
				console.log('friend = ' + friends[i].name)
				console.log('each diff operation = ' + diff)
			}
			console.log('diff = ' + diff);
			diffArray[i]= diff;
			console.log("diffArray = "+ JSON.stringify(diffArray))
		}
		// If lowest difference, record the friend match
		var friendNum= diffArray[0];
		var friendIndex= 0;
		for(var i= 0; i < diffArray.length; i++){
			if (diffArray[i] < friendNum) {
				friendNum= diffArray[i];
				friendIndex= i;
			}	
		//console.log('Closest match found = ' + diff);
		}
		console.log('Friend match name = ' + friends[friendIndex].name);
		console.log('Friend match image = ' + friends[friendIndex].photo);

				/* totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				console.log("matchname = " + matchName);
				console.log("matchimage =" + matchImage) */
		
		

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json(friends[friendIndex]);
	})
}