{
    let ul = $("#keywords");
    $("document").ready(function () {
        //更换iframe
        $("[lkh-update]").on("click", function () {
            if (ul[0].src === "http://localhost:59058/Keyword1") {
                ul[0].src = "http://localhost:59058/Keyword2";
            } else {
                ul[0].src = "http://localhost:59058/Keyword1";
            }
        });
        //获取坐标
        $("#coord").on("mousemove", function (e) {
            x = e.clientX;
            y = e.clientY;
            $("#size")[0].innerHTML = `坐标: ("${x}","${y}")`;
        });
        $("#coord").on("mouseout", function () {
            $("#size")[0].innerHTML = ``;
        });

    });
}


