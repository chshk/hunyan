$(function () {
    //联系方式
    $(".headline .h_c div").on("mouseenter", function () {
        // console.log($(this).children("a"));
        $(this).children("a").children("span")
            .css({
                "color": "yellow"
            }).prevAll().css("color", "yellow")
    })
    $(".headline .h_c div").on("mouseleave", function () {
        // console.log($(this).children("a"));
        $(this).children("a").children("span")
            .css("color", "#fff").prevAll().css("color", "#fff")
    })

    //最新动态鼠标经过的事件
    $(".news_Action_c dl").on("mouseenter", function () {
        $(this).find("dt").addClass("onimg");
        $(this).find("h4").addClass("onclass");
    })

    $(".news_Action_c dl").on("mouseleave", function () {
        $(this).find("dt").removeClass("onimg");
        $(this).find("h4").removeClass("onclass");
    })



    //客片大赏滑入的鼠标经过滑入的事件
    $(".loveShow_c ul li").on("mouseenter", function () {
        $(this).children("div").stop().animate({
            top: 0
        }, 400)
    }).on("mouseleave", function () {
        $(this).children("div").stop().animate({
            top: -335
        }, 400)
    })

    //微电影滑入的事件
    $(".movie_c_list a").on("mouseenter", function () {
        $(this).children("div:eq(1)").stop().animate({
            top: 0
        }, 500)
    }).on("mouseleave", function () {
        $(this).children("div:eq(1)").stop().animate({
            top: -240
        }, 500)
    })

    //导航栏
    var navArr = ["HOME", "ABOUT", "SHOW CASE", "LOVE SHOW", "NEWS", "SERVICE", "CONTACT", "ORDERS"];
    var navArr2 = ["首页", "关于我们", "作品展示", "客片大赏", "新闻中心", "服务报价", "联系我们", "在线订单"];
    $(".nav .nav_c .n_c_right ul li").children(".home_f").css("color", "red");
    var len = $(".nav .nav_c .n_c_right>ul>li").length;
    // console.log(len);
    $(".nav .nav_c .n_c_right>ul>li").on("mouseenter", function () {
        $(this).children("a").text(navArr[$(this).index()]);
        $(this).children("a").css("color", "red");
        $(this).children("ul").stop().slideDown();
    })
    $(".nav .nav_c .n_c_right ul li").on("mouseleave", function () {
        $(this).children("a").text(navArr2[$(this).index()]);
        $(this).children("a").css("color", "#666");
        $(".nav .nav_c .n_c_right ul li").children(".home_f").css("color", "red");
        $(this).children("ul").stop().slideUp();
    })

})

//首次广告
$(function () {
    $(".close_ico").click(function () {
        close_all();
    })
    $(".right_bd").click(function () {
        show_all();
    })
    $(".right_center").click(function () {
        show_all();
    })
    $(".text_1").click(function () {
        show_all();
    })
    $(".text_2").click(function () {
        show_all();
    })

    $(".submit_button").click(function () {
        var _length = $(".input_text").val().length;
        if (_length != 11) {
            alert("请填写联系方式");
            return;
        };
        $.ajax({
            type: "POST",
            url: "",
            data: { phone_num: $('.input_text').val() },
            dataType: "JSON",
            success: function (data) {
                window.location.href = '';
            }
        });
    });

    function close_all() {
        $(".tc_bg").hide();
        $(".img_bg").hide();
        $(".xe_1").hide();
        $(".xe_2").hide();
        $(".xe_3").hide();
        $(".div_input_text").hide();
        $(".submit_button").hide();
        $(".close_ico").hide();
    }
    function show_all() {
        $(".tc_bg").show();
        $(".img_bg").show();
        $(".xe_1").show();
        $(".xe_2").show();
        $(".xe_3").show();
        $(".div_input_text").show();
        $(".submit_button").show();
        $(".close_ico").show();
    }
})

