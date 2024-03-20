// popup.js
function formatNumberWithLeadingSpaces(number, targetLength) {
    let numberString = String(number);
    let paddingSize = targetLength - numberString.length;
    let padding = new Array(paddingSize + 1).join('&nbsp;');
    return padding + numberString;
}

document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({action: "getTabCount"}, function(response) {
        let formattedNumber = formatNumberWithLeadingSpaces(response.number, 6); // Assuming you won't go over 9999
        document.getElementById('tabCount').innerHTML = formattedNumber;
    });

    chrome.runtime.sendMessage({action: "getMaxTabs"}, function(response) {
        let formattedNumber = formatNumberWithLeadingSpaces(response.number, 6); // Adjust the 4 based on your needs
        document.getElementById('maxTabs').innerHTML = formattedNumber;
    });
});
