window.onload = function(){

		document.body.innerHTML = document.body.innerHTML.replaceAll('Yale', 'Yale 🏫');
		document.body.innerHTML = document.body.innerHTML.replaceAll('YALE', 'YALE 🏫');
		document.body.innerHTML = document.body.innerHTML.replaceAll('yale', 'yale 🏫');

		document.querySelector("body").insertAdjacentHTML("beforeend",`<h1 class="testing">😔 testing!!!</h1>`)
	
};
