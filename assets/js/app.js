
$(document).ready(function(){
   $('.container1').fadeOut(3300);
});

$(document).ready(function(){
   $('.container2').delay(3100).fadeIn("slow");
});


$(document).ready(function(){

	$('#miBuscador').on('change', function(){
		var selectValor = '#'+$(this).val();
		$('#pai').children('div').hide();
		$('#pai').children(selectValor).show();
	
	});
});



