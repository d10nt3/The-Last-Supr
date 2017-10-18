function setBillingVars() {
	this.name = document.getElementById('name').value;
	this.email = document.getElementById('email').value;
	this.phone = document.getElementById('tel').value;
	this.address = document.getElementById('address').value;
	this.zip = document.getElementById('zip').value;
	this.city = document.getElementById('city').value;
	this.state = document.getElementById('state').value;
	this.country = document.getElementById('country').value;
	this.card_type = document.getElementById('card').value;
	this.card_number = document.getElementById('number').value;
	this.exp_mon = document.getElementById('month').value;
	this.exp_yr = document.getElementById('year').value;
	this.cvv = document.getElementById('cvv').value;
}

function executeAutofill() {
	console.log("Here we go boys")
	$('#order_billing_name').val(name);
	$('#order_email').val(email);
	$('#order_tel').val(phone);
	$('#bo').val(address);
	$('#order_billing_zip').val(zip);
	$('#order_billing_city').val(city);
	$('#order_billing_state').val(state);
	$('#order_billing_country').val(country);
	$('#credit_card_type').val(card_type);
	$('#cnb').val(card_number);
	$('#credit_card_month').val(exp_mon);
	$('#credit_card_year').val(exp_yr);
	$('#cvw').val(cvv);
	$('#cvv').val(cvv);
	$('.iCheck-helper').true;

	/*  if(buy_auto){
	    //warning if buy_auto on this will finish payment
	    $('[name="commit"]').click()
	  }*/
	//chrome.runtime.sendMessage({type: "off"}, function(res){});

};
document.addEventListener('DOMContentLoaded', function () {
	var save = document.getElementById('save');
	var reset = document.getElementById('reset');
	save.onclick = function () {

	}
});


/*if ($('#autofill-billing').prop('checked')){
	executeAutofill();
};*/
