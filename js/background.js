const background = {
	sourceX: 0,
	sourceY: 0,
	width: 275,
	height: 226,
	x: 0,
	y: cvs.height - 226,

	draw: function () {
		ctx.drawImage(sprite, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
		ctx.drawImage(sprite, this.sourceX, this.sourceY, this.width, this.height, this.x + this.width, this.y, this.width, this.height);
	},
};
