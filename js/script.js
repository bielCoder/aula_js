
	function calculaMedia(primeira_nota,segunda_nota){
		let total = (primeira_nota + segunda_nota)/2;
		return total;
	}
	var result = calculaMedia(5.2,5.2);
	console.log(result.toFixed(1));

	if(result >= 6.0){
		document.write("Parabéns você foi aprovado com a média : " + result.toFixed(1));
	}else if((result >= 5.0)&&(result < 6.0)){
		document.write("Você ficou de recuperação com a média: " + result.toFixed(1));
	}else if(result < 5.0){
		document.write("Você foi reprovado diretamente com média : " + result.toFixed(1));
	}
