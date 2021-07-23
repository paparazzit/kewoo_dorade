$("#tutors").owlCarousel({
	loop: false,
	margin: 50,
	autoWidth: true,
	center: false,
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		1200: {
			items: 3,
		},
		1300: {
			items: 5,
		},
	},
});

$("#testimonials").owlCarousel({
	loop: true,
	margin: 50,
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		800: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});
// tutor rate in carousel
var tutor_rate = document.querySelectorAll(".tutor_rate");
tutor_rate.forEach((single_tutor_rate) => {
	var get_rate = single_tutor_rate.getAttribute("data-rate");
	var stars = single_tutor_rate.children;
	console.log(
		get_rate
	); /*  take data-rate from the DIV tutor-rate, find all svg and add the class rate_(rate) */
	if (get_rate === "5") {
		for (var i = 0; i < stars.length; i++) {
			var star = stars[i];
			star.classList.add("rate_5");
		}
	}

	if (get_rate === "4") {
		for (var i = 0; i < stars.length; i++) {
			var star = stars[i];
			star.classList.add("rate_4");
		}
	}

	if (get_rate === "3") {
		for (var i = 0; i < stars.length; i++) {
			var star = stars[i];
			star.classList.add("rate_3");
		}
	}
	if (get_rate === "2") {
		for (var i = 0; i < stars.length; i++) {
			var star = stars[i];
			star.classList.add("rate_2");
		}
	}
	if (get_rate === "1") {
		for (var i = 0; i < stars.length; i++) {
			var star = stars[i];
			star.classList.add("rate_1");
		}
	}

	if (get_rate === "0") {
		for (var i = 0; i < stars.length; i++) {
			var star = stars[i];
			star.classList.add("rate_0");
		}
	}
});

// Map marker vertical and horizontal ajustments using data-atributes
$(".map-marker").each(function () {
	var $this = $(this),
		top = $this.data("top"),
		left = $this.data("left");

	$this.css({
		top: top + "%",
		left: left + "%",
	});
	$this.css({ top: top + "%" });
});

// managing featured tutor bt data-atributes: just give data-featured to html element

$(".tutor-card").each(function () {
	var $this = $(this),
		featured = $this.data("featured"),
		featured_tutor = $this.data("featured");

	if ($this.data(featured_tutor) === "featured") {
		var tutor_img_lg = $this.find(".tutor-card-img");
		var tutor_img_sm = $this.find(".tutor-img-round");
		tutor_img_lg.append(
			"<div class='featured-banner'><p>Featured tutor</p></div>"
		);
		tutor_img_sm.append(
			"<div class='featured-banner'><p>Featured tutor</p></div>"
		);
	}
});

// CUSTOM OPTION SELECT --- find your tutor page slelctors
const selected = document.querySelectorAll(".selected");
const optionsList = document.querySelectorAll(".option");
var optionsContainer = document.querySelectorAll(".options-container");

selected.forEach(function (s) {
	s.addEventListener("click", function () {
		event.stopPropagation();
		optionsContainer.forEach(function (container) {
			container.classList.remove("active");
		});

		s.previousElementSibling.classList.toggle("active");

		// s.focus();
	});
});

optionsList.forEach((o) => {
	o.addEventListener("click", function () {
		single_option = o.querySelector("label"); //take selected label
		selected_single = o.parentElement.nextElementSibling;
		selected_single.innerHTML = single_option.innerHTML;
		selected_single.previousElementSibling.classList.remove("active");
		console.log(single_option.innerText); //give me selected label's text
	});
});

// PRICE RANGE SLIDER  OBRATI PAZNJU neznam kako da se ne deaktivira posle svakog klika

var inputLeft = document.querySelector("#input-left");
var inputRight = document.querySelector("#input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");
var from = document.querySelector(".from");
var to = document.querySelector(".to");
var tutor_search = document.querySelectorAll("#tutor_search");

window.addEventListener("load", () => {
	var page_name = location.pathname.substring(1);
	if (page_name === "tutors.html" || page_name === "tutors.php") {
		console.log("imam tutore");
		setLeftValue();
		setRightValue();
		inputLeft.addEventListener("input", setLeftValue);
		inputRight.addEventListener("input", setRightValue);

		inputLeft.addEventListener("mouseover", function () {
			thumbLeft.classList.add("hover");
		});

		inputLeft.addEventListener("mouseout", function () {
			thumbLeft.classList.remove("hover");
		});

		inputRight.addEventListener("mouseover", function () {
			thumbRight.classList.add("hover");
		});

		inputRight.addEventListener("mouseout", function () {
			thumbRight.classList.remove("hover");
		});

		inputLeft.addEventListener("mousedown", function () {
			thumbLeft.classList.add("active");
		});
		inputLeft.addEventListener("mouseup", function () {
			thumbLeft.classList.remove("active");
		});

		inputRight.addEventListener("mousedown", function () {
			thumbRight.classList.add("active");
		});
		inputRight.addEventListener("mouseup", function () {
			thumbRight.classList.remove("active");
		});
	}
});

function setLeftValue() {
	var _this = inputLeft;
	min = parseInt(_this.min);
	max = parseInt(_this.max);
	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
	var percent = ((_this.value - min) / (max - min)) * 100;
	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
	// console.log(` LEFTt: ${_this.value}`);
	from.innerHTML = `$${inputLeft.value}`;
}

function setRightValue() {
	var _this = inputRight;
	min = parseInt(_this.min);
	max = parseInt(_this.max);
	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
	var percent = ((_this.value - min) / (max - min)) * 100;
	thumbRight.style.right = 100 - percent + "%";
	range.style.right = 100 - percent + "%";
	to.innerHTML = `$${inputRight.value}`;
}

