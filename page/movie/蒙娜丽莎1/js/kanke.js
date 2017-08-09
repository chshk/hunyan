/**
 * Created by user on 2017/4/7.
 */
var config = [
    //分配样式
    {width:350,top:20,left:80,opacity:0.2,zIndex:2},
    {width:500,top:60,left:-24,opacity:0.8,zIndex:3},
    {width:700,top:100,left:258,opacity:1,zIndex:7},
    {width:500,top:60,left:707,opacity:0.8,zIndex:3},
    {width:350,top:20,left:750,opacity:0.2,zIndex:2}
];
var wrap = $$("wrap");
var slide = $$("slide");
var arrow = $$("arrow");
var lis = slide.getElementsByTagName("li");
var arrLeft = document.getElementById("arrLeft");
var arrRight = document.getElementById("arrRight");
var flag = false;
//为每个li标签分配的一个样式
function moves(){
    for(var i=0;i<config.length;i++){

        animate(lis[i],config[i],function(){flag =true;});
    }
}
moves();
wrap.onmouseover = function(){
//        arrow.style.opacity=1;
    animate(arrow,{opacity:1});
}
wrap.onmouseout = function(){
    animate(arrow,{opacity:0});
}
arrLeft.onclick = function(){
    if(flag){
        config.unshift(config.pop());
        moves();
    }

}

arrRight.onclick= function(){
    if(flag){
        config.push(config.shift());
        moves();
    }

}

function $$(id) {
    return document.getElementById(id);
}

function animate(obj,json,fn){
    // 为了保证当前对象运动的时候，只会开启一个定时器，需要将定时器存在当前对象的属性中
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key=="opacity"){
                var leader = parseInt(getStyle(obj,key)*100)||0; //因为opacity是小数，为了便于计算，先将此值扩大100倍
                var target = json[key]*100;//这个就是json里面的目标位置
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader/100;
            }else if(key=="zIndex"){
                var leader = parseInt(getStyle(obj,key))||0; //当前对象现在的属性值
                var target = json[key];//这个就是json里面的目标位置
                step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key))||0; //当前对象现在的属性值
                var target = json[key];//这个就是json里面的目标位置
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader +'px';
            }
            if(leader!=target){ //如果有一个属性的值没有到达目标位置的话,就要让flag为false
                flag = false;
            }
        }
        if(flag){ // 要根据flag的值来确定是否要清除定时器
            clearInterval(obj.timerId);
            if(fn){ //如果fn有值，并且是一个函数的话，则调用这个函数
                fn();
            }
        }
    },15)
}

function getStyle(obj,attr){
    // 能力检测  所谓的能力检测，也就是看浏览器是否支持此对象的属性或是方法
    if(obj&&obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}





//点击显示图片
$(function () {
    var flag = 1;
    $(".show_page li").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#bg").css("display", "block");
        $("#clone").html($(this).find("img").clone());
        $("#clone").show().animate({
            left: event.pageX - $(this).width() / 2,
            top: event.pageY - $(this).height() / 2
        });

    });


    $(document).on("click", function () {
        $("#bg").css("display", "none");
        $("#clone").css("display", "none");

    });

    $(".zp").on("click", function () {
        $("#show_new").toggle(800);
        if (flag > 1) {
            $(".show_pg_last").toggle(800);
        } else {

            flag++;
        }
    });

});

$(function(){
    $(".show_page li").on("mouseenter",function(){

        $(this).find("span").css("display","block").stop().animate({
            left:0,
        },600,"swing");
        $(this).find("b").css("display","block").stop().animate({
            left:0
        },600,"swing");
    });

    $(".show_page li").on("mouseleave",function(){
        $(this).find("span").css("display","none").stop().animate({
            left:-239
        },500,"swing");
        $(this).find("b").css("display","none").stop().animate({
            left: -150
        },500,"swing");

    });

});
