let text = document.getElementById('text');
let cloud = document.getElementById('cloud');
let vine = document.getElementById('vine');
let left = document.getElementById('left');
let right = document.getElementById('right');

		
	window.addEventListener('scroll', function (){
	let value = window.scrollY;

	text.style.top = value * 0.5 + 'px';
	cloud.style.left = value * 0.5 + 'px';
	vine.style.top = value * -1 + 'px';
	left.style.left = value * -1.5 + 'px';
	right.style.left = value * 1.5 + 'px';	
	})

