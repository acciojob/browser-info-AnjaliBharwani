const browser = document.getElementById("browser-info");
browser.textContent  = getBrowserInfo();

function getBrowserInfo(){
	const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
return `You are using ${browserName} version ${browserVersion}`;
}