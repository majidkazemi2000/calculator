/*
    create by majidkazemi
    github ==> www.github.com/majidkazemi2000
 */

$(document).ready(function () {
    var margin = ($(window).height()-600)/2;
    $("#calculator").css({
        'marginTop':margin,
        'marginBottom':margin
    });




    var val = 0;
    var oper = "";
    var val2 = 0;

    $("#nine").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 9;
            $("#text").text("9");
        }else{
            $("#text").append("9");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#eight").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 8;
            $("#text").text("8");
        }else{
            $("#text").append("8");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#seven").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 7;
            $("#text").text("7");
        }else{
            $("#text").append("7");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#six").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 6;
            $("#text").text("6");
        }else{
            $("#text").append("6");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#five").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 5;
            $("#text").text("5");
        }else{
            $("#text").append("5");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#four").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 4;
            $("#text").text("4");
        }else{
            $("#text").append("4");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#three").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 3;
            $("#text").text("3");
        }else{
            $("#text").append("3");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#two").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 2;
            $("#text").text("2");
        }else{
            $("#text").append("2");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#one").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 1;
            $("#text").text("1");
        }else{
            $("#text").append("1");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#zero").click(function () {
        var s = $("#text").text();
        if (s == "0"){
            val = 0;
            $("#text").text("0");
        }else{
            $("#text").append("0");
            if (s.includes(".")){
                val = parseFloat($("#text").text());
            }else{
                val = parseInt($("#text").text());
            }
        }
    })
    $("#dat").click(function () {
        var s = $("#text").text();
        if (!s.includes(".")){
            if (s == "0"){
                val = 0;
                $("#text").text("0.");
            }else{
                $("#text").append(".");
                if (s.includes(".")){
                    val = parseFloat($("#text").text());
                }else{
                    val = parseInt($("#text").text());
                }
            }
        }

    })


    var x1 = 0;
    $("#plus").click(function () {
        var g = $("#text").text();
        if (g.includes(".")){
            val = parseFloat(g);
            x1 = val;
        }else{
            val = parseInt(g);
            x1 = val;
        }
        x1 = val;
        oper = "plus";
        $("#text").text("");
    })
    $("#minus").click(function () {
        var g = $("#text").text();
        if (g.includes(".")){
            val = parseFloat(g);
            x1 = val;
        }else{
            val = parseInt(g);
            x1 = val;
        }
        x1 = val;
        oper = "minus";
        $("#text").text("");
    })
    $("#multiplication").click(function () {
        var g = $("#text").text();
        if (g.includes(".")){
            val = parseFloat(g);
            x1 = val;
        }else{
            val = parseInt(g);
            x1 = val;
        }
        x1 = val;
        oper = "multiplication";
        $("#text").text("");
    })
    $("#division").click(function () {
        var g = $("#text").text();
        if (g.includes(".")){
            val = parseFloat(g);
            x1 = val;
        }else{
            val = parseInt(g);
            x1 = val;
        }
        x1 = val;
        oper = "division";
        $("#text").text("");
    })
    $("#remaining").click(function () {
        var g = $("#text").text();
        if (g.includes(".")){
            val = parseFloat(g);
            x1 = val;
        }else{
            val = parseInt(g);
            x1 = val;
        }
        x1 = val;
        oper = "remaining";
        $("#text").text("");
    })

    $("#clear").click(function () {
        $("#text").text("0");
        val = 0;
        x1 = 0;
        val2 = "";
        oper = "";
    })
    $("#result").click(function () {
        val2 = $("#text").text();
        if (oper != "" && x1 != "" && val2 != "" && val2 != "0."){
            if (val2.includes(".")){
                val2 = parseFloat(val2);
            }else{
                val2 = parseInt(val2);
            }
            switch (oper) {
                case "plus":
                    $("#text").hide();
                    $("#text").show('blind');
                    $("#text").text(x1+val2);
                    break;
                case "minus":
                    $("#text").hide();
                    $("#text").show('blind');
                    $("#text").text(x1 - val2);
                    break;
                case "multiplication":
                    $("#text").hide();
                    $("#text").show('blind');
                    $("#text").text(x1 * val2);
                    break;

                case "division":
                    $("#text").hide();
                    $("#text").show('blind');

                    if (val2 != 0){
                        $("#text").text(x1 / val2);
                    }else{
                        $("#text").text("ERROR");
                        setTimeout(function () {
                            $("#text").text("0");
                            x1 = 0;
                            val = 0;
                            val2 = "";
                            oper = "";
                        },1000);
                    }
                    break;
                case "remaining":
                    $("#text").hide();
                    $("#text").show('blind');
                    $("#text").text(x1 % val2);
                    break;
                default:
                    break;
            }
        }
    })



})