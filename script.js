//your JS code here. If required.
function displayBrowswerInfo(){
	let browserName = navigator.appName;
	ler version = navigator.appVersion;

	const browserinfoDiv = document.getElementById("browser-info");

	const message = "you are using" + browserName +
	 "version" + version;

	browserinfoDiv.textContent = message;
	
}
window.onload = displayBrowswerInfo;