$('.my_price').click(function () {
        $('.alert_ty').height($('.bj_content').height());
        $('.alert_ty').bind("touchmove", function (e) {
            e.preventDefault();
        })
        //获取当前页面的滚动距离顶部高度
        var h = $(window).scrollTop();
        var pe = parseInt(h) + $('.alert_ty').height() / 10;
        $('.alert_ty_content').css('top', pe);
        $('.alert_ty').show();
    })
    //中奖
    $('.btn_zj').click(function () {
        $('.alert_ty_2').height($('.bj_content').height());
        $('.alert_ty_2').bind("touchmove", function (e) {
            e.preventDefault();
        })
        //获取当前页面的滚动距离顶部高度
        var h = $(window).scrollTop();
        var pe = parseInt(h) + $('.alert_ty_2').height() / 10;
        $('.alert_ty_content_2').css('top', pe);
        $('.alert_ty_2').show();
    })
    //未中奖
    $('.btn_wzj').click(function () {
        $('.alert_ty_3').height($('.bj_content').height());
        $('.alert_ty_3').bind("touchmove", function (e) {
            e.preventDefault();
        })
        //获取当前页面的滚动距离顶部高度
        var h = $(window).scrollTop();
        var pe = parseInt(h) + $('.alert_ty_3').height() / 5;
        $('.alert_ty_content_3').css('top', pe);
        $('.alert_ty_3').show();
    })
    $('.btn_close').click(function () {
        $('.alert_ty,.alert_ty_3').hide();
    });

$('.btn_lq').click(function (){
	$('.alert_ty_2').css('display','none');
});

var changes=3;//初始抽奖机会
var index = 1;
var lottery = {
        index: 0, //当前转动到哪个位置，起点位置
        count: 0, //总共有多少个位置
        timer: 0, //setTimeout的ID，用clearTimeout清除
        speed: 30, //初始转动速度
        times: 0, //转动次数
        cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: 6, //中奖位置
        init: function (id) {
            if ($("#" + id).find(".lottery-unit").length > 0) {
                $lottery = $("#" + id);
                $units = $lottery.find(".lottery-unit");
                this.obj = $lottery;
                this.count = $units.length;
                $('.time_number').html('还剩'+changes+'次机会');
            }
            ;
        },

        roll: function () {
            var index = this.index;
            var count = this.count;
            var lottery = this.obj;
            $(lottery).find(".lottery-unit-" + index).removeClass("active");
            index += 1;
            if (index > count - 1) {
                index = 0;
            }
            ;
            $(lottery).find(".lottery-unit-" + index).addClass("active");
            this.index = index;
            
            return false;
        },
        stop: function (index) {
            this.prize = index;

            return false;
        }
    };

    function roll() {
        lottery.times += 1;
        lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
        if (lottery.times > lottery.cycle + 10  && lottery.prize == lottery.index) {
            clearTimeout(lottery.timer);
            lottery.prize = -1;
            lottery.times = 0;
            click = false;
            console.log('中奖结束');
            $('.time_number').html('还剩'+changes+'次机会');
            if(index == 0){
            	$('.alert_ty_3').css('display','block');
            	$('#world').html('恭喜您中啦京东卷500元！');
            }else if(index == 1){
            	$('.alert_ty_3').css('display','block');
            	$('#world').html('下次一定中，再接再厉');
            }else if(index == 2){
            	$('.alert_ty_3').css('display','block');
            	$('#world').html('恭喜您中啦实物黄金豆！');
            }else if(index == 3){
            	$('.alert_ty_3').css('display','block');
            	$('#world').html('恭喜您中拉500苏银豆！');
            }else if(index == 4){
            	
            }else if(index == 5){
            	$('.alert_ty_3').css('display','block');
            	$('#world').html('下次一定中，再接再厉');
            }else if(index == 6){
            	
            }else if(index == 7){
            	$('.alert_ty_2').css('display','block');
            }
        } else {

            if (lottery.times < lottery.cycle) {
                lottery.speed -= 10;
            } else if (lottery.times == lottery.cycle) {
                lottery.prize = index;
            } else {

                if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
                    lottery.speed += 110;
                } else {
                    lottery.speed += 20;
                }

            }
            if (lottery.speed < 40) {
                lottery.speed = 40;
            }

           // console.log(lottery.times + '^^^^^^' + lottery.speed + '^^^^^^^' + lottery.prize);
            lottery.timer = setTimeout(roll, lottery.speed); //设置定时器循环调用
        }
        return false;

    }
    var click = false;

    window.onload = function () {

        lottery.init('lottery');
        $("#lottery a").click(function () {
            if (click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                return false;
            } else {
                lottery.speed = 100;
                if(changes <= 0){
                	$('.alert_ty_3').css('display','block');
                	$('#world').html('您已经没有机会啦！');
                	
                	return false;
                }
                index = Math.random() * (lottery.count) | 0;//产生随机数
                var overFlage = roll(); //转圈过程不响应click事件，会将click置为false     这个是点击中间a标签让方块开始转动，控制抽奖次数加参数判断控制这个执行
                changes=changes-1;
                click = true; //一次抽奖完成后，设置click为true，可继续抽奖
                return false;
            }
        });
    };
