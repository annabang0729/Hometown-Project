

function pageoneArrive() {
	currentPage = ".pageone";
	$(".pageone").fadeIn();
	$("body").removeClass();
	$("body").addClass("p1");
	$(".title").delay(2000).fadeIn(1000);
	$(".title").delay(500).animate({top:'36%'}, "slow");
	$(".maintext").delay(3500).fadeIn(2000);
	$(".lineone").delay(3500).fadeIn(2000);
}









$(".two").on("click", handleNavigation);

$(".three").on("click", handleNavigation);


function handleNavigation(){
	if (currentPage==".pageone") {
		pageoneDepart();
		if ($(this).hasClass("one")) pagetwoArrive();
		return;
	}

	if (currentPage==".pagetwo") {
		pagetwoDepart();
		if ($(this).hasClass("one")) pageoneArrive();
		if ($(this).hasClass("two")) pagetwoArrive();
		if ($(this).hasClass("three")) pagethreeArrive();
		return;
	}

	if (currentPage==".pagethree") {
		pagethreeDepart();
		if ($(this).hasClass("one")) pageoneArrive();
		if ($(this).hasClass("two")) pagetwoArrive();
		if ($(this).hasClass("three")) pagethreeArrive();
		return;
	}
}

pageoneArrive();

