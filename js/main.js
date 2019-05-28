(() => {
    // Changes CSS on the Nav based off window resizing
    $(window).resize(() => {
        if ($(window).width() > 570) {
            $("#nav-compact").css("display", "flex");
        } else if ($(window).width() <= 570) {
            $("#nav-compact").css("display", "none");
        }
    });

    // Dropdown menu
    $("div.menu").click(() => {
        if ($("#nav-compact").css("display") == "none") {
            $("#nav-compact").css("display", "flex");
        } else if ($("#nav-compact").css("display") == "flex") {
            $("#nav-compact").css("display", "none");
        }
    });

})();