const foreground = {
	sourceX: 276,
	sourceY: 0,
	width: 224,
	height: 112,
	x: 0,
	y: cvs.height - 112,
	dx: 2,

	draw: function () {
		ctx.drawImage(sprite, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
		ctx.drawImage(sprite, this.sourceX, this.sourceY, this.width, this.height, this.x + this.width, this.y, this.width, this.height);
	},

	update: function () {
		if (gameState.current === gameState.game) this.x = (this.x - this.dx) % (this.width / 2);
	},
};
