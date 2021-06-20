const pipes = {
	availablePipesPosition: [],

	topPipe: {
		sourceX: 553,
		sourceY: 0,
	},
	bottomPipe: {
		sourceX: 502,
		sourceY: 0,
	},

	width: 53,
	height: 400,
	gap: 85,
	maxYPos: -150,
	dx: 2,

	draw: function () {
		this.availablePipesPosition.forEach(pipePosition => {
			// CALCULATE Y-POSITION OF TOP AND BOTTOM PIPES
			let topPipeYPos = pipePosition.y;
			let bottomPipeYPos = pipePosition.y + this.height + this.gap;

			// DRAW TOP PIPE
			ctx.drawImage(sprite, this.topPipe.sourceX, this.topPipe.sourceY, this.width, this.height, pipePosition.x, topPipeYPos, this.width, this.height);
			// DRAW BOTTOM PIPE
			ctx.drawImage(sprite, this.bottomPipe.sourceX, this.bottomPipe.sourceY, this.width, this.height, pipePosition.x, bottomPipeYPos, this.width, this.height);
		});
	},

	update: function () {
		if (gameState.current !== gameState.game) return;

		// GENERATE A PIPE EVERY 100 FRAMES OF GAME
		if (frames % 100 === 0) {
			this.availablePipesPosition.push({
				x: cvs.width,
				y: this.maxYPos * (Math.random() + 1),
			});
		}

		this.availablePipesPosition.forEach(pipePosition => {
			// COLLISION DETECTION

			// CHECK FOR COLLISION WITH TOP PIPE
			if (bird.x + bird.radius > pipePosition.x && bird.x - bird.radius < pipePosition.x + this.width && bird.y + bird.radius > pipePosition.y && bird.y - bird.radius < pipePosition.y + this.height) {
				gameState.current = gameState.over;
				hit.play();
			}

			// CHECK FOR COLLISION WITH BOTTOM PIPE
			let bottomPipeYPos = pipePosition.y + this.height + this.gap;
			if (bird.x + bird.radius > pipePosition.x && bird.x - bird.radius < pipePosition.x + this.width && bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.height) {
				gameState.current = gameState.over;
				hit.play();
			}

			// MOVE THE PIPES TO THE LEFT IN EACH ITERATION
			pipePosition.x -= this.dx;

			// REMOVE THE PIPES FROM ARRAY WHEN THEY GO OFF THE SCREEN
			if (pipePosition.x + this.width <= 0) {
				this.availablePipesPosition.shift();
				score.value++;
				point.play();

				score.best = Math.max(score.value, score.best);
				localStorage.setItem('flappyBirdBestScore', score.best);
			}
		});
	},

	reset: function () {
		this.availablePipesPosition = [];
	},
};
