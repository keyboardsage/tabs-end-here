tabCount = 0;
maxTabs = 2159;

/**
 * Plays audio files from extension service workers
 * @param {string} source - path of the audio file
 * @param {number} volume - volume of the playback
 */
async function playSound(source = 'default.wav', volume = 1) {
    await createOffscreen();
    await chrome.runtime.sendMessage({ play: { source, volume } });
}

// create the offscreen document if it doesn't already exist
async function createOffscreen() {
    if (await chrome.offscreen.hasDocument()) return;
    await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['AUDIO_PLAYBACK'],
        justification: 'Used to play the tab preventing sound'
    });
}

chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.query({}, (tabs) => {
        // prevent creating a new tab when maximum is exceeded
        // and also update the tab count
        if (tabs.length > maxTabs)
        {
            tabCount = tabs.length;
            tabCount--;

            chrome.tabs.remove(tab.id);
            
            playSound('tab_prevent.wav');
        }
        else
        {
            tabCount = tabs.length;
        }
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getTabCount") {
        sendResponse({number: tabCount});
    } else if (request.action === "getMaxTabs") {
        sendResponse({number: maxTabs});
    }
});