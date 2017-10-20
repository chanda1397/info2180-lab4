window.onload = function () {
	  main();
	};
	

	function main() 
	{
		var boundary1 = document.getElementById("boundary1");
		boundary1.onmouseover = function() {
			this.setAttribute("class", "boundary youlose");
		};
		
		var boundary = document.querySelectorAll(".boundary");
		var i = 0;
		var a = 0;
		var g = 0;
		for ( i = 0; i < boundary.length; i++)
		{
			boundary[i].onmouseover = function(){
				for ( a = 0; a< boundary.length-1;a++){
					boundary[a].setAttribute("class","boundary youlose");
					
				}
				g++;
				document.getElementById("status").innerHTML = "You lose";
			}
		}
		var end = document.getElementById("end");
		end.onmouseover = function(){
			if (g == 0)
			{
				//window.alert("You Win");
				document.getElementById("status").innerHTML = "You Win";
			};
		};
		
		var start = document.getElementById("start");
		start.onclick = function(){
			g=0;
			console.log('test');
			document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";
			for ( i = 0; i < boundary.length-1;i++) {
				boundary[i].setAttribute("class","boundary boundary");
			};
			var maze = document.getElementById("maze");
			document.onmousemove = function (event) {
				var x = event.clientX;
				var y = event.clientY;
				var left = maze.offsetLeft;
				var right = maze.offsetRight;
				var height = maze.offsetHeight;
				var width = maze.offsetWidth;
				var top = maze.offsetTop;
				if ((x < left)||(x < right))
				{
					for (a = 0; a< boundary.length ; a++)
					{
						boundary[a].setAttribute("class","boundary youlose");
					}
				};
			};
			
		};
		
		
	};	

