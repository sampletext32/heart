const heartuptimer = setInterval(heartup, 200);

function heartup() {
    $(".heart").css("font-weight", "900");
}

const heartdowntimer = setInterval(heartdown, 500);

function heartdown() {
    $(".heart").css("font-weight", "100");
}
