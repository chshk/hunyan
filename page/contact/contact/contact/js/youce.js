
window.onload = function  (){

    //��ò�������
    var box1 = document.getElementById("box1");
    var bigBox1 = document.getElementById("bigBox1");
    var mask = document.getElementById("mask");
    var smallBox = document.getElementById("smallBox");
    var bigImg = document.getElementById("bigImg");

//ע���¼�
    smallBox.onmousemove = function  (e){

        //���ü�ֵ
        e = e||window.event;
        //��ʾ����
        mask.style.display = "block";
        //��ʾ�����
        bigBox1.style.display = "block";
        //������λ��   ���ӿ�� ��ȥ   ���ֺ��ӿ��һ��
        var x = page(e).x - box1.offsetLeft - mask.offsetWidth/2;
        var y = page(e).y - box1.offsetTop - mask.offsetHeight/2;


        //��Ԫ���ʽ  �����ֲ����뿪����
        x = x<0? 0:x;
        y = y<0? 0:y;
        //���x����ڴ���ӿ�� ��ȥ���ֿ�ȣ���ִ�У���Ȼ�͵�������
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
