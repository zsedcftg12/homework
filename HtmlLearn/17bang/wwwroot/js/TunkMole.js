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
    score = 0;
$("document").ready(function () {
    GameBegin()
    function GameBegin() {
        $("[lkh-game-go]").on("click", function () {
            inProgress = true;
            //输入ID进行游戏否则取消开始游戏
            let input = prompt("请输入您这局游戏的ID");
            if (input != null) {
                //延迟一秒开始执行，出现地鼠
                setTimeout(function () {
                    RemainTime();
                    GameHaveInHand();
                }, 1000);
            } else {
                alert("已取消开始游戏");
            }
        });
    }
    function RemainTime() {
        //总是从120秒开始计时
        let time = 200;
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
        //停止倒计时
        clearInterval(cutDown);
        //停止地鼠出现
        clearInterval(molesShow);
        //弹出结束游戏对话框
        $('.gameover').modal("toggle");
    }
    function GameHaveInHand() {
        molesShow = setInterval(function () {
            //随机显示地鼠
            AriseMole()

        }, 2500); //此处调整每只地鼠出现的间隔
    }
    function AriseMole() {
        AriseMoleJudge()
    }
    function AriseMoleJudge() {
        let RandoMariseHole = Math.floor(Math.random() * 9 + 1);
        let RandoMariseMole = Math.floor(Math.random() * 27 + 1);
        if (RandoMariseMole <= 9) {
            AriseMoleLovelyEvent(RandoMariseHole)
        } else if (RandoMariseMole > 9 && RandoMariseMole <= 18) {
            AriseMoleBadEvent(RandoMariseHole)
        } else if (RandoMariseMole > 18 && RandoMariseMole <= 27) {
            AriseMoleMineEvent(RandoMariseHole)
        } else {
            throw "随机数错误"
        }
        DelectCartoon(RandoMariseHole)
    }
    function AriseMoleLovelyEvent(RandoMariseHole) {
        //随机数9以下随机洞口出现萌地鼠
        $(`[lkh-clay="${RandoMariseHole}"`).after(`<img src="/images/萌地鼠.png" class="lovable-mole" lkh-lovaly-score/>`);

        $("[lkh-lovaly-score]").on("click", function () {
            score++;
            $("#score")[0].innerText = `您的得分:${score}`;
        });
    }
    function AriseMoleBadEvent(RandoMariseHole) {
        //随机数18以下9以上随机洞口出现坏地鼠
        $(`[lkh-clay="${RandoMariseHole}"`).after(`<img src="/images/坏地鼠.png" class="lovable-mole" lkh-bad-score />`);
        $("[lkh-bad-score]").on("click", function () {
            score--;
            $("#score")[0].innerText = `您的得分:${score}`;
        })
    }
    function AriseMoleMineEvent(RandoMariseHole) {
        //随机数27以下18以上随机洞口出现地雷
        $(`[lkh-clay="${RandoMariseHole}"`).after(`<img src="/images/地雷.png" class="lovable-mole" lkh-mine-score />`);
        $("[lkh-mine-score]").on("click", function () {
            GameOver()
        })
    }
    function DelectCartoon(RandoMariseHole) {
        setTimeout(function () {
            $(`[lkh-clay="${RandoMariseHole}"`).next().remove();
        }, 3000);
    }













});