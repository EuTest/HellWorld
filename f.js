document.addEventListener( "DOMContentLoaded", init, false );
function init() {
	var alien=document.getElementsByClassName('alien');
	for(var i=0; i<alien.length; i++) {
		alien[i].style.display='none';
	}
}

function toggle() {
	var alien=document.getElementsByClassName('alien');
	for(var i=0; i<alien.length; i++) {
		alien[i].style.display = (alien[i].style.display == 'none') ? 'block' : 'none';
	}
}


// The New Function which prints lots of useful information
function newFunction() {
	console.log('New Functioin is working!');
}


