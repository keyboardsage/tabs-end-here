# tabs-end-here
A chrome web browser extension to prevent you from opening anymore tabs.

# How it Works
When you first enable it, a count of the number of tabs open is done.

Anytime you try to open a tab that exceeds that number, you are denied. And anytime you remove a tab, thats the new number you can't exceed.

This forces you to repurpose open tabs that already exist.

When you think you have gotten down to a reasonable number, simply disable or uninstall the extension.

# Installing
1. Clone the repo
2. Navigate to chrome://extensions
3. Click "Load Unpacked"
4. Choose the src directory in the dialog

# Using the Software
1. Open a new tab, it will be immediately be closed by the extension
2. To see your maximum number of tabs click the extension (the one with the icon that looks like a red hand gesturing "stop")

# Future Plans
Currently the maximum number of tabs and the tab count are always the same. In the future there will be a target tab count.  

When the target number of tabs is reached, the maximum number of tabs will be set to the target number of tabs. This will you once again create new tabs, but only up to your target number.

This will ensure that you don't go overboard with tabs again.

# Icon
Thanks to Font Awesome for the icon
[hand](https://fontawesome.com/icons/hand?f=classic&s=solid&pc=%23c41212)