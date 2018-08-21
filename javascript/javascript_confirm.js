function javascript_confirm($msg) {
	
	var message = $msg;

	
	var return_value = confirm(message);

	// TEST TO SEE IF TRUE|FALSE RETURNED
	if (return_value == true) {
		return true ; 
	} else {
		return false ; 
	}
}