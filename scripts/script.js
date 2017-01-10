$(document).ready(function(){
	dataLoader();
	dataCon();
	dataCol();
});

function dataLoader(){
	$(document).find('[data-rate]').each(function(){
		var rT = $(this).attr('data-rate'), 
			trg = $(this).attr('data-rate-trigger');
		if(!rT) rT='0%';
		$(this).css('height',rT).removeClass('min').removeClass('max');
		$(document).find(trg).html(rT);
		if(rT=='0%'){
			$(this).addClass('min');
		}else if(rT=='100%'){
			$(this).addClass('max');
		}
    });
}

function dataCon(){
	$(document).on('click','.button-control',function(){
		var tgt = $(this).attr('data-target'),
			val = $(this).attr('data-val');
		$(document).find(tgt).attr('data-rate',val);
		dataLoader();
	});
}

function dataCol(){
	$(document).on('click','.button-color',function(){
		var tgt = $(this).attr('data-target'),
			val = $(this).attr('data-val');
		$(document).find(tgt).css('background-color',val);
	});
}