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
	
	$('#m1-KBL_PSP-OverheadLights').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-All').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-AboutKBL').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-mute').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY

}


function allOff()
{
	$('#m1-KBL_PSP-Coupling').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-OilInlet').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-OilOutlet').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-TopMechanicalSeal').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-MiddleMechanicalSeal').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-BottomMechanicalSeal').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-ThrustBearing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-RadialBearing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-HydrostaticBearing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-Shaft').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-SuctionCasing').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-Impeller').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-Diffuser').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-SodiumFlow').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-PipeReceptacle').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY
	$('#m1-KBL_PSP-DischargePipe').css({'background-image': 'linear-gradient(to top, #404040 0%,  #404040 49.9%, #465151 50%, #677777 100%'}); //DARK GREY

	
}

function allOn()
{
	$('#m1-KBL_PSP-Coupling').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-OilInlet').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-OilOutlet').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-TopMechanicalSeal').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-MiddleMechanicalSeal').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-BottomMechanicalSeal').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-ThrustBearing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-RadialBearing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-HydrostaticBearing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-Shaft').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-SuctionCasing').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-Impeller').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-Diffuser').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-SodiumFlow').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-PipeReceptacle').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY
	$('#m1-KBL_PSP-DischargePipe').css({'background-image': 'linear-gradient(to top, #808080 0%,  #808080 49.9%, #839494 50%, #A9B4B4 100%)'}); //LIGHT GREY

}
