setClickHandler("MakeNames" , newNames);


function newNames(){
	var NameGet = getInput("NameNum");
		console.log(NameGet);
		var NameFirst = ["Harry", " Hermione", " Ron", " George", " Albus", " Sirius", " Luna" , (getInput("FirstNames").split(" "))];
			console.log(NameFirst);
		var NameLast = ["Potter", "Granger", "Weasley ", "Black ", "Dumbledore ", "Snape ", "Lovegood" , (getInput("LastNames").split(" "))];
			console.log(NameLast);
		var NameCreate = NameFirst[Math.floor(Math.random() * NameFirst.length)];
			console.log(NameCreate);
		
}

