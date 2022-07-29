
	var pessoa = {
		nome : "Gabriel",
		idade : 23,
		falar : function(){
			console.log("Olá tudo bem?,meu nome é :" + this.nome);
		}
	}

		console.log("Meu nome é " + pessoa.nome + " tenho " + pessoa.idade + " anos");
		console.log(pessoa.nome + " diz : ")+pessoa.falar();


