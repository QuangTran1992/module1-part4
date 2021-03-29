var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
// ctx.moveTo(100, 0);
// ctx.lineTo(100, 100);
// ctx.stroke();

ctx.beginPath(); //// Vẽ hình tròn
ctx.arc(40, 50, 30, 0, 2 * Math.PI);
ctx.fillStyle = "#FE0000"; /// Màu nền
ctx.fill();

// ctx.fillStyle = "#FF0000"; ///// Màu nền
// ctx.fillRect(10, 10, 150, 75);
/// toạ độ bắt đầu vẽ và chiều rộng chiều dài
