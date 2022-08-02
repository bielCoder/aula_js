	var cubo = document.querySelector('#cubo');

	function mudaCorOver(){
		cubo.style.backgroundColor = 'red';
	}

	function mudaCorOut(){
		cubo.style.backgroundColor = 'white';
	}

	cubo.addEventListener("mouseover",mudaCorOver);
	cubo.addEventListener("mouseout",mudaCorOut);
