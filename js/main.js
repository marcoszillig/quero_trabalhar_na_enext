$(function () {

	const base_url = '../potions.json';
	let potion = []
	$.getJSON(base_url, (data) => {
		$.each(data.potions, (index, value) => {
			$('.products')
				.append(`
					<li class="item" id="${value.id}">
						<img src="${value.image}" alt="${value.name}" class="img-responsive">
						<h4>${value.name} -</h4>
						<span> $${value.price}
					</li>`)
		})
		const potions = Object.values(data.potions)
		potions.forEach( el => {
			potion.push(el)
		});
		console.log(potion[0].id)

		$('.item').on('click', function(){
			let item = $(this).attr('id')
			if((item - 1) != potion[item].id){
				console.log(potion[item].id)			
				console.log(item)
			}
			
		})
	})
})
