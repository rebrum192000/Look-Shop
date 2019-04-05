$(function () {
    $(".page-main__good").slice(0, 4).show();
    $("#add").on('click', function (e) {
        e.preventDefault();
        $(".page-main__good:hidden").slice(0, 4).slideDown();
        if ($(".page-main__good:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function () {
    $(".bags-add").slice(0, 4).show();
    $("#addb").on('click', function (e) {
        e.preventDefault();
        $(".bags-add:hidden").slice(0, 4).slideDown();
        if ($(".bags-add:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function () {
$(".page-main__title-button").click(function() {
e = $(this).closest('.page-main__hot').find('.page-main__hide');
    if(!e.is(':visible')) {
    $('.page-main__hide').hide();
    e.show();
}
});
});

$(function () {
$(".page-header__menu-button").click(function() {
e = $(this).closest('.page-header__nav').find('.page-nav__menu-hide');
    if(!e.is(':visible')) {
    $('.page-nav__menu-hide').hide();
    e.show();
}
});
});