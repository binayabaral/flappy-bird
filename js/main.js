window.addEventListener('load', () => {
	loop();
	cvs.addEventListener('click', handleCanvasClick);
});

// DRAW
function draw() {
	ctx.fillStyle = '#70c5ce';
	ctx.fillRect(0, 0, cvs.width, cvs.height);

	background.draw();
	pipes.draw();
	foreground.draw();
	bird.draw();

	getReady.draw();
	gameOver.draw();
	score.draw();
}

// UPDATE
function update() {
	bird.update();
	foreground.update();
	pipes.update();
}

// LOOP
function loop() {
	update();
	draw();
	frames++;

	requestAnimationFrame(loop);
}
