function start(){
$(document).ready(function() {
function readIn(){
	$('#calender').fullCalendar({
		    defaultView: 'timelineMonth',
		    events: [
		        dinner, party
		    ],
		    resources: [
		        testing, other, cat,
		    ]
		    // other options go here...
		});

};

$('#tcalender').fullCalendar({
	schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
});

});

};