$(document).ready(function(){
	
	var counter=0;
	var login = false;
	
	$('#slide').click(function(){
		if(counter == 0){
			$('img.img-responsive').attr('src', 'pics/food/creme_caramel.jpg');
			counter++; 
		}
		else if(counter == 1){
			$('img.img-responsive').attr('src', 'pics/food/rustic_tartlet.jpg');
			counter++;
		}
		else if(counter == 2){
			$('img.img-responsive').attr('src', 'pics/food/cc_sc_schichttorte.jpg');
			counter++;
		}
		else {
			$('img.img-responsive').attr('src', 'pics/food/choco_truffle.jpg');
			counter = 0;
		}
	});
	
	$('.loginOnly').hide();
});