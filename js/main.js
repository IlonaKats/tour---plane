$(document).ready(function () {

	var modalOverlay = $(".modal__overlay");
	var modalDialog = $(".modal__dialog");


	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		keyboard: {
			enabled: true,
			onlyInViewport: false,
			pageUpDown: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.slider-button--next',
			prevEl: '.slider-button--prev',
		},
	});


	var reviewSlider = new Swiper(".reviews-slider", {
		loop: true,
		navigation: {
			nextEl: ".reviews-slider__button--next",
			prevEl: ".reviews-slider__button--prev",
		},
		grabCursor: true,
		keyboard: {
		enabled: true,
		onlyInViewport: true,
		},
	});


	var menuButton = $(".menu-button");
	menuButton.on("click", function () {
		$(".navbar-bottom").toggleClass("navbar-bottom--visible");
		// body.toggleClass('lock');

	});



	const body = document.querySelector('body');
	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);

	function openModal() {
		//var modalOverlay = $(".modal__overlay");
		//var modalDialog = $(".modal__dialog");
		modalOverlay.addClass("modal__overlay--visible");
		modalDialog.addClass("modal__dialog--visible");
		// body.classList.add('none');

	}

	function closeModal(event) {
		event.preventDefault();
		// var modalOverlay = $(".modal__overlay");
		// var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
		// body.classList.remove('none');
	}

// закрываем Popup окно, нажатием клавиши Esc
 	$(document).on("keydown", function(event) {
	 	if (event.code == "Escape") {
			modalDialog.removeClass("modal__dialog--visible");
			modalOverlay.removeClass("modal__overlay--visible");
		}
	 });


	// $(".modal__dialog").on("click", function(event) {
	// event.stopPropagation();
	// });

// обработка форм
	$(".modal__form").validate({
		errorClass: "invalid",
		messages: {
			name: {
				required: "Please specify your name",
				minlength: "Name must contain at least 2 letters"
			},
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			},
			phone: {
				required: "Please specify your phone",
			},
  		},
	});











	$(".footer__form").validate({
		errorClass: "invalid",
		messages: {
			name: {
				required: "Please specify your name",
				minlength: "Name must contain at least 2 letters"
			},
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			},
			phone: {
				required: "Please specify your phone",
			},
		},
	});






	$(".newsletter__subscribe--form").validate({
		errorClass: "invalid",
		messages: {
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			},

  		},
	});



	AOS.init();
	AOS.init({disable: 'mobile'});


});



