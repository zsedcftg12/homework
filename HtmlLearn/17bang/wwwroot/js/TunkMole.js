/**测试用例：
 * random = 5 j = 9  =====================>  "lovely-mole"
 * random = 0 j = 1  =====================>  "错误不存在0"
 * random = 17 j = 9  =====================>  "lovely-mole"
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */

let inProgress = false,
    cutDown = false,
    molesShow = false,
    cartoon = false,
    primary = true,
    difficult = true,
    nightmare = true,
    score = 0,
    time = 120,
    frequency = 3000,
    inputName,
    DefaultClass,
    PrimaryClass,
    DifficultClass,
    NightmareClass,
    mode = $("#GameMode");
$("document").ready(function () {
    //游戏开始按钮
    $("[lkh-game-go]").on("click", function GameBegin() {
        inProgress = true;
        inputName = prompt("请输入您这局游戏的ID");
        if (inputName != null) {
            if (inputName === "") {
                $("#UserName")[0].innerText = `本局名称:无名小卒`;
            } else {
                $("#UserName")[0].innerText = `本局名称:${inputName}`;
            }
            //加载背景音乐，删除开始按钮，显示背景音乐的开关，设置默认难度
            $("#background")[0].play();
            $("[lkh-game-go]").remove();
            $("[lkh-game-music-on]").css("display", "block");
            $("[lkh-game-music-off]").css("display", "block");
            mode[0].innerText = "简单";
            //倒计时并开始出现地鼠
            RemainTime();
            AriseMole();
            //玩家取消则不运行游戏
        } else {
            alert("已取消开始游戏");
        }
    });
    //背景音乐开关
    $("[lkh-game-music-off]").on("click", function () {
        $("#background")[0].play();
    })
    $("[lkh-game-music-on]").on("click", function () {
        $("#background")[0].pause();
    })
    //鼠标敲击样式
    $("html").on("mouseup", function (event) {
        event.preventDefault();
        $("html").css("cursor", `url("/images/锤子.png") 12 45, auto`);
    });
    $("html").on("mousedown", function (event) {
        event.preventDefault();
        $("html").css("cursor", `url("/images/锤子敲下.png") 12 45, auto`);
    });

});
//倒计时
function RemainTime() {
    cutDown = setInterval(function () {
        time--;
        if (time > -1) {
            $("#remain-time")[0].innerText = time;
        } else {
            //时间小于或等于0时调用GameOver函数
            GameOver();
        }
    }, 1000)
}
function GameOver() {
    //停止倒计时和地鼠的出现，弹出模态框
    clearInterval(cutDown);
    clearInterval(molesShow);
    $(".gameover").modal();
    //检查是否破纪录,前十次无需检查
    //RankingList()
}
//排行榜
//function RankingList() {
//    let rank = JSON.parse(localStorage.getItem("rank")),
//        arr = [];
//    for (var j = 0; j < rank.length; j++) {
//        arr[j] = rank[j]
//    }
//    for (var i = 0; i < arr.length; i++) {
//        if (score > arr[i].score) {
//            arr.push({ name: `${inputName}`, score })
//            arr.sort(function (a, b) {
//                return a < b ? 1 : -1;
//            })
//            arr.length = 10;
//        }
//    }

