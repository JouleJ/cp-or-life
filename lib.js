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
	setContent('title', 'Спортивное программирование или жизнь: место есть только для одного!');
	setContent('menu', generateMenuFromDict(menuDict));
	setContent('bottom', 'Проект подготовлен учениками 11В класса СУНЦ МГУ: Александр Шеховцов, Владимир Кауркин, Михиал Малютин')
}
