var lista = ["Uva","Pera","Maça","Manga","Mamão"];

	// criação de elemento

	var listaUl = document.createElement('ul');

	var body = document.getElementsByTagName('body');

	body[0].appendChild(listaUl);

	var listaNoBody = document.getElementsByTagName('ul');


	for(var i = 0; i < lista.length; i++){
			var liFor = document.createElement('li');
			var textoLi = document.createTextNode(lista[i]);
			liFor.appendChild(textoLi);
			listaNoBody[0].appendChild(liFor);

	}

	console.log(listaNoBody[0]);
