var Now = new Date();
var nowHour = Now.getHours();
var nowMins = Now.getMinutes();

function pluszero(time){
	var time = time.toString();
	if(time.length < 2){
		time = '0' + time;
		return time;
	} else {
		return time;
	}
}

nowHour = pluszero(nowHour);
nowMins = pluszero(nowMins);

var nowtime = nowHour + nowMins;

var dawn = 0400
var morning = 0600
var lateMorning = 0800
var afternoon = 1200
var evening = 1800
var lateEvening = 2000
var night = 2200


if( nowtime > dawn && nowtime < morning ) {
	$('.sky').css("background-color", "#213a5f");
}

if( nowtime > morning && nowtime < lateMorning ) {
	$('.sky').css("background-color", "#ec86ec");
}

if( nowtime > lateMorning && nowtime < afternoon ) {
	$('.sky').css("background-color", "#21c0fc");
}

if( nowtime > afternoon && nowtime < evening ) {
	$('.sky').css("background-color", "#2993fc");
}

if( nowtime > evening && nowtime < lateEvening ) {
	$('.sky').css("background-color", "#ff8150");
}

if( nowtime > lateEvening && nowtime < night ) {
	$('.sky').css("background-color", "#213a5f");
	$('.title').css("color", "white");
	$('#clock').css("color", "white");
}

if( nowtime > night || nowtime < dawn ) {
	$('.sky').css("background-color", "#000000");
	$('.title').css("color", "white");
	$('#clock').css("color", "white");
	$('.star').show().each(function(){
		$(this).css({
			'top': Math.random() * ($('.sky').height() - $('.star').height()),
			'left': Math.random() * ($('.sky').width() - $('.star').width())
		});
	})
}
