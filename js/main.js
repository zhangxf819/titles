/*
* @Author: 哈哈
* @Date:   2016-10-17 19:33:20
* @Last Modified by:   哈哈
* @Last Modified time: 2016-10-17 19:42:08
*/

'use strict';

var oC = document.getElementById("canvas");
	var arr = Array(801).join(0).split('');
	var arrY  = Array(101).join(0).split('');
	var arrX = Array(101).join(0).split('');
	var arrC = ["#fff","#0F0","#0e0","#0d0","#0c0","#0b0","#0a0","#0a0"]
	//alert(yPositions.length)
	
	var temp;
	for(var i = 0; i < arrY.length; i ++) {
		arrY[i] = Math.round(Math.random()*700);
		arrX[i] = Math.round(Math.random()*700);
	}
	function setChar(){
		for(var i =0;i<arr.length;i++){
			arr[i] = String.fromCharCode(1e2+Math.random()*34-7);
		}
	}

	
	var can  = oC.getContext("2d");
	
	var can1 = oC.getContext("2d");
	var can2 = oC.getContext("2d");
	var aa = document.getElementById("aa");
	var h = 0;
	var timer = null;
	
	function draw(){
		setChar();
		for(var i = 0;i<arrC.length;i++){
			can.fillStyle = arrC[i];
			for(var j = 0;j<100;j++){
				var tempY = arrY[j]+h-16*i;
				tempY%=700;
				if(tempY%700==600)arrX[j]=Math.round(Math.random()*700);
				can.fillText(arr[i*10+j],arrX[j],tempY);
				
			}
		}

		can.font = "16px 宋体"
	}
	function clear(){
		can.clearRect(0,0,500,500);
	}
	function Max(){
		timer = setInterval(function(){
			clear();
			draw();
			h+=3;
			//h%=700;
		},30)
	}
	Max();