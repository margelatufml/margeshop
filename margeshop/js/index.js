const pop_up = document.querySelector('.pop_up');
const btn_cookie = document.querySelectorAll('.btn_btn_secondary');
const overlay = document.querySelector('.overlay');
window.addEventListener('load', function () {
    pop_up.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

btn_cookie[0].addEventListener('click', function () {
    pop_up.classList.add("hidden");
    overlay.classList.add("hidden");
});
btn_cookie[1].addEventListener('click', function () {
    pop_up.classList.add("hidden");
    overlay.classList.add("hidden");
});
overlay.addEventListener('click', function () {
    overlay.classList.add("hidden");
});
document.addEventListener('click', function () {
    pop_up.classList.add("hidden");
    overlay.classList.add("hidden");
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.navbar').css('position', 'fixed').css('top', '0px');
    } else {
        $('.navbar').css('position', 'relative').css('top', '0px');
    }
});