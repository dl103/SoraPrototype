function changeInfo(intId) {
	if(intId == 1) {
		document.getElementById("gameInfoHeaderText").innerHTML="Assassin's Creed IV: Black Flag";
	};
	if(intId == 2) {
		document.getElementById("gameInfoHeaderText").innerHTML="Civilization V";
	};
	if(intId == 3) {
		document.getElementById("gameInfoHeaderText").innerHTML="DotA 2";
	};
	if(intId == 4) {
		document.getElementById("gameInfoHeaderText").innerHTML="Street Fighter IV";
	};
}

function buttonPress() {
	var x;
	var r = confirm("Load Game!");
	if (r==true) {
		x="You pressed OK!";
	} else {
 		x="You pressed Cancel!";
 	}
	document.getElementById("myAnchor").innerHTML=x;
}

function enlarge(img) {
	var width = img.clientWidth;
	var height = img.clientHeight;
	img.style.width = 2 * width + "px";
	img.style.height = 2 * height + "px";
}

function reduce(img) {	
	var width = img.clientWidth;
	var height = img.clientHeight;
	img.style.width = width / 2 + "px";
	img.style.height = height / 2 + "px";
}

function launchDemo() {
	chrome.app.window.create("client.html",
    {  frame: "none",
       id: "framelessWinID",
       bounds: {
         width: 1,
         height: 1
       }
    }, function(win) {
    	win.fullscreen();
    }
  );
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('assassinsCreed').addEventListener('click', function() {
		changeInfo(1);
	});
	document.getElementById('civilizationV').addEventListener('click', function() {
		changeInfo(2);
	});
	document.getElementById('dota2').addEventListener('click', function() {
		changeInfo(3);
	});
	document.getElementById('streetFighter4').addEventListener('click', function() {
		changeInfo(4);
	});
	document.getElementById('launchButton').addEventListener('click', function() {
		launchDemo();
	});
	changeInfo(1);
});