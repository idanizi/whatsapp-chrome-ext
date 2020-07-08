$(function () {
    chrome.storage.sync.get('selection', items => {
        const { selection } = items;
        if (selection) {
            $("#heading").text('Sending message to:');
            $("#number").text(selection);
        }
    })
})

