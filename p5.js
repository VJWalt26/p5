setClickHandler("MakeNames" , newNames);


function newNames(){
	setHTML("NewNames" , "");
	var NameGet = getInput("NameNum");
			//adjectives for Spirit Animal;
		var NameFirst = ["Cowardly", " Presumptuous", " Condescending", " Fat", " Bumbling", " Laughing", " Snobby" , (getInput("FirstNames").split(" "))];
			//Spirit Animals;
		
			//New Variable to describe Spirit Animal;
		
		for (var i = 0; i < NameGet; i++){
		var NameLast = ["Ant ", "Tuna ", "Clam ", "Tiger ", "Giraffe ", "Zebra ", "Sparrow" , (getInput("LastNames").split(" "))];
			//random adjectives for Spirit Animals
		var FirstLog = NameFirst[Math.floor(Math.random() * NameFirst.length)];
			//random Spirit Animals
		var LastLog = NameLast[Math.floor(Math.random() * NameLast.length)];
		var NameCreate = FirstLog + " " + LastLog + "<br />";
			console.log(NameCreate);
			addHTML("NewNames" , NameCreate);
			
		}
			
}