//}
//出现地鼠
function AriseMole() {
    molesShow = setInterval(function () {
        //地鼠从9个洞口中出现的随机数
        let RandoMariseHole = Math.floor(Math.random() * 9 + 1),
            //地鼠的四个随机出现的类型
            MoleChance = Math.floor(Math.random() * 4 + 1);
        //进入判断游戏当前难度
        GameMode(RandoMariseHole, MoleChance);

    }, frequency); //此处调整每只地鼠出现的间隔
}
//判断游戏模式
function GameMode(RandoMariseHole, MoleChance) {
    ChangeMode();
    switch (mode[0].innerText) {
        case "简单":
            SimpleMode(RandoMariseHole);
            break;
        case "初级":
            PrimaryMode(RandoMariseHole, MoleChance);
            break;
        case "困难":
            DifficultMode(RandoMariseHole, MoleChance);
            break;
        case "噩梦":
            NightmareMode(RandoMariseHole, MoleChance);
            break;
        default:
            throw "游戏难度错误";
    }
}
//萌地鼠
function AriseMoleLovelyEvent(RandoMariseHole, operation, Class) {
    //添加地鼠的图片,动画,事件，音效
    $(`[lkh-clay="${RandoMariseHole}"`).after(`<img src="/images/萌地鼠.png" class=${Class} 
       lkh-lovaly-score/>`);
    $("#appear")[0].play();
    //只允许点击一次地鼠
    let astrict = true;   
    $("[lkh-lovaly-score]").on("click", function () {
        if (astrict) {
            astrict = false;
            $("#spring")[0].play();
            $("#score")[0].innerText = `您的得分:${score += operation}`;
            $(this).attr("src", "/images/哭地鼠.png");
            //每加一分游戏时间加5秒
            time += operation * 5
        }
    });
    //删除地鼠的结束动画
    Clean(RandoMariseHole);
}
//坏地鼠
function AriseMoleBadEvent(RandoMariseHole, operation, Class) {
    //添加地鼠的图片,动画,事件，音效
    $(`[lkh-clay="${RandoMariseHole}"`).after(`<img src="/images/坏地鼠.png" class=${Class}
       lkh-bad-score  />`);
    $("#appear")[0].play();
    //只允许点击一次地鼠
    let astrict = true;
    $("[lkh-bad-score]").on("click", function () {
        if (astrict) {
            astrict = false;
            $("#tunk")[0].play();
            $("#score")[0].innerText = `您的得分:${score -= operation}`;
            $(this).attr("src", "/images/晕地鼠.png");
        }
    })
    //删除地鼠的结束动画
    Clean(RandoMariseHole);
}
//地雷
function AriseMoleMineEvent(RandoMariseHole, Class) {
    $(`[lkh-clay="${RandoMariseHole}"`).after(`<img src="/images/地雷.png" class=${Class}
       lkh-mine-score/>`);
    $("#appear")[0].play();
    //击中地雷结束游戏
    $("[lkh-mine-score]").on("click", function () {
        $("#boom")[0].play()
        $(this).parent().append('<img src="/images/爆炸.png" class="Mine">');
        GameOver();
    })
    //删除地鼠的结束动画
    Clean(RandoMariseHole);
}
//删除动画
function Clean(RandoMariseHole) {
    //if ($(`.lovable-mole`).length > 9) {
    //    $(`[lkh-clay="${RandoMariseHole}"`).next().remove();
    //}
    //动画结束后删除地鼠
    cartoon = setTimeout(function () {
        $(`[lkh-clay="${RandoMariseHole}"`).next().remove();
    }, frequency);
}
//简单难度
function SimpleMode(RandoMariseHole) {
    //击中地鼠加分
    let simple = 1;
    //不同模式下的地鼠css
    DefaultClass = "lovable-mole"
    AriseMoleLovelyEvent(RandoMariseHole, simple, DefaultClass);
}
//初级难度
function PrimaryMode(RandoMariseHole, MoleChance) {
    //击中地鼠加分
    let Primary = 2;
    //初级难度下地鼠出现的频率
    frequency = 2500;
    //不同模式下的地鼠css
    PrimaryClass = "lovable-mole-Primary";
    switch (MoleChance) {
        case 1:
            AriseMoleLovelyEvent(RandoMariseHole, Primary, PrimaryClass);
            break;
        case 2:
            AriseMoleLovelyEvent(RandoMariseHole, Primary, PrimaryClass);
            break;
        case 3:
            AriseMoleLovelyEvent(RandoMariseHole, Primary, PrimaryClass);
            break;
        case 4:
            AriseMoleBadEvent(RandoMariseHole, Primary, PrimaryClass)
            break;
        default:
            throw "初级难度错误";
    }


}
//困难难度
function DifficultMode(RandoMariseHole, MoleChance) {
    //击中地鼠加分
    let Difficult = 4;
    //初级难度下地鼠出现的频率
    frequency = 1500;
    //不同模式下的地鼠css
    DifficultClass = "lovable-mole-Difficult";
    switch (MoleChance) {
        case 1:
            AriseMoleLovelyEvent(RandoMariseHole, Difficult, DifficultClass);
            break;
        case 2:
            AriseMoleLovelyEvent(RandoMariseHole, Difficult, DifficultClass);
            break;
        case 3:
            AriseMoleBadEvent(RandoMariseHole, Difficult, DifficultClass)
            break;
        case 4:
            AriseMoleMineEvent(RandoMariseHole, DifficultClass)
            break;
        default:
            throw "困难难度错误";
    }

}
//噩梦难度
function NightmareMode(RandoMariseHole, MoleChance) {
    //击中地鼠加分
    let Nightmare = 8;
    //初级难度下地鼠出现的频率
    frequency = 750;
    //不同模式下的地鼠css
    NightmareClass = "lovable-mole-Nightmare";
    switch (MoleChance) {
        case 1:
            AriseMoleLovelyEvent(RandoMariseHole, Nightmare, NightmareClass);
            break;
        case 2:
            AriseMoleBadEvent(RandoMariseHole, Nightmare, NightmareClass);
            break;
        case 3:
            AriseMoleBadEvent(RandoMariseHole, Nightmare, NightmareClass);
            break;
        case 4:
            AriseMoleMineEvent(RandoMariseHole, NightmareClass);
            break;
        default:
            throw "噩梦难度错误";
    }
}
//改变游戏难度
function ChangeMode() {
    if (score >= 5 && primary) {
        //大于5分且是第一次大于5就改为false
        primary = false;
        mode[0].innerText = "初级";
        //清除原来地鼠出现的频率重新取值
        clearInterval(molesShow);
        AriseMole();
        //清除原来地鼠消失的频率重新取值
        clearInterval(cartoon);

    } else if (score >= 15 && difficult) {
        //大于15分且是第一次大于15就改为false
        difficult = false;
        mode[0].innerText = "困难";
        clearInterval(molesShow);
        AriseMole();
        clearInterval(cartoon);
    } else if (score >= 100 && nightmare) {
        //大于100分且是第一次大于100就改为false
        nightmare = false;
        mode[0].innerText = "噩梦";
        clearInterval(molesShow);
        AriseMole();
        clearInterval(cartoon);
    } else {
        //否则什么都不做
    }
}