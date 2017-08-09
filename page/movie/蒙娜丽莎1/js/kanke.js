/**
 * Created by user on 2017/4/7.
 */
var config = [
    //������ʽ
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
//Ϊÿ��li��ǩ�����һ����ʽ
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
    // Ϊ�˱�֤��ǰ�����˶���ʱ��ֻ�Ὺ��һ����ʱ������Ҫ����ʱ�����ڵ�ǰ�����������
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key=="opacity"){
                var leader = parseInt(getStyle(obj,key)*100)||0; //��Ϊopacity��С����Ϊ�˱��ڼ��㣬�Ƚ���ֵ����100��
                var target = json[key]*100;//�������json�����Ŀ��λ��
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader/100;
            }else if(key=="zIndex"){
                var leader = parseInt(getStyle(obj,key))||0; //��ǰ�������ڵ�����ֵ
                var target = json[key];//�������json�����Ŀ��λ��
                step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key))||0; //��ǰ�������ڵ�����ֵ
                var target = json[key];//�������json�����Ŀ��λ��
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader +'px';
            }
            if(leader!=target){ //�����һ�����Ե�ֵû�е���Ŀ��λ�õĻ�,��Ҫ��flagΪfalse
                flag = false;
            }
        }
        if(flag){ // Ҫ����flag��ֵ��ȷ���Ƿ�Ҫ�����ʱ��
            clearInterval(obj.timerId);
            if(fn){ //���fn��ֵ��������һ�������Ļ���������������
                fn();
            }
        }
    },15)
}

function getStyle(obj,attr){
    // �������  ��ν��������⣬Ҳ���ǿ�������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(obj&&obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}





//�����ʾͼƬ
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
