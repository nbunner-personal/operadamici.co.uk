   //Sortable.create("sortable_list");


function getOrder() {
	
  //var orderList = Sortable.serialize("sortable_list");
	//document.getElementById('sort_values').value = orderList;
	var update_form = document.getElementById('update_form_button');
	var orderList = '';
	  orderedNodes = document.getElementById("sortable_list").getElementsByTagName("li");
	  for (var i=0;i < orderedNodes.length;i++) {
	    orderList += orderedNodes[i].getAttribute('id') + ' ';
	    }  
	
	document.getElementById('sort_values').value = orderList;
	//alert(orderList);
	new Ajax.Updater('update_form_button', '/robin_admin/ajax/ajax_sort_update.php');
		//alert(orderList);
	//document.forms['change_sort_order'].submit();
  //$('static_example').innerHTML = orderList;
	//new Ajax.Updater('content_main', '/robin_admin/links/update_order.php?value='+orderList);
	//new Ajax.Updater('sortable_list', '/robin_admin/links/update_order.php', params = document.getElementById('sort_values').value);
	
//new Ajax.Updater('display_all', '/robin_admin/get_postcode.php?postcode='+postcode_in, {asynchronous:true});

}


function submitOrder() {

  //var orderList = Sortable.serialize("sortable_list");
	//document.getElementById('sort_values').value = orderList;
	//var update_form = document.getElementById('update_form_button');
	var orderList = '';
	  orderedNodes = document.getElementById("sortable_list").getElementsByTagName("li");
	  for (var i=0;i < orderedNodes.length;i++) {
	    orderList += orderedNodes[i].getAttribute('id') + ' ';
	    }  
	//alert(orderList);
	document.getElementById('sort_values').value = orderList;
	document.change_sort_order.submit();
	

}


function saveSort() {
	//var hereWeAre = 'here we are';
	//alert(hereWeAre);

	new Ajax.Request("update_sort.php", {
	            method: "post",
	            parameters: { data: Sortable.serialize("list_to_sort") }
	        });
	
}


function showButton() {
	new Ajax.Updater('update_form_button', '/robin_admin/ajax/ajax_sort_update.php', {asynchronous:true});
  }



function showEdit() {
	new Ajax.Updater('photos_container', '/robin_admin/photos/ajax_edit_list.php', {asynchronous:true});
  }


function showMove() {
	new Ajax.Updater('photos_container', '/robin_admin/photos/ajax_move_list.php', {asynchronous:true});
  }



function hideButton() {
	
	new Ajax.Updater('update_form_button', '/robin_admin/ajax/ajax_hide_update.php', {asynchronous:true});
	
}
