chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.query({}, (tabs) => {
        if (tabs.length > 2159) {
            chrome.tabs.remove(tab.id);
        }
    });
});
