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

gsap.set(".top-img-wrapper", { perspective: 400, autoAlpha: 1 });

var tl = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".top-img-wrapper",
			pin: true,
			scrub: true,
		},
	})
	.to(".top-img", {
		transformOrigin: "-500% 50% -100px",
		rotationX: 0,
		z: 0,
	});
