window.onload = function () {
    const canvas = document.getElementById('canvas');
    //const result = document.getElementById('result');

    const ctx = canvas.getContext('2d');

    // ctx.beginPath();
    // ctx.rect(20, 40, 50, 50);
    // ctx.fillStyle = "#FF0000";
    // ctx.fill();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
    // ctx.strokeStyle = "rgba(0, 0, 255, 2.0)";
    // ctx.stroke();
    // ctx.closePath();

    var x = canvas.width / 2;
    var y = canvas.height - 30;

    var dx = 2;
    var dy = -2;

    var ballRadius = 10;

    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width - paddleWidth) / 2;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }

        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }
    setInterval(draw, 10);
}