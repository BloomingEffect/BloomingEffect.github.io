/*
-------------------------------------------------------------------------------------------------------------------------------
Late Blooming Effects Studio - The JavaScript
-------------------------------------------------------------------------------------------------------------------------------
*/

let myStoryButton;
let loadTimer;
let loadTimeLeft=5;
let getLoadScreen;
let showLoadScreen;

function loaderSetup()
{
	myStoryButton=document.getElementById("myStoryLink");
	myStoryButton.addEventListener("click",loadTime,false);
}

function loadTime()
{
	loadTimer=window.setInterval(loadScreen,1000);
}

function loadScreen()
{
	loadTimeLeft--;
	getLoadScreen=document.getElementById("loadScreen");
	
	showLoadScreen=getLoadScreen.innerHTML="Time left: "+loadTimeLeft;
	
	if(loadTimeLeft<=0)
	{
		window.clearInterval(loadTimer);
		window.location="MyStory/MyStoryBegins.html";
	}
}
window.addEventListener("load",loaderSetup,false);