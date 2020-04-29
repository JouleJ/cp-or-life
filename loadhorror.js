function loadHorror() {
	const N_USERS = 150;
	console.log('loadHorror()');
	let request = new XMLHttpRequest();
	request.open('GET', 'https://codeforces.com/api/user.ratedList?activeOnly=false');
	request.send();
	request.onload = function() {
		if(request.status == 200) {
			console.log('OK');
			let users = JSON.parse(request.response).result;
			let table =  document.getElementById('table-of-horror');
			let rezult = [
				'<tbody>',
				'<tr>',
				'<th>', 'Имя Древнего Бога', '</th>',
				'<th>', 'Место в иерархии Древних Богов', '</th>',
				'<th>', 'Количество невинных', '</th>',
				'</tr>'
			];
			for(let i = 0; i < N_USERS; ++i) {
				let row = ['<tr>', 
							'<td>', users[i].handle, '</td>',
							'<td>', users[i].rank, '</td>',
							'<td>', '<span class="ancient-mystery">', users[i].rating, '</span', '</td>',
							'</tr>'].join(' ');
				rezult.push(row);
			}
			rezult.push('</tbody>');
			let html = rezult.join(' ');
			console.log(html);
			table.innerHTML = html;
		} else {
			console.log('FAIL');
		}
	};
}
