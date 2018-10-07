//计算作业平均数
// http://121.42.236.205/Task_Result/report?classid=41&studentid=562
// 练习题
var score_d = 0;
var day = 0;
// 周测试
var score_w = 0;
var week = 0;
// 起止时间
var starTime = "2017年10月24日";
var $tr = $(".tablelist tbody tr");
var startIndex;
$tr.find('td:eq(0)').each(function(index) {
    var flag = $(this).is(":contains('" + starTime + "')");
    if (flag) {
        startIndex = index;
    }
});
var $td = $tr.find("td:eq(1)").slice(startIndex);
$td.each(function(i) {
    var num = parseFloat($(this).parent().find("td:eq(3)").text());
    var type = $(this).is(":contains('周测试')");
    if (type) {
        if (num > 0) {
            score_w += num;
            week++;
        }
    } else {
        if (num > 0) {
            score_d += num;
            day++;
        }
    }

});
console.log("练习题平均分：" + score_d / day);
console.log("周测试平均分：" + score_w / week);