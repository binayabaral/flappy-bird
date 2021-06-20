// SELECT CANVAS
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

// GAME VARIABLES
let frames = 0;

// LOAD IMAGE
const sprite = new Image();
sprite.src = 'images/sprite.png';

// LOAD SOUNDS
const point = new Audio();
point.src = 'sounds/point.wav';

const flap = new Audio();
flap.src = 'sounds/flap.wav';

const hit = new Audio();
hit.src = 'sounds/hit.wav';

const swoosh = new Audio();
swoosh.src = 'sounds/swoosh.wav';

const die = new Audio();
die.src = 'sounds/die.wav';

// GAME STATES
const gameState = {
	current: 0,
	getReady: 0,
	game: 1,
	over: 2,
};

// START BUTTON CO-ORDINATES
const startBtn = {
	x: 120,
	y: 263,
	width: 83,
	height: 29,
};

// GAME CONSTANTS
const GRAVITY = 0.2;
const JUMP_PER_CLICK = 4;
