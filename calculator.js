 /* gets/selects an element by id or class etc*/
const display= document.getElementById('display');
// array.from lets you create an array from wth a length property ,,
const buttons = Array.from(document.getElementsByClassName('button'));
/*map fxn calls each element created in the array*/
buttons.map( button =>{
	button.addEventListener('click', (e) =>{
		// innerText sets and retrieve content of the tag as plain text. ignores white spaces, show human readable element
		//innerHtml sets and retrieve content of the tag as Html format/ on a webpage,doesn't ignore spaces
		/*target returns element under which event took place*/
		switch(e.target.innerText){
			case'CLR':
			display.innerText = '';
			break;
			case 'DEL':
			if (display.innerText) {
			display.innerText = display.innerText.slice(0, -1);}
 			break;
		case '=':
		//use try catch so that = wont display on screen after the answer,,an error displays once input elements wrongly;
		try{
			display.innerText = eval(display.innerText);
		}	 catch{
			display.innerText = 'ERROR';
		}
		break;
		default:
		display.innerText /*+= e.target.innerText;*/

		}

	});
});
