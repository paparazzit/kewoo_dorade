// REVIEW page

var stars = document.querySelectorAll(".labels label");
var star_widget = document.querySelector(".star-widget");
var review_form = document.querySelector(".star-widget form");
var text_review = document.querySelector(".textarea textarea");
var post_btn = document.querySelector(".star-widget .btn");
var review_wrapper = document.querySelector(".review__wrapper .post");
var review_headline = document.querySelector(".star-widget h4");
var your_review = document.querySelector(".your_review");
var edit_btn = document.querySelector(".edit");

var review_name_out = document.querySelector(".review_name_out");
var review_content_out = document.querySelector(".review_content_out");

var review_name = document.querySelector(".review_name input");
var text_area = document.querySelector(".textarea textarea");

stars.forEach((star) => {
	star.addEventListener("click", () => {
		console.log(star);
		review_form.style.display = "block";
	});
});

post_btn.addEventListener("click", () => {
	review_wrapper.style.display = "block";
	review_form.style.display = "none";
	review_headline.style.display = "none";
	star_widget.style.padding = "20px 0 0 0";
	review_content_out.innerHTML = text_area.value;
	review_name_out.innerHTML = review_name.value;
});

edit_btn.addEventListener("click", () => {
	review_wrapper.style.display = "none";
	review_form.style.display = "block";
	review_headline.style.display = "block";
});
