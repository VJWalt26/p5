setClickHandler("MakeNames" , newNames);


function newNames(){
	var NameGet = getInput("NameNum");
		console.log(NameGet);
		var NameFirst = ["Harry", " Hermione", " Ron", " George", " Albus", " Sirius", " Luna" , (getInput("FirstNames").split(" "))];
			console.log(NameFirst);
		var NameLast = ["Potter", "Granger", "Weasley ", "Black ", "Dumbledore ", "Snape ", "Lovegood" , (getInput("LastNames").split(" "))];
			console.log(NameLast);
		var FirstLog = NameFirst[Math.floor(Math.random() * NameFirst.length)];
			console.log(FirstLog);
		var LastLog = NameLast[Math.floor(Math.random() * NameLast.length)];
			console.log(LastLog);
		var NameCreate = FirstLog + LastLog;
			console.log(NameCreate);
}

