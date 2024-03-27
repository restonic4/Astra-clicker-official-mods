document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('inputElement');
    const addElementBtn = document.getElementById('addElementBtn');
    const itemList = document.getElementById('itemList');

    loadSavedElements();

    addElementBtn.addEventListener('click', function () {
        const newElement = inputElement.value.trim();
        if (newElement !== '') {
            addItemToList(newElement);
            saveElement(newElement);
            inputElement.value = '';
        }
    });

    itemList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const itemToRemove = event.target.parentNode;
            removeItemFromList(itemToRemove);
            removeFromStorage(itemToRemove.textContent.trim().slice(0, -1));
        }
    });

    function loadSavedElements() {
        chrome.runtime.sendMessage({ action: 'getSavedURLs' }, function (response) {
            if (response && response.urls) {
                response.urls.forEach(function (element) {
                    addItemToList(element);
                });
            }
        });
    }

    function addItemToList(element) {
        const li = document.createElement('li');
        li.textContent = element;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    }

    function saveElement(element) {
        chrome.runtime.sendMessage({ action: 'saveElement', element: element });
    }

    function removeItemFromList(item) {
        itemList.removeChild(item);
        removeFromStorage(item.textContent.trim().slice(0, -1));
    }

    function removeFromStorage(element) {
        chrome.runtime.sendMessage({ action: 'removeElement', element: element });
    }

});
