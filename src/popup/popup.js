$(function () {
    chrome.storage.sync.get('selection', items => {
        const { selection } = items;
        if (selection) {
            $("#greeting").text(`sending message to: ${selection}`)
        }
    })
})

