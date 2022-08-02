// Criando o elemento que irá substituir.
var el = document.createElement('h3');
	el.classList = "testando-class";

	var texto = document.createTextNode('Esse é o texto que irá implementar o H3');

	el.appendChild(texto);

	console.log(el);


// selecionar o elemento pai , para assim alterarmos o filho.

var body = document.querySelector('#title');

	console.log(body);

// selecionar o pai do el.

var pai = body.parentNode;

// trocar o elemento.

	pai.replaceChild(el,body); 