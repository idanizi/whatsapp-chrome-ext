const id = "sendWhatsAppMessage";
const menuItem = {
    id,
    title: "Send WhatsApp Message",
    contexts: ["selection"],
}

const uri = number => `https://wa.me/${number}`;

const localPrefix = '972';

/** @param {string} text */
const textToNumber = text => {
    text = text.replace(/\D/g, '').replace(/^0/, '');
    if (!text.startsWith(localPrefix)) {
        text = localPrefix + text;
    }

    return text;
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(clickData => {
    const { selectionText, menuItemId } = clickData;
    if (menuItemId == id && selectionText) {
        const number = textToNumber(selectionText);
        chrome.storage.sync.set({ selection: number });
        openInNewTab(uri(number));
    }
})