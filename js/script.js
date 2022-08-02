	
	function mensagem(msg){
		console.log("A operação resultou em: "+msg);
	}

	function soma(a,b,callback){
		let op = a + b;
		callback(op);
	}

	function multiplicacao(a,b,cb){
		let op = a * b;
		cb(op);
	}

	soma(7,6,mensagem);
	multiplicacao(7,6,mensagem);