// Izgasi opcije na search parametrima za tutore
window.addEventListener("click", function (event) {
	optionsContainer.forEach(function (c) {
		c.classList.remove("active");
	});
});

// MAP

window.addEventListener("load", () => {
	var page_name = location.pathname.substring(1);

	if (
		page_name === "index.html" ||
		page_name === "index.php" ||
		page_name === ""
	) {
		const intersect = document.querySelector("#moja_mapa");
		const options = {
			root: null,
			rootMargin: "-200px 0px",
		};

		const observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach((entry) => {
				var map_markers = entry.target.children;
				if (!entry.isIntersecting) {
					return;
				}
				for (var i = 0; i < map_markers.length; i++) {
					map_markers[i].classList.add("intersecting");
				}

				observer.unobserve(entry.target);
			});
		}, options);

		observer.observe(intersect);
	}
});

// TUTOR NAV TOGGLE

var tutorNavToggle = document.querySelector(".tutor-nav-toggle");
var tutorNavUl = document.querySelector(".tutor-profile-nav ul");
var tutorNavLinks = document.querySelectorAll(".tutor-profile-nav ul li");
var tutorProfileView = document.querySelector(".tutor-profile-view");

if (tutorNavToggle) {
	tutorNavToggle.addEventListener("click", () => {
		tutorNavUl.classList.toggle("active-tutor-nav");

		tutorNavLinks.forEach(function (l) {
			l.classList.toggle("show");
			l.addEventListener("click", () => {
				event.preventDefault();

				tutorNavLinks.forEach(function (el) {
					el.classList.remove("show");
				});
				tutorNavUl.classList.remove("active-tutor-nav");
			});
		});
	});
}

// ABOUT ME

var about_me_btns = document.querySelectorAll(".lang_btn");
var about_me_content = document.querySelectorAll(".about_me_content");

about_me_btns.forEach((button) => {
	button.addEventListener("click", (b) => {
		event.preventDefault();
		about_me_btns.forEach((button) => {
			button.classList.remove("active_lang");
		});
		var data_lang = button.getAttribute("data-lang");
		var languageInput = document.querySelector(`#${data_lang}`);
		remove_about_me_content();
		button.classList.toggle("active_lang");
		languageInput.style.display = "block";
	});
});

function remove_about_me_content() {
	about_me_content.forEach((about_me) => {
		about_me.style.display = "none";
	});
}

// PAYMENT METHOD

var preffered_payment = document.querySelectorAll(".preffered_paymet span");
preffered_payment.forEach((prefered_item) => {
	prefered_item.addEventListener("click", () => {
		removePaymentActive();
		prefered_item.classList.toggle("preffered_payment_active");
	});
});

function removePaymentActive() {
	preffered_payment.forEach((prefered_item) => {
		prefered_item.classList.remove("preffered_payment_active");
	});
}

// MY MESSAGES
// Mail nav panel

var tutor_navigation = document.querySelector(".tutor-profile-nav");
// mail nav buttons

var mail_nav = document.querySelectorAll(".mail_nav ul li a");
var mail_view_all = document.querySelectorAll(".box_view");
mail_nav.forEach((button) => {
	button.addEventListener("click", (e) => {
		hideMailViews();
		removeActivMailNav();
		e.preventDefault();
		var mail_views = document.querySelector(`.${button.getAttribute("href")}`);
		button.parentElement.classList.add("active");
		mail_views.classList.remove("hide");
	});
});

// Open mail messages
var single_mail = document.querySelectorAll(".sender");
var current_mail = null;
single_mail.forEach((mail) => {
	mail.addEventListener("click", () => {
		var my_mail = mail.parentNode.childNodes[9];
		var mail_options = mail.nextElementSibling.childNodes[2];
		my_mail.classList.toggle("open");
		mail_options.classList.toggle("show_options");
		console.log(mail_options);
	});
});

// Get mail_views

var mail_options = document.querySelectorAll(".mail_options");
var editing_optins;
mail_options.forEach((mail_option) => {
	mail_option.addEventListener("click", () => {
		var editing_optins =
			mail_option.parentElement.nextElementSibling.childNodes[5];
		editing_optins.classList.toggle("open_options");
		console.log(editing_optins);
	});
});

// MAIL SELECT ALL SHOW AND HIDE

var batch_options = document.querySelectorAll(".batch_check");

// batch_options.addEventListener("click", () => {
// 	batch_toggle.classList.toggle("open_options");
// });
batch_options.forEach((option) => {
	option.addEventListener("click", () => {
		option.parentNode.childNodes[5].classList.toggle("open_options");
	});
});

function hideMailViews() {
	mail_view_all.forEach((show_box) => {
		show_box.classList.add("hide");
	});
}
// remove active on mail nav buttons
function removeActivMailNav() {
	mail_nav.forEach((b) => {
		b.parentElement.classList.remove("active");
	});
}

// MAIL OPTIONS

// STUDENT_TIME TABLE

var book_time = document.querySelectorAll(".book_time");

book_time.forEach((time) => {
	time.innerHTML = "Book";

	time.addEventListener("click", () => {
		time.classList.toggle("booked_time");
		if (time.classList.contains("booked_time")) {
			time.innerHTML = "Booked";
		} else {
			time.innerHTML = "Book";
		}
	});
});

// CALENDAR

var calendar_dates = document.querySelectorAll(".date");

calendar_dates.forEach((calendar_date) => {
	calendar_date.addEventListener("click", () => {
		if (calendar_date.classList.contains("booked")) {
			calendar_date.classList.toggle("open_date");
		}
	});
});
