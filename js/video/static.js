

function toggleBrain(){
	$('#brain-animation').toggleClass('hidden');
	$('#brain-button').toggleClass('selected');
}


function toggleHeart(){
	$('#heart-animation').toggleClass('hidden');
	$('#heart-button').toggleClass('selected');
}


function toggleThoughts(){
	$('#thoughts-animation').toggleClass('hidden');
	$('#thoughts-button').toggleClass('selected');
}


$('#brain-button').on('click',function(){
	toggleBrain();
});

$('#heart-button').on('click',function(){
	toggleHeart();
});

$('#thoughts-button').on('click',function(){
	toggleThoughts();
});


function sayHello(){
	alert('hello');
}

function insertHeartAnimation(animationurl){
	$('#heart-animation').css("background-image","url('" + animationurl + "')");
}

function insertBrainAnimation(animationurl){
	$('#brain-animation').css("background-image","url('" + animationurl + "')");
}

function fadeInButtons(wait, length){
	setTimeout(function(){
		$('#button-container').fadeIn(length);
	}, wait);
}

function fadeOutButtons(wait, length){
	setTimeout(function(){
		$('#button-container').fadeOut(length);
	}, wait);
}

function fadeOutHeartAnimation(wait, length){
	setTimeout(function(){
		$('#heart-animation').fadeOut(length);
	}, wait);
}

function fadeOutBrainAnimation(wait, length){
	setTimeout(function(){
		$('#brain-animation').fadeOut(length);
	}, wait);
}

function scheduleThought(thought, time){
	var element = $('#thoughts-animation');
	setTimeout(function(){
		$(element).html(thought);
	}, time);
}



