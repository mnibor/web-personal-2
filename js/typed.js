const app = document.getElementById('typewriter');

const typewriter = new Typewriter (app, {
	delay: 75,
	loop: true
});

typewriter
.typeString('y soy desarrollador de páginas web')
.pauseFor(200)
.start();