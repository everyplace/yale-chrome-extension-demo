window.onload = function(){

		document.body.innerHTML = document.body.innerHTML.replaceall('Yale', 'Yale 🏫');
		document.body.innerHTML = document.body.innerHTML.replaceall('YALE', 'YALE 🏫');
		document.body.innerHTML = document.body.innerHTML.replaceall('yale', 'yale 🏫');

		document.querySelector("body").insertAdjacentHTML("beforeend",`<h1 class="testing">😔 testing!!!</h1>`)
	
};
