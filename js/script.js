	// evento click

	var btn = document.querySelector('#btn');

	console.log(btn);

	btn.addEventListener("click",function(){
		console.log("clicou");
		this.style.color = 'red';
	});

	// evento dbclick

	titulo = document.querySelector('#titulo');

	btn.addEventListener("dblclick",function(){
		console.log("duplo click");
		titulo.style.color = 'blue';
	})
