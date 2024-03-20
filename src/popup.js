document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({action: "getTabCount"}, function(response) {
        document.getElementById('tabCount').textContent = response.number;
    });

    chrome.runtime.sendMessage({action: "getMaxTabs"}, function(response) {
        document.getElementById('maxTabs').textContent = response.number;
    });
});