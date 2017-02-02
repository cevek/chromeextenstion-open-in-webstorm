chrome.devtools.panels.setOpenResourceHandler(function (a, lineNumber) {
    var url = a.url;
    url = url.replace(/http:\/\/.*?\//, '');
    url = url.replace(/file:\/\/.*?\//, '/');
    url = url.replace(/^src\//, 'frontend/src/');
    var openUrl = 'http://localhost:63342/api/file?file=' + url + '&line=' + lineNumber;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', openUrl);
    xhr.send();
    console.log(openUrl);
})
