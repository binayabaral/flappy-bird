const bird = {
	flapPositions: [
		{ sourceX: 276, sourceY: 112 },
		{ sourceX: 276, sourceY: 139 },
		{ sourceX: 276, sourceY: 164 },
		{ sourceX: 276, sourceY: 139 },
	],
	x: 50,
	y: 150,
	width: 34,
	height: 26,
	radius: 12,

	position: 0,

	speed: 0,
	gravity: GRAVITY,
	jump: JUMP_PER_CLICK,
	rotation: 0,

	draw: function () {
		let currentPosition = this.flapPositions[this.position];

		// ROTATION EFFECT FOR THE BIRD
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		ctx.drawImage(sprite, currentPosition.sourceX, currentPosition.sourceY, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);
		ctx.restore();
	},

	flap: function () {
		this.speed -= this.jump;
	},

	update: function () {
		// MAKE BIRD FLAP SLOWLY IN GET READY STATE AND FASTER IN GAME STATE
		this.period = gameState.current === gameState.getReady ? 10 : 5;
		this.position += frames % this.period === 0 ? 1 : 0;
		this.position = this.position % this.flapPositions.length;

		if (gameState.current === gameState.getReady) {
			this.y = 150;
			this.rotation = convertDegreeToRadian(0);
		} else {
			this.speed += this.gravity;
			this.y += this.speed;

			// CHECK COLLISION WITH BOTTOM
			if (this.y + this.height / 2 >= cvs.height - foreground.height) {
				this.y = cvs.height - foreground.height - this.height / 2;
				if (gameState.current === gameState.game) {
					gameState.current = gameState.over;
					die.play();
				}
			}
		}

		// HANDLE BIRD ROTATION
		if (this.speed >= this.jump) {
			this.rotation = convertDegreeToRadian(90);
			this.position = 1;
		} else this.rotation = convertDegreeToRadian(-25);
	},

	reset: function () {
		this.speed = 0;
	},
};
