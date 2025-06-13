var llamado=false;
const observer = new MutationObserver((mutationsList, observer) => {
    for(const mutation of mutationsList) {
        if (mutation.type == 'childList') {
					const nodes = mutation.addedNodes;
          nodes.forEach(node => {
                if (node.className.includes('row')&&(!llamado)){
									llamado=true;
									initializeSlider();
								}
          });
				
				}
    }
}); 

function initializeSlider(){
		var mySize=$("#" + fragmentElement.id + " .mycarousel-item").length;
		var active="active";
		for (var i=0;i<mySize;i++){		
			$("#" + fragmentElement.id + " .mycarousel-item")[i].closest('.align-items-undefined').className += " carousel-item " + active;
			active="";
		}
}


$( document ).ready(function() {	
	if (layoutMode=='view'){
		var mySize=$("#" + fragmentElement.id + " .mycarousel-item").length;
		var active="active";
		for (var i=0;i<mySize;i++){
			$("#" + fragmentElement.id + " .mycarousel-item")[i].parentNode.parentNode.className += " carousel-item " + active;
			active="";
		}		
	}else{

		const elementNode = fragmentElement.querySelector('.carousel-inner').querySelector('.lfr-layout-structure-item-collection');

		observer.observe(elementNode, { 
    	attributes: false, 
    	childList: true, 
    	subtree: false }
		)
	}
})
