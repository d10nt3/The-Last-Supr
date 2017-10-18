//Getting variables from Chrome user sync
var syncVars = ['name', 'email', 'tel', 'address', 'address2', 'zip', 'city', 'state', 'country', 'card', 'number', 'month', 'year', 'cvv', 'autoBuy'];
//Taking variables from Chrome sync and autofilling them on Supreme
chrome.storage.sync.get(syncVars, function (res) {
	console.log(res)
	$('#order_billing_name').val(res.name);
	$('#order_email').val(res.email);
	$('#order_tel').val(res.tel);
	$('#bo').val(res.address);
	$('#oba3').val(res.address2)
	$('#order_billing_zip').val(res.zip);
	$('#order_billing_city').val(res.city);
	$('#order_billing_state').val(res.state);
	$('#order_billing_country').val(res.country);
	$('#credit_card_type').val(res.card);
	$("#card_details > div > input").eq(0).val(res.number)
  	$("#card_details > div > input").eq(1).val(res.cvv)
	$('#credit_card_month').val(res.month);
	$('#credit_card_year').val(res.year);
	$('.iCheck-helper')[1].click();

	function autoCheckout() {
		if (res.autoBuy == true) {
			//warning if buy_auto on this will finish payment
			$('[name="commit"]').click()
		}
		chrome.runtime.sendMessage({
			type: "off"
		}, function (res) {});
	}
	setTimeout(autoCheckout, 3766);
});
