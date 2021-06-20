// GET READY MESSAGE
const getReady = {
	sourceX: 0,
	sourceY: 228,
	width: 173,
	height: 152,
	x: cvs.width / 2 - 173 / 2,
	y: 80,

	draw: function () {
		if (gameState.current === gameState.getReady) ctx.drawImage(sprite, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
	},
};

// GAME OVER MESSAGE
const gameOver = {
	sourceX: 175,
	sourceY: 228,
	width: 225,
	height: 202,
	x: cvs.width / 2 - 225 / 2,
	y: 90,

	draw: function () {
		if (gameState.current === gameState.over) ctx.drawImage(sprite, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
	},
};
