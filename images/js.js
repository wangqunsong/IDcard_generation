function clearDefaultText (el,message){
	var obj = el;
	var searchbox = document.getElementById('searchbox');
	if(typeof(el) == "string")
		obj = document.getElementById(id);
	if(obj.value == message){
		obj.value = "";
		searchbox.className ="header-focus";
	}
	obj.onblur = function(){
		if(obj.value == ""){
   			obj.value = message;
			searchbox.className ="searchbox";
		}
	}
}