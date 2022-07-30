
var container = document.createElement('div');
	
	// inserir classe por meio do DOM
	container.classList = "div-criada";



	


var aged_container = document.querySelector('#container');
	
	//inserindo elemento filho 
	
	aged_container.appendChild(container);




	// insertBefore -> insere antes

var container_dois = document.createElement('div');

	container_dois.classList = "div-before";


	aged_container.insertBefore(container_dois,container);

	console.log(aged_container);




