
                var config=[{
                width:400,
                top:20,
                left:50,
                opacity:0.2,
                zIndex:2
                },
                {
                width:600,
                top:70,
                left:0,
                opacity:0.8,
                zIndex:3
                },
                {
                width:800,
                top:100,
                left:200,
                opacity:1,
                zIndex:4
                },
                {
                width:600,
                top:70,
                left:600,
                opacity:0.8,
                zIndex:3
                },
                {
                width:400,
                top:20,
                left:750,
                opacity:0.2,
                zIndex:2
                }
                ];

                var lis = document.getElementById("slide").children[0].children;
                var arr=[];
                for (var i=0; i<lis.length;i++) {
                arr.push(lis[i]);
                }
                roate();
                var wrap=document.getElementById("wrap");
                var arrow=document.getElementById("arrow");
                wrap.onmouseover=function(){
                animatev5(arrow,{opacity:1});
                }
                wrap.onmouseout=function(){
                animatev5(arrow,{opacity:0});
                }
                var leftBtn=arrow.children[0];
                var rightBtn=arrow.children[1];
                leftBtn.onclick=function(){
                arr.push(arr.shift());
                roate();
                }
                rightBtn.onclick=function(){
                arr.unshift(arr.pop());
                roate();
                }
                function roate(){
                for (var j=0;j<arr.length;j++) {
                animatev5(arr[j],config[j]);
                }
                }
