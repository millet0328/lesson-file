var j = 0;

$(document).ready(function() {
    var game = document.getElementById("gamediv");
    //设置定时器 第一个参数代表方法 第二个每多长时间执行一次
    setInterval(function() {
        //0-8随机选取一个
        var x = Math.random() * 8;
        //取整
        x = Math.round(x);
        var image = game.children[x];
        image.src = "img/2.png";

        x = Math.random() * 8;
        x = Math.round(x);
        image = game.children[x];
        image.src = "img/5.jpg";
    }, 1000);
});

function beat(obj) {
    var strsrc = obj.src;
    //	判断字符串的第五个字符是不是2
    if (strsrc.charAt(strsrc.length - 5) == "2") {
        obj.src = "img/5.jpg";
        j = j + 1;
    }
    document.getElementById("score").innerHTML = "得分：" + j;
}