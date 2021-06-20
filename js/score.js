const score = {
	best: parseInt(localStorage.getItem('flappyBirdBestScore')) || 0,
	value: 0,

	draw: function () {
		ctx.fillStyle = '#FFF';

		if (gameState.current === gameState.game) {
			ctx.lineWidth = 2;
			ctx.font = '35px Teko';
			ctx.fillText(this.value, cvs.width / 2, 50);
			ctx.strokeText(this.value, cvs.width / 2, 50);
		} else if (gameState.current === gameState.over) {
			ctx.font = '25px Teko';
			ctx.fillText(this.value, 225, 186);
			ctx.strokeText(this.value, 225, 186);

			ctx.fillText(this.best, 225, 228);
			ctx.strokeText(this.best, 225, 228);
		}
	},

	reset: function () {
		this.value = 0;
	},
};
