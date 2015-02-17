/**
 * Notification that the UI is about to transition to a new screen.
 * Perform custom prescreen-transition logic here.
 * @param {String} currentScreenId 
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */


url = "http://192.168.1.20:8080/";
Play = 0;
var myVar;
var myTurb;
var Lang = 1;


phoneui.prePageTransition = function(currentScreenId, targetScreenId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transitioned to a new screen.
 * 
 * @param {String} newScreenId 
 */
phoneui.postPageTransition = function(newScreenId) {
  
}

/**
 * Notification that the page's HTML/CSS/JS is about to be loaded.
 * Perform custom logic here, f.e. you can cancel request to the server.
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue loading; false to halt loading
 */
phoneui.prePageLoad = function(targetScreenId) {
  // add custom pre-load code here
  // return false to terminate page loading, this cancels transition to page as well
  return true;
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
	allOff();
	$.get(url + "?clrAll=0", function(data,status){});
	$('#m1-KBL_SSP-OverheadLights').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-All').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-AboutKBL').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-mute').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
}

document.addEventListener("backbutton", onBackKeyDown, false);

document.addEventListener("offline", onOffline, false);

document.addEventListener("online", onOnline, false);

document.addEventListener("home", onHomeKeyDown, false);

function onOffline() {
	clearInterval(myVar);
	allOff();
	alert("OFFLINE!\nKindly wait for The Tablet of connect to the model's WiFi.\nIf the WiFi does not connect in 2 minutes, conncet manualy.");
}

function onOnline() {
	clearInterval(myVar);
	allOff();
	$.get(url + "?clearAll=0", function(data,status){});
}

function onBackKeyDown() {
	clearInterval(myVar);
	allOff();
	$.get(url + "?clearAll=0", function(data,status){});
}

function onHomeKeyDown() {
	alert("HOMEKEY");
	clearInterval(myVar);
	allOff();
	$.get(url + "?clearAll=0", function(data,status){});
}
function allOff()
{
	$('#m1-KBL_SSP-Coupling').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-OilInlet').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-OilOutlet').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-TopMechanicalSeal').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-SodiumLevelProbes').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-BottomMechanicalSeal').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-MiddleMechanicalSeal').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-ThrustBearing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-OverFlowLine').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-HydrostaticBearing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-Shaft').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-SuctionCasing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-Impeller').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-Diffuser').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-SodiumFlow').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-DischargeCasing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_SSP-SodiumOutlet').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY

}

function allOn()
{
	$('#m1-KBL_SSP-Coupling').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-OilInlet').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-OilOutlet').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-TopMechanicalSeal').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-SodiumLevelProbes').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-BottomMechanicalSeal').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-MiddleMechanicalSeal').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-ThrustBearing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-OverFlowLine').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-HydrostaticBearing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-Shaft').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-SuctionCasing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-Impeller').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-Diffuser').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-SodiumFlow').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-DischargeCasing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_SSP-SodiumOutlet').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
}


