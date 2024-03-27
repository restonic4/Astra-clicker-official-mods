chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getSavedURLs') {
        chrome.storage.local.get('savedElements', function (data) {
            const savedElements = data.savedElements || [];
            sendResponse({ urls: savedElements });
        });
        return true;
    } else if (request.action === 'saveElement') {
        const elementToSave = request.element;
        chrome.storage.local.get('savedElements', function (data) {
            const savedElements = data.savedElements || [];
            savedElements.push(elementToSave);
            chrome.storage.local.set({ savedElements: savedElements }, function () {
                sendResponse({ message: 'Element saved successfully' });
            });
        });
        return true;
    } else if (request.action === 'removeElement') {
        const elementToRemove = request.element;
        chrome.storage.local.get('savedElements', function (data) {
            const savedElements = data.savedElements || [];
            const updatedElements = savedElements.filter(function (el) {
                return el !== elementToRemove;
            });
            chrome.storage.local.set({ savedElements: updatedElements }, function () {
                sendResponse({ message: 'Element removed successfully' });
            });
        });
        return true;
    }
});
