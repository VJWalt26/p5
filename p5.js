setClickHandler("MakeNames" , newNames);


function newNames(){
	setHTML("NewNames" , "");
	var NameGet = getInput("NameNum");
			//adjectives for Spirit Animal;
		
		for (var i = 0; i < NameGet; i++){
		var NameFirst = ["Cowardly", " Presumptuous", " Condescending", " Fat", " Bumbling", " Laughing", "Snobby".split(" ")];
		var GetFirst = (getInput("FirstNames").split(" "));
		var FirstAll = NameFirst.concat(GetFirst);
		
		var NameLast = ["Ant ", "Tuna ", "Clam ", "Tiger ", "Giraffe ", "Zebra ", "Sparrow" .split(" ")];
			//random adjectives for Spirit Animals
		var GetLast = (getInput("LastNames").split(" "));
		var LastAll = NameLast.concat(GetLast);

		var FirstLog = FirstAll[Math.floor(Math.random() * FirstAll.length)];
			//random Spirit Animals
		var LastLog = LastAll[Math.floor(Math.random() * LastAll.length)];
		var NameCreate = FirstLog + " " + LastLog + "<br />";
			console.log(NameCreate);
			addHTML("NewNames" , NameCreate);
			
		}
			
}

