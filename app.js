/* const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://instagram-data1.p.rapidapi.com/user/search?keyword=Kiyosaki');
xhr.setRequestHeader('X-RapidAPI-Key', 'ba2a620796msh196a736917e91bcp15f0ffjsne88b81549d55');
xhr.setRequestHeader('X-RapidAPI-Host', 'instagram-data1.p.rapidapi.com');

xhr.send(data); */

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://api.instagapi.com/searchuser/{harjibolarakintayo}?core={core}');
xhr.setRequestHeader('X-InstagAPI-Key', '2186a5cf9becbbebdd5901b876e014c2');

xhr.send(data);
