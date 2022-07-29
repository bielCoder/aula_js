	var frase = "Olá mundo , no escopo global";
	
	function local(){
		 frase = "Olá mundo , no escopo local"
			console.log(frase);
		}
		local();