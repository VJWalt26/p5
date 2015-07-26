setClickHandler("MakeNames" , newNames);


function newNames(){
	var NameGet = getInput("NameNum");
		//console.log(NameGet);
		var NameFirst = ["Cowardly", " Presumptuous", " Condescending", " Fat", " Bumbling", " Laughing", " Snobby" , (getInput("FirstNames").split(" "))];
			//console.log(NameFirst);
		var NameLast = ["Ant", "Tuna", "Clam ", "Tiger ", "Giraffe ", "Zebra ", "Sparrow" , (getInput("LastNames").split(" "))];
			//console.log(NameLast);
		var FirstLog = NameFirst[Math.floor(Math.random() * NameFirst.length)];
			//console.log(FirstLog);
		var LastLog = NameLast[Math.floor(Math.random() * NameLast.length)];
			//console.log(LastLog);
		var NameCreate = FirstLog + " " + LastLog;
			console.log(NameCreate);
		for (i = NameCreate; i < NameGet; i++){
			console.log(i);
		}
			
}

