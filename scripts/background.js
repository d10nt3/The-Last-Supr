console.log("Background loaded");
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == 'get') {
        sendResponse({
            size: localStorage.size,
        });
    }
    return true;
});
$('.sold_out_tag').css({
    display: "block",
    color: "black"
});
