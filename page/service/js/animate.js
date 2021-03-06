/**
 * Created by Invoker on 2016/12/1.
 */
function $id(id) {
    return document.getElementById(id);
}

function getStyle(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr] || 0;
}

function animatev0(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        var current = element.offsetLeft;
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}

function animatev1(element, attr, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        var current = parseInt(getStyle(element, attr));
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px";
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}

function animatev2(element, json) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        for (var key in json) {
            var current = parseInt(getStyle(element, key));
            var target = json[key];
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style[key] = current + "px";
            if (current == target) {
                clearInterval(element.timer);
            }
        }
    }, 20);
}

function animatev3(element, json) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        var flag = true;
        for (var key in json) {
            var current = parseInt(getStyle(element, key));
            var target = json[key];
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style[key] = current + "px";;
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
        }
    }, 20);
}

function animatev4(element, json, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        var falg = true;
        for (var key in json) {
            var current = parseInt(getStyle(element, key));
            var target = json[key];
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style[key] = current + "px";
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            (fn && typeof(fn) == "functoin") && fn();
        }
    }, 20);
}

function animatev5(element, json, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function() {
        var flag = true;
        for (var key in json) {
            if (key == "opacity") {
                var current = getStyle(element, key) * 100 || 0;
                var target = json[key] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[key] = current / 100;
            } else if (key == "zIndex") {
                element.style[key] = json[key];
            } else {
                var current = parseInt(getStyle(element, key)) || 0;
                var target = json[key];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[key] = current + "px";
            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            (typeof fn == "function") && fn();
        }
    }, 20);
}

// /希望动画完成之后才执行某些特定的逻辑  ---  添加回调函数
function animate_v6(element,obj,callback){
    clearInterval(element.timer);
    element.timer = setInterval(function(){

        var flag = true; // -- 假设所有的属性都已经到达了目标值
        for(var attr in obj){

//                要特殊处理某些属性 - 先判断后处理
            if( attr == "opacity"){
                var target = obj[attr];
                //获取当前值 因为opacity是从0-1之间，所以是小数
                var current = parseFloat(getStyle(element,attr));
                //计算下一步的目标值 -- 处理小数误差的时候，先放大在取整
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                // -- 取整
                step = target >= current ? Math.ceil(step) : Math.floor(step);
                current += step;
                9 //修改元素的属性
                element.style[attr] = current / 100;
            }else if(attr == "zIndex"){
                //因为zIndex这个属性，在垂直于屏幕的方向，看不见明显的动画的，不要使用动画了
                var target = obj[attr];
                var current = target;
                element.style[attr] = target;
            }else{
                var target = obj[attr];
                //获取当前值
                var current = parseInt(getStyle(element,attr));
                //计算下一步的目标值
                var step = (target - current) / 10;
                step = target >= current ? Math.ceil(step) : Math.floor(step);
                current += step;
                //修改元素的属性
                element.style[attr] = current + "px";
            }
            //判断是否当前属性真的到达目标值了
            if(target != current){  //在循环内部去推翻假设
                flag = false;
                //注意：不要break
            }
        }
        if(flag){  // -- 判断假设是否成立，如果成立，就该停了
            //停下来
            clearInterval(element.timer);
            //在动画结束的时候调用
            callback && callback();  // -- 多了一个调用回调函数，保证让动画结束之后，可以执行一些特殊的逻辑
        }
    },20);
}


