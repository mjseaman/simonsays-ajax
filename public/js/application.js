$(document).ready(function(){
	$('li').addClass('color_me');
	$('#get_color').on('click',function(){
		$.ajax({
			type: 'POST',
			url: '/color'
		}).done(function(colorPos) {
			console.log(colorPos);
			console.log($('li:nth-child('+colorPos.cell+')'));
			$('li:nth-child('+colorPos.cell+')').css('background-color',colorPos.color);
			console.log($('li:nth-child('+colorPos.cell+')'));
		});
	});
});


// $(document).ready(function(){
// 	$('li').addClass('color_me');
// 	$('#get_color').on('click',function(){
// 		console.log(getColorAndCell());
// 		disco(getColorAndCell());
// 	});

// 	function getColorAndCell() {
// 		$.ajax({
// 			type: 'POST',
// 			url: '/color'
// 		}).done(function(data) {
// 			return data;
// 		});
// 	}

// 	function disco(data) {
// 			$('li:nth-child('+data.cell+')').css('background-color',data.color);
// 		}
// });