window.onload = pageLoad;

function pageLoad(){
	var click = document.getElementById("start");
	click.onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer =  setInterval(timeCount,TIMER_TICK);
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");		
		x.innerHTML = second;
		if(second > -1){
			second--;
		}
		if(allbox.length ==0){	
			clearInterval(timer);
			alert("You Win");
			time = null;
		}
		else if(second == -1){
			clearInterval(timer);
			alert("Game Over");
			time = null;
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square" ;
		tempbox.classList.add(colorDrop)
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		var x  = document.getElementById("box");
		if(document.body.contains(x))
		{
			x.parentNode.removeChild(x);
		}
	}
}




