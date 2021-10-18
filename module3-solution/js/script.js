document.addEventListener("DOMContentLoaded", 
	function (event){
		function changeBackground1(event){
			if (event.region = "inside1"){
				this.style.backgroundColor = "#ffb6c1";
			}
		}

		function changeBackground2(event){
			if (event.region = "inside2"){
				this.style.backgroundColor = "#00b612";
			}
		}
	document.querySelector(".inside1").onclick = changeBackground1;
	document.querySelector(".inside2").onclick = changeBackground2;
	// document.querySelector(".inside1").onclick = changeBackground;

	document.querySelector(".expand").addEventListener("click", function(){
		$ajaxUtils.sendGetRequest("data/contents.txt", function(request){
			var content = request.responseText;
			document.querySelector(".content").textContent = content;
		})
	})
});