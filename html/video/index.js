// 拿到要操作的dom结构(标签)
// 在这个dom上滑动鼠标能控制滑块的位置
// 能控制这个dom的高度发生变化
// 根据该dom高度的值来调整视频播放的速度

var speed = document.querySelector('.speed');
var bar = document.querySelector('.speed-bar');
var video = document.querySelector('.flex');
// console.log(document.querySelector('.speed'));
// console.log(bar);
speed.addEventListener('mousemove',function(e){ // 鼠标移动
    // console.log(123);
    // 控制滑块的位置
    // console.log(e);
    var y = e.pageY - speed.offsetTop; // offsetTop是获取某个dom结构到浏览器顶部的距离
    var percent = y / speed.offsetHeight; // offsetHeight是获取某个dom结构自身的高度
    var min =  0.4;
    var max = 4;
    var height = Math.round(percent * 100) + '%'; // 四舍五入之后结果
    // console.log(height);
    var playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    video.playbackRate = playbackRate;
    bar.textContent = playbackRate.toFixed(2) + 'x'; // 保留两位小数
}); 