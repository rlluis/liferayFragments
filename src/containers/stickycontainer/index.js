var control_menu=$(".control-menu").length>0;

	var change_tracking_indicator = $(".change-tracking-indicator").length>0;

	if (layoutMode=='view'){
	  if (control_menu) {
				$(".InsideSticky").addClass('has_controlpanel');
		}
		if (change_tracking_indicator){
				$(".InsideSticky").addClass('has_publications');
		}
	}else{
		  $(".InsideSticky").removeClass('InsideSticky');
	}