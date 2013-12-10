$(document).ready(function () {
    $("p.a1").hide();
    $("p.a2").hide();
    $("p.a3").hide();
    $("p.a4").hide();
    $("p.a5").hide();

    $("h3.q1").click(function () {
        $("p.a1").toggle();
    });
    $("h3.q2").click(function () {
        $("p.a2").toggle();
    });
    $("h3.q3").click(function () {
        $("p.a3").toggle();
    });
    $("h3.q4").click(function () {
        $("p.a4").toggle();
    });
    $("h3.q5").click(function () {
        $("p.a5").toggle();
    });
});