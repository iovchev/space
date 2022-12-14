window.addEventListener('DOMContentLoaded', () => {

//init AOS.js
AOS.init({
	once: true,
});

	// select
let selects = document.querySelectorAll('.select');
let selectScript = function (select) {
    select.forEach((item) => {
        const selectCurrent = item.querySelector(".select__current");
        item.addEventListener("click", (event) => {
            const el = event.target.dataset.choice;
            const text = event.target.innerText;
            if (el === "choosen" && selectCurrent.innerHTML !== text) {
                selectCurrent.innerText = text;
            }
            item.classList.toggle("is-active");
        });
        document.addEventListener("click", function (event) {
            if (!item.contains(event.target)) {
                item.classList.remove("is-active");
            }
        });
				document.addEventListener("scroll", function (event) {
					if (!item.contains(event.target)) {
							item.classList.remove("is-active");
					}
			});
    });
}
selectScript(selects);

	// burger menu
	const burger = (burgerSelector, menuSelector, bodySelector, overlaySelector) => {
		const burger = document.querySelector(burgerSelector),
					menu = document.querySelector(menuSelector),
					overlay = document.querySelector(overlaySelector),
					body = document.querySelector(bodySelector);
		const toggleMenu = () => {
					burger.classList.toggle("active");
					menu.classList.toggle("active");
					if(menu.classList.contains('active')) {
						overlay.classList.add('active');
						body.classList.add('fix-scroll');
					} else {
						body.classList.remove('fix-scroll');
						overlay.classList.remove('active');
					}
		};
		burger.addEventListener("click", (e) => {
			e.stopPropagation();
	
			toggleMenu();
		});
		document.addEventListener("click", (e) => {
			let target = e.target;
			let itsMenu = target == menu || menu.contains(target);
			let itsBurger = target == burger;
			let activeMenu = menu.classList.contains("active");
			if (!itsMenu && !itsBurger && activeMenu) {
				toggleMenu();
			}
		});
		window.addEventListener('resize', () => {
			if(window.screen.availWidth > 992) {
				menu.classList.remove("active");
				burger.classList.remove("active");
			}
		});
	};
	burger ('.burger', '.mobile-menu', 'html', '.overlay');


	let scrolled;
	let timer;
	const btn = document.querySelector('.pageup');
	btn.addEventListener('click', function() {
		scrolled = window.pageYOffset;
		scrollToTop();
	});
	window.onscroll = function showHide() {
		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
			btn.style.transform = 'scale(1)';
		}
		else {
			btn.style.transform = 'scale(0)';
		}
	}
	function scrollToTop() {
		if(scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled -= 30;
			timer = setTimeout(scrollToTop, 1);
		} else  {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}

	//sticky scroll btn
	$(window).scroll(function() {
		var $button = $('.pageup');
				if($(window).scrollTop() + $(window).height() < $(document).height() - $(".footer").height()) {
					$button.css("position","fixed");    //resetting it
					$button.css("bottom","100px"); //resetting it
				}
				if($(window).scrollTop() + $(window).height() - 100 > $(document).height() - $(".footer").height()) {
					
				let heightFooter = $(".footer").height();
				$button.css("position","fixed"); // make it related
				$button.css("bottom", heightFooter); 
				}
			});

	//sticky header
	const stickyHeader = () => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
				document.querySelector('.header').classList.add('fix');
			}
			else {
				document.querySelector('.header').classList.remove('fix');
			}
		})
	}
	stickyHeader();

	$('.slider-problems').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 2,
			}, 
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	
	$('.slider-brands').slick({
		dots: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}, 
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 578,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	
	$('.slider-commands').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1350,
			settings: {
				slidesToShow: 3,
			}, 
		},{
			breakpoint: 1099,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
	

});