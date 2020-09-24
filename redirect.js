const params = new URLSearchParams(window.location.search);
if(params.has('url')) {
	url = params.get('url');
	if(!(url.startsWith('http://') || url.startsWith('https://'))) {
		url += 'http://';
	}
	document.write(url);
	// location.href = url;
} else {
	document.write('<h3>Invalid URL</h3>');
}
