console.log("save_info.js loaded");
//declaring global vars
var blank = " ";
//function gets input from options.html and syncs it with Chrome user
function save_billing() {
	console.log("Saving and syncing billing info");
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var tel = document.getElementById('tel').value;
	var address = document.getElementById('address').value;
	var address2 = document.getElementById('address2').value;
	var zip = document.getElementById('zip').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var country = document.getElementById('country').value;
	var card = document.getElementById('card').value;
	var number = document.getElementById('number').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	var cvv = document.getElementById('cvv').value;
	chrome.storage.sync.set({
		name: name,
		email: email,
		tel: tel,
		address: address,
		address2: address2,
		zip: zip,
		city: city,
		state: state,
		country: country,
		card: card,
		number: number,
		month: month,
		year: year,
		cvv: cvv
	})
}

function save_size() {
	var size = document.getElementById('itemsize').value;
	console.log("Size set in var size")
	var findItem = document.getElementById("confirmitem").checked;
	var autoCartout = document.getElementById("autoCartout").checked;
	var autoBuy = document.getElementById("autobuy").checked;
    var searchitem = document.getElementById("searchItem").checked;
	chrome.storage.sync.set({
		size: size,
		findItem: findItem,
		autoCartout: autoCartout,
		autoBuy: autoBuy,
        searchitem: searchItem
	});
	console.log("Size synced to chrome")
}
//gets saved form data
function grabFormData() {
	chrome.storage.sync.get({
		name: '',
		email: '',
		tel: '',
		address: '',
		address2: '',
		zip: '',
		city: '',
		state: '',
		country: '',
		card: '',
		number: '',
		month: '',
		year: '',
		cvv: '',
		size: '',
		findItem: false,
		autoCartout: false,
	}, function (data) {
		document.getElementById('name').value = data.name;
		document.getElementById('email').value = data.email;
		document.getElementById('tel').value = data.tel;
		document.getElementById('address').value = data.address;
		document.getElementById('address2').value = data.address2;
		document.getElementById('zip').value = data.zip;
		document.getElementById('city').value = data.city;
		document.getElementById('state').value = data.state;
		document.getElementById('country').value = data.country;
		document.getElementById('card').value = data.card;
		document.getElementById('number').value = data.number;
		document.getElementById('month').value = data.month;
		document.getElementById('year').value = data.year;
		document.getElementById('cvv').value = data.cvv;
		document.getElementById('itemsize').value = data.size;
		document.getElementById('confirmitem').checked = data.findItem;
		document.getElementById('autoCartout').checked = data.autoCartout;
	});
}
//resets the billing information if autobill isn't checked
function resetBilling() {
	chrome.storage.sync.set({
		name: blank,
		email: blank,
		tel: blank,
		address: blank,
		address2: blank,
		zip: blank,
		city: blank,
		state: state,
		country: country,
		card: "Visa",
		number: blank,
		month: 06,
		year: 2020,
		cvv: blank
	}, function (data) {
		document.getElementById('name').value = data.name;
		document.getElementById('email').value = data.email;
		document.getElementById('tel').value = data.tel;
		document.getElementById('address').value = data.address;
		document.getElementById('address2').value = data.address2;
		document.getElementById('zip').value = data.zip;
		document.getElementById('city').value = data.city;
		document.getElementById('state').value = data.state;
		document.getElementById('country').value = data.country;
		document.getElementById('card').value = data.card;
		document.getElementById('number').value = data.number;
		document.getElementById('month').value = data.month;
		document.getElementById('year').value = data.year;
		document.getElementById('cvv').value = data.cvv;
		document.getElementById('itemsize').value = data.size;
		document.getElementById('confirmitem').checked = data.findItem;
		document.getElementById('autoCartout').checked = data.autoCartout;
	});
}
var save = document.getElementById('save');
var reset = document.getElementById('reset');
save.addEventListener('click', function () {
	console.log("Save clicked");
	save_billing();
	if ($('#confirmitem').is(':checked')) {
		console.log("Item confirm checked")
		save_size();
		console.log("Size saved")
	} else {
		chrome.storage.sync.set({
			size: null,
			findItem: findItem,
			autoCartout: autoCartout
		});
	}
});
reset.addEventListener('click', function(){
	resetBilling();
});
window.onload = function () {
	console.log("Getting previously filled data");
	grabFormData();
};
