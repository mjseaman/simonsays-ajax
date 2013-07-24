// $(document).ready(function(){
// 	$('li').addClass('color_me');
// 	$('#get_color').on('click',function(){
// 		$.ajax({
// 			type: 'POST',
// 			url: '/color'
// 		}).done(function(colorPos) {
// 			console.log(colorPos);
// 			console.log($('li:nth-child('+colorPos.cell+')'));
// 			$('li:nth-child('+colorPos.cell+')').css('background-color',colorPos.color);
// 			console.log($('li:nth-child('+colorPos.cell+')'));
// 		});
// 	});
// });


$(document).ready(function(){

	// Updates cells to display as squares - unnecessary if the designer can alter CSS or HTML
	$('li').addClass('color_me');

	$('#get_color').on('click',function(){
		updateCell();
	});

	// Sets the color changes on a timer!  
	// Interesting to see how long the AJAX request takes.
	window.setInterval(updateCell,5);

	function updateCell() {

		$.ajax({
			type: 'POST',
			url: '/color'
		}).done(function(data) {
			 disco(data);
		});
	}

	function disco(data) {
			$('li:nth-child('+data.cell+')').css('background-color',data.color);
		}
});