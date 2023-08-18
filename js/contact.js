var mobileFlag = false;
function openMobile() {
	var doc = document.querySelector(".mobile-side-bar");
	doc.style.display = "flex";
	mobileFlag = true;
}
function closeMobile() {
	var doc = document.querySelector(".mobile-side-bar");
	doc.style.display = "none";
	mobileFlag = false;
}
