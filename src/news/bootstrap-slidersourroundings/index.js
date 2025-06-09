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
		var mySize=$(".mycarousel-item").length;
		var active="active";
		for (var i=0;i<mySize;i++){		
			$(".mycarousel-item")[i].closest('.align-items-undefined').className += " carousel-item " + active;
			active="";
		}
}


$( document ).ready(function() {	
	if (layoutMode=='view'){
		var mySize=$(".mycarousel-item").length;
		var active="active";
		for (var i=0;i<mySize;i++){
			$(".mycarousel-item")[i].parentNode.parentNode.className += " carousel-item " + active;
			active="";
		}		
	}else{
		const elementNode = document.querySelector('.carousel-inner').querySelector('.lfr-layout-structure-item-collection');

		observer.observe(elementNode, { 
    	attributes: false, 
    	childList: true, 
    	subtree: false }
		)
	}
})