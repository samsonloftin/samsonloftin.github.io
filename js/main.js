(function navMenu() {
    let compact = $("#nav-compact");

    $(".menu").click(() => {
        console.log(compact);
        if (compact.css("display") == "none") {
            compact.css("display", "flex");
        } else if (compact.css("display") == "flex") {
            compact.css("display", "none");        }
    });
}());