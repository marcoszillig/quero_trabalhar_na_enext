$(function(){

	// var $produtos = $('#potions');
	// $.ajax({		
	// 	url:'https://api.myjson.com/bins/ovemf',
	// 	type: 'get',
	// 	dataType: 'json',
	// 	success: function(potions) {			
	// 		$.each(potions, function(i, potion){
	// 			$produtos.append('<li>' + potions.name + '</li>');

	// 		})
	// 	}
	// })
	$.getJSON('http://localhost:3000/potions', function(obj){
		$.each(obj, function(key, value){
			$('#potions').append('<li><img src='+value.image+'>' + '<h4>'+ value.name + '</h4><span> - $' + value.price + '</span></li>');
		})
	})
});