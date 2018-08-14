$(function () {
	const base_url = '../potions.json';

	$.getJSON(base_url, (data) => {
		$.each(data.potions, (index, value) => {
			$('.products')
				.append(`
					<li onclick="openModal">
						<img src="${value.image}" alt="${value.name}" class="img-responsive">
						<h4>${value.name} -</h4>
						<span> $${value.price}
					</li>`)
		})
	})
})
function openModal(){
	document.getElementById('main_content').innerHTML('Teste');
}