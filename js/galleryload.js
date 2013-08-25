$('#blueimp-gallery').on('slide', function (event, index, slide) {
    //alert("nice");
	$('.description')[0].style.display="none";
	var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat lacinia nisl sit amet blandit. Quisque at nisl accumsan, tincidunt libero sit amet, dapibus urna. Nunc nec nisl non leo blandit malesuada. Vestibulum mollis sagittis aliquet. Vestibulum vitae neque purus. Morbi pretium velit ac ligula vulputate, ac ultrices dui adipiscing. Suspendisse luctus nulla a urna tempus mollis. Quisque sodales nibh ante, et vehicula urna molestie vel. Curabitur in orci ornare urna euismod accumsan. Curabitur scelerisque ultricies molestie. Morbi vitae cursus tellus, id laoreet elit. In luctus elementum tempus. Sed eget tincidunt turpis, ac dapibus augue. Nullam non ante egestas, fermentum augue ac, volutpat mi. Ut commodo a diam eu bibendum. Vivamus sollicitudin cursus diam ut auctor.Nam eget rhoncus nisi, vitae porttitor dui. Morbi in sagittis enim. Phasellus porta mauris at velit pharetra accumsan. Nulla fermentum nunc justo, ac faucibus diam egestas id. Proin lacinia neque odio, a accumsan elit tincidunt eu. Duis venenatis eros quis sem fermentum dictum. Sed vehicula nulla sit amet lectus blandit placerat. Quisque euismod sapien in molestie eleifend. Ut eleifend quam faucibus faucibus mollis. Quisque quis imperdiet ante, pharetra ultrices lectus.Sed sit amet dignissim est. Cras velit arcu, aliquam ut vulputate at, tristique at urna. Aliquam malesuada urna eu orci accumsan tristique eget vitae turpis. Donec consequat fringilla diam, in convallis mi sagittis non. Suspendisse sit amet erat eu metus condimentum tempus eget a est. Cras elit nisl, tincidunt nec congue vel, elementum non purus. Quisque faucibus velit sed turpis porttitor cursus. Proin auctor fringilla purus et lacinia. Mauris ultrices orci et nunc laoreet, quis tristique nibh venenatis. Vestibulum sed auctor leo. Aenean ultricies, mauris sed commodo pretium, ipsum est egestas mi, nec dapibus libero massa eget dui. Fusce nec condimentum urna.In vitae velit varius, accumsan lectus ac, porta arcu. Quisque facilisis massa nec risus volutpat, quis elementum elit vehicula. Sed vitae nisi arcu. Donec vitae quam risus. Aliquam lobortis ut metus sit amet viverra. Cras a mauris quis mi malesuada venenatis. Morbi interdum scelerisque purus, eget tristique augue tempus vitae. Proin ac semper mauris, id egestas arcu. Pellentesque at urna scelerisque, commodo purus sed, viverra elit. Sed dictum lectus nunc, eget bibendum nisl rutrum id. Praesent sit amet lectus sapien. Morbi tincidunt pellentesque nisi, a viverra risus vestibulum quis. Vesibulum dignissim et ipsum vel eleifend. Donec cursus erat ut facilisis sagittis. Integer feugiat commodo mi non convallis. Curabitur eu viverra urna. Fusce.";
	//var content = Math.random();
	$('.description')[0].innerHTML=content;
		
	var o_audio = document.getElementById('audio_inter');
	o_audio.src = "audio/LEVGR.mp3";
	o_audio.play();
	
	$('.v_audio')[0].style.display="none";
	
	
	
});
$('#blueimp-gallery').on('slideend', function (event, index, slide) {
	
	$('.description')[0].style.display="block";
	$('.v_audio')[0].style.display="block";


});
$('#blueimp-gallery').on('close', function (event, index, slide) {
    //alert("nice");
	//$('.description')[0].innerHTML="nice";
	$('.description')[0].style.display="none";
	//$(slide).find('.description')
      //.text(this.list[index].getAttribute('data-description
	$('.v_audio')[0].style.display="none";
	var o_audio = document.getElementById('audio_inter');
	o_audio.pause();
});
$('#blueimp-gallery').on('open', function (event, index, slide) {
    if ($('#b_playpause').length == 0) {
		var o_image = document.createElement("img");
		o_image.id = "b_playpause";
		o_image.src = "img/video-play.png";
		o_image.className ="fade";
		o_image.onclick = function(){
			o_audio = document.getElementById('audio_inter');
			
			if(o_audio.paused){
				o_audio.play();
			}else{
				o_audio.pause();
			}
		};
		$('.v_audio')[0].appendChild(o_image);
	}
});