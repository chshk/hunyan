




$.fn.carousel=function(obj){
    var playimg = this.find("ul").eq(0);
    var playlis = this.children().eq(1).find("li");
    console.log(playlis);
    var timeId = null;
    var pic = 0 ;
    var index;
    playimg.append(playimg.find("li").eq(0).clone());
    playlis.on("mouseenter",function(){
        $(this).attr("class","cur").siblings().removeAttr("class");
        index = $(this).index()
        playimg.stop().animate({
            left:- index*playimg.find("li").width()
        });
        pic = index;
        clearInterval(timeId);
    }).on("mouseleave",function(){
        play(playimg,playlis,pic);
    });

    playimg.on("mouseenter",function(){
        clearInterval(timeId);
    }).on("mouseleave",function(){
        play(playimg,playlis,pic);
    });
    play(playimg,playlis,pic);
    function play(img,lis,pos){
        timeId =setInterval(function(){
            if(pos>lis.length-1){
                img.css("left",0);
                pos=0;
            }
            pos++;
            lis.removeAttr("class");  
            if(pos==3){
                lis.removeAttr("class");  
                $(lis[0]).attr("class","cur");
            }else{
                $(lis[pos]).attr("class","cur");
            }
            img.stop().animate({
                left : -pos * img.find("li").width()
            })
        },2000)
    }
}

