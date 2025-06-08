$( document ).ready(function() {	
	if (layoutMode=='view'){
		var mySize=$(".mycarousel-item").length;
		var active="active";
		for (var i=0;i<mySize;i++){
			$(".mycarousel-item")[i].parentNode.parentNode.className += " carousel-item " + active;
			active="";
		}		
	}else{
		setTimeout(function(){
		var mySize=$(".mycarousel-item").length;
		var active="active";
		for (var i=0;i<mySize;i++){		
			$(".mycarousel-item")[i].closest('.align-items-undefined').className += " carousel-item " + active;
			active="";
		}
		}, 2000);	
	}
}
)