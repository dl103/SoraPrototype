function changeInfo(intId) {
	if(intId == 1) {
		document.getElementById("gameInfoHeaderText").innerHTML="Assassin's Creed IV: Black Flag";
		document.getElementById("gameInfoSlide").innerHTML="The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace. Among these outlaws is a brash young captain named Edward Kenway.";
		document.getElementById("gameVideoSlide").src="http://www.youtube.com/embed/IDlEwUP7lps?autoplay=1";
		document.getElementById("map").src="ac4.jpg";
	};
	if(intId == 2) {
		document.getElementById("gameInfoHeaderText").innerHTML="Civilization V";
		document.getElementById("gameInfoSlide").innerHTML="The Flagship Turn-Based Strategy Game Returns Become Ruler of the World by establishing and leading a civilization from the dawn of man into the space age: Wage war, conduct diplomacy, discover new technologies, go head-to-head with some of history’s greatest leaders and build the most powerful empire the world has ever known.";
		document.getElementById("gameVideoSlide").src="http://www.youtube.com/embed/l-y99pkS_Vs?autoplay=1";
		document.getElementById("map").src="civ5.jpg";
	};
	if(intId == 3) {
		document.getElementById("gameInfoHeaderText").innerHTML="DotA 2";
		document.getElementById("gameInfoSlide").innerHTML="Dota is a competitive game of action and strategy,played both professionally and casually by millions of passionate fans worldwide. Players pick from a pool of over a hundred heroes, forming two teams of five players.";
		document.getElementById("gameVideoSlide").src="http://www.youtube.com/embed/-cSFPIwMEq4?autoplay=1";
		document.getElementById("map").src="dota2.jpg";
	};
	if(intId == 4) {
		document.getElementById("gameInfoHeaderText").innerHTML="Street Fighter IV";
		document.getElementById("gameInfoSlide").innerHTML="Super Street Fighter® IV Arcade Edition, brings the definitive vision of Street Fighter® to the PC. The follow-up to the critically acclaimed Super Street Fighter® IV will further redefine the fighting game genre with classic 2D Street Fighter fighting action, a host of new and returning characters, beefed up online modes, and more.";
		document.getElementById("gameVideoSlide").src="http://www.youtube.com/embed/2uOt-XmNrQw?autoplay=1";
		document.getElementById("map").src="sf4.jpg";
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

function showCoordinates(e, img) {
	x = e.clientX - 339;
	y = e.clientY - 235;
	coor = "Coordinates: (" + x + "," + y + ")";
	document.getElementById("desc").innerHTML=coor;
}
function clearCoor() {
	document.getElementById("desc").innerHTML="";
}
function writeText(txt) {
	document.getElementById("annotation").innerHTML=txt;
}
function offsetX(img) { 
	var x = img.offsetLeft;
	return x;
}
function offsetY(img) { 
	var y = img.offsetTop; 
	return y;
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
	chrome.app.window.current().close();
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
	document.getElementById('map').addEventListener('mousemove', function() {
		showCoordinates(event, document.getElementById('map'));
	});
	document.getElementById('map').addEventListener('mouseout', function() {
		clearCoor();
	});
	document.getElementById('mapArea1').addEventListener('mouseover', function() {
		writeText('duke it out');
	});
	document.getElementById('mapArea1').addEventListener('mouseout', function() {
		writeText('');
	});
	document.getElementById('mapArea2').addEventListener('mouseover', function() {
		writeText('cashin out');
	});
	document.getElementById('mapArea2').addEventListener('mouseout', function() {
		writeText('');
	});
	document.getElementById('mapArea3').addEventListener('mouseover', function() {
		writeText('look at dem cattles');
	});
	document.getElementById('mapArea3').addEventListener('mouseout', function() {
		writeText('');
	});
	changeInfo(1);
});