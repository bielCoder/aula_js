// parseFloat
	console.log(parseFloat('12.98')); // por mais que está dentro de string, transforma-se em number, por causa do método.
	console.log(Number.parseFloat('24.99')); // poucamente utlizado , utiliza-se mais método "sugar".

// parseInt
	console.log(parseInt('10')); // por mais que esteja em modo string, o método transforma em number tipo inteiro.
	console.log(parseInt(12.37)); // por mais que seja ponto flutuante, é arredondado para os primeiros digito.

// toFixed
	console.log(parseFloat(7.34.toFixed(1)));

// isNaN
	console.log(isNaN('Teste')); // Verifica se o dado informado não é número.
	console.log(isNaN(12));// Resultado dará false, pois 12 é um número.
	console.log(isNaN('21'));// Resultado dará false, Js converte automaticamente para número.

// MIN_VALUE e MAX_VALUE

	console.log(Number.MIN_VALUE);
	console.log(Number.MAX_VALUE);
	console.log(2.7976931348623157e+308);
