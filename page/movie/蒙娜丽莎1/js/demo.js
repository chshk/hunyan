window.onload = function(){
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����
    //1. ���Ҫ�����Ķ���
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var lis = slide.getElementsByTagName("li");
    var flag = true;
    // 2. ��ÿ��li��ǩ���͸�λ
    assign();



    function assign(){
        for(var i = 0; i < config.length; i++) {
            animate(lis[i],config[i],function(){
                flag = true;
            });
        }
    }

    // 3. ����������ӣ�Ҫ��ʾ���Ұ�ť
    wrap.onmouseover = function (){
           animate(arrow,{
               opacity:1
           })
    };
    //4. ����뿪֮��Ҫ�������Ұ�ť
    wrap.onmouseout = function (){
           animate(arrow,{
               opacity  :0
           })
    }

    // 5. ���Ҳఴťע���¼�
    arrRight.onclick = function (){
        if(flag){
            flag = false;
        }
        config.push(config.shift());
        assign();
    }
    arrLeft.onclick = function (){
        if(flag){
            flag = false;
        }

        config.push(config.shift());
        assign();
    }
}