
window.onload = function  (){

    //获得操作对象
    var box1 = document.getElementById("box1");
    var bigBox1 = document.getElementById("bigBox1");
    var mask = document.getElementById("mask");
    var smallBox = document.getElementById("smallBox");
    var bigImg = document.getElementById("bigImg");

//注册事件
    smallBox.onmousemove = function  (e){

        //调用键值
        e = e||window.event;
        //显示遮罩
        mask.style.display = "block";
        //显示大盒子
        bigBox1.style.display = "block";
        //求出鼠标位置   盒子宽度 减去   遮罩盒子宽度一半
        var x = page(e).x - box1.offsetLeft - mask.offsetWidth/2;
        var y = page(e).y - box1.offsetTop - mask.offsetHeight/2;


        //三元表达式  让遮罩不能离开盒子
        x = x<0? 0:x;
        y = y<0? 0:y;
        //如果x轴大于大盒子宽度 减去遮罩宽度，就执行，不然就等于自身
        x = x>smallBox.offsetWidth - mask.offsetWidth?smallBox.offsetWidth-mask.offsetWidth:x;
        y = y>smallBox.offsetHeight - mask.offsetHeight?smallBox.offsetHeight- mask.offsetHeight:y;


        mask.style.left = x + 'px';
        mask.style.top = y + 'px';

        bigImg.style.left = -box1.offsetWidth/mask.offsetWidth*x + 'px';
        bigImg.style.top =-box1.offsetHeight/mask.offsetHeight*y + 'px';



        smallBox.onmouseout = function  (){
            mask.style.display = "none";
            bigBox1.style.display = "none"

        }


    }


}
