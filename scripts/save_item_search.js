console.log("save_item_search.js loaded");
function saveItem() {
	var itemType = document.getElementById('itemtype').value;
	var itemName = document.getElementById('itemname').value;
	var itemColor = document.getElementById('itemcolor').value;
	var searchItem = document.getElementById('searchItem').checked;

	chrome.storage.sync.set({
		itemType: itemType,
		itemName: itemName,
		itemColor: itemColor,
		searchItem: searchItem
	})
};

function grabItemData() {
	chrome.storage.sync.get({
		itemType: itemType,
		itemName: itemName,
		itemColor: itemColor,
		searchItem: false
	}, function(data){
		document.getElementById('itemtype').value = data.itemType;
		document.getElementById('itemname').value = data.itemName;
		document.getElementById('itemcolor').value = data.itemColor;
		document.getElementById('searchItem').checked = data.searchItem;
	})
}
var save = document.getElementById('save');
save.onclick = function () {
	saveItem();
};
/*document.onload = function () {
	grabItemData();
};*/
