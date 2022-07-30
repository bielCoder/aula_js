	// Criando Elemento
	var novoParagrafo = document.createElement('p');
	// Criando o conteudo que será incluido no elemento.
	var texto = document.createTextNode('Olá mundo!');
		// Realizando a  junção dos elementos.
		novoParagrafo.appendChild(texto);
		// Selecionando o body e chamando-o.
	var body = document.querySelector('body');
		// apresentando no body os elementos criados , ja com a junção dos mesmos.
		body.appendChild(novoParagrafo);

		// inserindo dentro de um container.

		var container = document.querySelector('#container');

		var span = document.createElement('span');

		var conteudo = document.createTextNode('Deu tudo certo,pode pular para a próxima aula');

		span.appendChild(conteudo);
		container.appendChild(span);
		console.log(container);		
	

		