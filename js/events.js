const handleCanvasClick = e => {
	switch (gameState.current) {
		case gameState.getReady:
			gameState.current = gameState.game;
			swoosh.play();
			break;
		case gameState.game:
			bird.flap();
			flap.play();
			break;
		case gameState.over:
			let rect = cvs.getBoundingClientRect();
			let clickX = e.clientX - rect.left;
			let clickY = e.clientY - rect.top;

			// CHECK IF START BUTTON IS CLICKED
			if (clickX >= startBtn.x && clickX <= startBtn.x + startBtn.width && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.height) {
				pipes.reset();
				bird.reset();
				score.reset();
				gameState.current = gameState.getReady;
			}
			break;
	}
};
