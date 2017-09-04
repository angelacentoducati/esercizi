function matchRandom(int){
	var randomNumber = Math.floor(Math.random() * 10);
	console.log(int);
	console.log(randomNumber);


	if (randomNumber === int ){
	//console.log('Good Work' + int + ' - ' + randomNumber);
	$('.result-matchRandom').html('<div>Good Work</div>' + int + ' - ' + randomNumber);
} else {
	$('.result-matchRandom').html('<div>Not matched</div>' + int + ' - ' + randomNumber);
	//console.log('Not matched' + int + ' - ' + randomNumber);
}
}

function calculateOperations(int1,int2){

	var multiply = int1 * int2;
	var divide = int1 / int2;

	$('.result-calculateOperations').html(multiply + '-' + divide);

}

function convertTemperatures(grado1,grado2){

	var Celsius =  (5/9) * (grado1 - 32);
	var Fahrenheit =  (9/5) + (grado2 * 32);

	$('.result-convert').html(Celsius + ' - ' + Fahrenheit);
	//console.log(Celsius + ' - ' + Fahrenheit);
}

function poth(int1, int2){
	var cont= 1;
	for(i=1; i<=int2; i++) {
		cont = int1 * cont;
		console.log(cont);
	}

	$('.result-poth').html(cont);
	//return cont;
}

function factorialOfNumber(n){
	if (n==0){
		return 1; 
	}
	return n * factorialOfNumber(n-1);
}

function sumAndProduct(){
	var cont= 0;
	var cont1=1;
	var array= [3,5,4,1,7,9];

	for(i=0; i<array.length; i++){
		cont= array[i] + cont;
		cont1= array[i] * cont1;
	}

	$('.result-sumAndProduct').html(cont+ "-" +cont1);
	//return cont+ "-" +cont1;
} 

function sumArray(){
	cont= 0;
	var array1= [1,0,2,3,4];
	var array2= [3,5,6,7,8,13];
	var array3= [];

	for(i=0; i<array2.length; i++){
		if (array1[i] != undefined && array2[i] != undefined){
			cont= array1[i] + array2[i];
			array3.push(cont);
		}
	}
	$('.result-sumArray').html(array3);
	//return array3;
}

function pariEDispari(){
	var array= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	for(i=0; i<=array.length; i++){

		if(array[i] % 2 ==0 ) {
			$('.result-pariEDispari').append("<div>Il numero e' pari</div>" +array[i]);	 
		//console.log("Il numero e' pari" +array[i]);
		} else {
			$('.result-pariEDispari').append("<div>Il numero e' dispari</div>" +array[i]);
		//console.log("Il numero e' dispari" +array[i]);
		}
	}
	
}




$(document).ready(function(){

	$('.matchRandom h1').click(function(){
		$(".matchRandom .panel").slideToggle('slam');
	});

	$('.matchRandom').find('.button-matchRandom').click(function(){
		//var intPippo = $('.pippo-input').val();
		var int = $('input[name=tasto]').val();
		matchRandom(parseInt(int));
	});



	$('.calculateOperations h1').click(function(){
		$(" .calculateOperations .panel").slideToggle('slam');
	});

	$('.calculateOperations').find('.button-calculate').click(function(){
		var int1 = $('input[name=tasto1]').val();
		var int2 = $('input[name=tasto2]').val();
		calculateOperations(int1, int2);
	});



	$('.convertTemperatures h1').click(function(){
		$(".convertTemperatures .panel").slideToggle('slam');
	});

	$('.convertTemperatures').find('.button-convertTemperatures').click(function(){
		var int1 = $('input[name=tasto3]').val();
		var int2 = $('input[name=tasto4]').val();
		convertTemperatures(int1, int2);
	});



	$('.poth h1').click(function(){
		$(".poth .panel").slideToggle('slam');
	});

	$('.poth').find('.button-poth').click(function(){
		var int1 = $('input[name=tasto5]').val();
		var int2 = $('input[name=tasto6]').val();
		poth(int1,int2);	
	});



	$('.factorialOfNumber h1').click(function(){
		$(".factorialOfNumber .panel").slideToggle('slam');
	});

	$('.factorialOfNumber').find('.button-factorialOfNumber').click(function(){
		var int = $('input[name=tasto7]').val();
		var result = factorialOfNumber(int);
		$('.result-factorialOfNumber').html(result);
	});



	$('.sumAndProduct h1').click(function(){
		$(".sumAndProduct .panel").slideToggle('slam');
	});

	$('.sumAndProduct').find('.button-sumAndProduct').click(function(){
		var int = $('input[name=tasto8]').val();
		sumAndProduct(int);
	});



	$('.sumArray h1').click(function(){
		$(".sumArray .panel").slideToggle('slam');
	});

	$('.sumArray').find('.button-sumArray').click(function(){
		var int = $('input[name=tasto9]').val();
		sumArray(int);
	});



	$('.pariEDispari h1').click(function(){
		$(".pariEDispari .panel").slideToggle('slam');
	});

	$('.pariEDispari').find('.button-pariEDispari').click(function(){
		var int = $('input[name=tasto10]').val();
		pariEDispari(int);
	});
});