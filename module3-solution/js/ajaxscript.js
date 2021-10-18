(function (global){

	var ajaxUtils = {};

	function getRequestObject(){
		if (global.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
	}

	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler){
		var request = getRequestObject();
		request.onreadystatechange = 
		function (){
			handleResponse(request, responseHandler);
		} 
		request.open("GET", requestUrl, true);
		request.send(null);
	};

	function handleResponse(request, responseHandler){
		if ((request.readyState == 4) && (request.status == 200)){
			responseHandler(request);
		}
	}

	global.$ajaxUtils = ajaxUtils;
})(window);