// Meio de remoção do elemento filho no DOM
var container = document.querySelector('#container');
	
	var paragrafo = document.querySelector('#container p')

	container.removeChild(paragrafo);

	console.log(container);

// removendo o proprio elemento, sem ser o filho

	var subtitle = document.querySelector('.subtitle');

	subtitle.remove();