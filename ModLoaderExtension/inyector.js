chrome.runtime.sendMessage({ action: 'getSavedURLs' }, function (response) {
    if (response && response.urls) {
        const urlData = document.createElement("p");
        urlData.id = "modsURLS";
        urlData.classList.add("hidden");

        response.urls.forEach(function (url) {
            urlData.innerText = urlData.innerText + url + " ";
        });

        urlData.innerText = urlData.innerText.slice(0, -1);

        document.body.appendChild(urlData);
    }
});