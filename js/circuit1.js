
function circuit1Arrive() {
	currentPage = ".circuit1";
	$(".circuit1").fadeIn();
	$(".frame1").delay(500).fadeIn(1000);
}


$(".next1").click(function(){
	$(".frame1").delay(100).fadeOut(500);
	$(".frame").delay(500).fadeIn(1000);
});

$(".next11").click(function(){
	$(".frame").delay(100).fadeOut(500);
	$(".frame12").delay(500).fadeIn(1000);
});

$(".next12").click(function(){
	$(".frame12").delay(100).fadeOut(500);
	$(".frame2").delay(500).fadeIn(1000);
});

$(".next2").click(function(){
	$(".frame2").delay(100).fadeOut(500);
	$(".frame3").delay(500).fadeIn(1000);
});

$(".next3").click(function(){
	$(".frame3").delay(100).fadeOut(500);
	$(".frame4").delay(500).fadeIn(1000);
});

$(".next4").click(function(){
	$(".frame4").delay(100).fadeOut(500);
	$(".frame5").delay(500).fadeIn(1000);
});

$(".next5").click(function(){
	$(".frame5").delay(100).fadeOut(500);
	$(".frame6").delay(500).fadeIn(1000);
});

$(".next6").click(function(){
	$(".frame6").delay(100).fadeOut(500);
	$(".frame7").delay(500).fadeIn(1000);
});

circuit1Arrive();