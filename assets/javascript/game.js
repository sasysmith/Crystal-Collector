var target = 0;
var yourNum = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {

    function startUp() {

        $("#score_area").text(yourNum);
        $("#random_number").text(target);
        $("#games_won").text(wins);
        $("#games_lost").text(losses);

    };

    function generateRandomNumber() {
        target = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#random_number").html(target)
    };

    $("#green_rupee").on("click", function () {
        yourNum = greenRupee;
        var greenRupee = Math.floor(Math.random() * (12 - 1));
        $("#score_area").html(yourNum);
        check();
    });

    $("#blue_rupee").on("click", function () {
        yourNum = blueRupee;
        var blueRupee = Math.floor(Math.random() * (12 - 1));
        $("#score_area").html(yourNum);
        check();
    });

    $("#red_rupee").on("click", function () {
        yourNum = redRupee;
        var redRupee = Math.floor(Math.random() * (12 - 1));
        $("#score_area").html(yourNum);
        check();
    });

    $("#purple_rupee").on("click", function () {
        yourNum = purpleRupee;
        var purpleRupee = Math.floor(Math.random() * (12 - 1));
        $("#score_area").html(yourNum);
        check();
    });

    function check() {

        if (yourNum > target) {
            alert("You Lose!");
            losses++;
            $("#games_lost").text(losses);
            target = 0;
            yourNum = 0;
            startUp();
            start();

        } else if (yourNum == target) {
            alert("You Win!")
            wins++;
            $("#games_won").text(wins);
            target = 0;
            yourNum = 0;
            startUp();
            start();
        }
    }

    startUp();

});