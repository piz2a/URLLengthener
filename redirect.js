const params = new URLSearchParams(window.location.search);
if(params.has('url')) {
	try {
	url = params.get('url');
		/*
		if(!url.startsWith('http://') && !url.startsWith('https://')) {
			url = 'http://' + url;
		}
		*/
		location.href = url;
	}
	catch(err) {
		document.getElementById("demo").innerHTML = err.message;
	}
} else {
	document.getElementById("demo").innerHTML = 'Please enter a URL';
}