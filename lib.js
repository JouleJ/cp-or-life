window.onload = function() {
	function setContent(className, content) {
		let tags = document.getElementsByClassName(className);
		console.log('@className,content=', className, content)
		for(tag of tags) {
			tag.innerHTML = content;
		}
	};
	function generateMenuFromDict(dict) {
		return '<ul>\n' + Object.keys(dict).map(url => '<li> <a href="' + url + '"> ' + dict[url] + ' </a> </li>').join('\n') + '\n</ul>';
	};
	const menuDict = {
		'index.html': 'Главная',
		'experts.html': 'Мнения наших экспертов',
		'cult.html': 'Спортивное программирование как секта',
		'cure.html': 'Лечение от спортивного программирования'
	};
	setContent('title', '<h1> Спортивное программирование или жизнь: место есть только для одного! </h1>');
	setContent('menu', generateMenuFromDict(menuDict));
	setContent('bottom',
		'<div>Проект подготовлен учениками 11В класса СУНЦ МГУ: Александр Шеховцов, Владимир Кауркин, Михиал Малютин</div><div style="text-align:right; padding-right: 100px; color: rgb(100, 100, 100)"><div>© 2020</div><link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"><div class="header-logo"><div style="position: relative; display: inline;"><div id="logo-name">T<i class="material-icons" style="font-size: 32px; position: relative; top: 4px;">camera</i>URIST</div><div id="logo-corner-right"></div><div id="logo-corner-left"></div></div></div></div>')
}
