	// ClearTimeout
	var x = 0;

	var myTimer = setTimeout(function(){
			console.log("O valor de x é 0");
	},2000);

	x = 5;

	if(x > 0){
		clearTimeout(myTimer);
		console.log("O valor de x passou de 0");
	}

// ClearInterval

	var myInterval = setInterval(function(){
			console.log("Imprimindo interval");
	},500);


	var pararInterval = setTimeout(function(){
		console.log("Não precisa mais imprimir.");
		clearInterval(myInterval);	
		},1500);	
