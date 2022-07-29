// length

	var nome = "Gabriel";
	var obj = "Bola";

	console.log(nome.length);
	console.log(obj.length);

// indexOf
	
	console.log("O nome dele é " + nome + " e o a primeira letra de seu nome é: " + nome[0]);
	console.log("O objeto que " + nome +" utiliza é " + obj + " e seu objeto se inicia com a letra: " + obj[0]);

	// pode se também saber qual o index que está iniciando a palavra que procura.

	// Ex :

	var frase = "O rato roeu a roupa do rei de roma";

	console.log(frase.indexOf("rei"));

// slice

	// pode manipular a frase, pegando apenas dados especificos.
	// Ex : 

	var roeu = frase.slice(7,11);

	console.log(roeu); // manipulei e coletei apenas o dado "roeu".

// replace

	console.log(frase.replace("roeu","testou")); // método utilizado para substituir strings.


// inicia-se parte 2 , modificando conteudo do texto.

	// Alterando o formato do texto para "Caixa Alta ou Caixa Baixa".

	var caixaBaixa = "A ROUPA DO REI DE ROMA O RATO ROEU";
	console.log(caixaBaixa.toLowerCase()); // texto foi alterado para caixa baixa.

	var caixaAlta = "a roupa do rei de roma o rato roeu";
	console.log(caixaAlta.toUpperCase()); // texto foi alterado para caixa alta.

	// Formatando texto com trim.

	var nomeSemFormatacao = "          Gabriel         ";

		console.log(nomeSemFormatacao);

	var nomeFormatado = nomeSemFormatacao.trim();

		console.log(nomeFormatado);

	// formatação split, colocando frases ou dados em array.

		var tags = "PHP,JavaScript,HTML5,CSS";

		console.log(tags.split(','));

	// formataçao lastIndexOf.

	var segundaFrase = "Essa frase é de teste para concluir o indexof no seu ultimo teste";

		// console.log(segundaFrase.indexOf("teste")); // pegando a primeira palavra buscada pelo indexof.

		console.log(segundaFrase.lastIndexOf("teste")); // pegando o ultima palavra buscada pelo indexof. 


