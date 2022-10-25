$(document).ready(function () {
    $("#menu__btn").click(function () {
        $(this).toggleClass();
        $("nav ul").toggleClass("nav__toggle");
    });
});