window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var isWhite = false; //设置是否该轮到白棋，黑棋先手
	var winner = ''; //赢家初始化为空
	//初始化二维数组
	var chessData = new Array(15);
	for(var i = 0; i < chessData.length; i++) {
		chessData[i] = new Array(15);
		for(var j = 0; j < 15; j++) {
			chessData[i][j] = 0;
		}
	}

	drawRect();

	function drawRect() {
		//标题  
		context.fillStyle = 'black';
		context.font = '40px Arial';
		context.fillText('Canvas五子棋', 330, 50);
		//新游戏  
		context.lineWidth = 2;
		context.strokeRect(790, 140, 120, 30);
		context.fillStyle = 'black';
		context.font = '25px Arial';
		context.fillText('再来一局', 800, 164);
		//游戏说明  
		context.fillStyle = 'black';
		context.font = 'bold 16px Arial';
		context.fillText('游戏规则：玩家执黑色', 789, 200);
		context.fillText('棋子先手，电脑执白色棋子', 755, 220);
		context.fillText('后手，任何一方形成五子连', 755, 240);
		context.fillText('珠，游戏终止。', 755, 260);
		//棋盘纵横线
		for(var i = 1; i < 16; i++) {
			context.beginPath();
			context.moveTo(40 * i + 140, 80);
			context.lineTo(40 * i + 140, 640);
			context.closePath();
			context.stroke();
			context.beginPath();
			context.moveTo(180, 40 * i + 40);
			context.lineTo(740, 40 * i + 40);
			context.closePath();
			context.stroke();
		}
	}

	/**鼠标点击事件 
	 * @param e
	 */
	canvas.onmousedown = function play(e) { //鼠标点击时发生  
		var color;
		var e = e || event;
		var px = e.clientX - 160; //减去160是因为canvas画布中棋盘第一根线距离左边是180的距离,再以每个横纵交点为圆心20px的范围内点击视为有效点击  
		var py = e.clientY - 60; //同上  
		var x = parseInt(px / 40);
		var y = parseInt(py / 40);
		console.log("px=" + px / 40 + ";py=" + py / 40);
		console.log("x=" + x + ";y=" + y);
		isNewGame(e.clientX, e.clientY); //是否点击了newgame  
		if(px < 0 || py < 0 || x > 14 || y > 14 || chessData[x][y] != 0) { //鼠标点击棋盘外的区域不响应  
			return;
		}
		doCheck(x, y);
	}

	/**根据颜色和传入的坐标,绘制棋子 
	 *  
	 */
	function chess(color, x, y) {
		context.fillStyle = color; //绘制黑棋  
		context.beginPath();
		context.arc(x * 40 + 180, y * 40 + 80, 15, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
		if(color == "white") {
			console.log("电脑在" + x + "," + y + "画了个白棋"); //console.log仅仅是为了调试方便  
			chessData[x][y] = 1; //chessDate存储棋盘棋子的信息  
		} else {
			console.log("电脑在" + x + "," + y + "画了个黑棋");
			chessData[x][y] = 2;
		}
	}
	//检查是否赢得比赛
	function doCheck(x, y) {
		if(winner != '' && winner != null) { //已经结束的游戏只能点击new game
			alert(winner);
			return;
		}
		if(isWhite) {
			color = "white";
		} else {
			color = "black";
		}
		console.log(color + "落子的位置是：" + x + "," + y);
		drawChess(color, x, y);
	}

	/** 落子
	 * @param  {[type]} turn [description]
	 * @param  {[type]} x    [description]
	 * @param  {[type]} y    [description]
	 * @return {[type]}      [description]
	 */
	function drawChess(color, x, y) { //参数为，棋（1为白棋，2为黑棋），数组位置
		if(x >= 0 && x < 15 && y >= 0 && y < 15) {
			if(color == "white") {
				chess("white", x, y);
				isWin("white", x, y); //判断输赢
				isWhite = false;
			} else {
				chess("black", x, y);
				isWin("black", x, y); //判断输赢
				isWhite = true;
			}
		}

	}

	/**新游戏按钮
	 * 
	 */
	function isNewGame(x, y) {
		if(x > 790 && x < 910 && y < 170 && y > 140) {
			if(confirm("开启一局新游戏？")) {
				window.location.reload();
			}
		}
	}
	/**判断此局游戏是否已有结果 
	 * 每次落子判断游戏是否胜利 
	 * 
	 */
	function isWin(color, x, y) {
		console.log("判断" + color + "(" + x + "," + y + ")是否胜利");
		var temp = 2; //默认为黑色  
		if(color == "white") {
			temp = 1;
		} //白色  
		console.log("temp=" + temp);
		lrCount(temp, x, y);
		tbCount(temp, x, y);
		rtCount(temp, x, y);
		rbCount(temp, x, y);
	}

	function lrCount(temp, x, y) {
		var line = new Array(4);
		var count = 0;
		for(var i = x; i >= 0; i--) {
			line[0] = i;
			line[1] = y;
			if(chessData[i][y] == temp) {
				++count;
			} else {
				i = -1;
			}
		}
		for(var i = x; i <= 14; i++) {
			line[2] = i;
			line[3] = y;
			if(chessData[i][y] == temp) {
				++count;
			} else {
				i = 100;
			}
		}
		success(line[0], line[1], line[2], line[3], temp, --count);
	}

	function tbCount(temp, x, y) {
		var line = new Array(4);
		var count = 0;
		for(var i = y; i >= 0; i--) {
			line[0] = x;
			line[1] = i;
			if(chessData[x][i] == temp) {
				++count;
			} else {
				i = -1;
			}
		}
		for(var i = y; i <= 14; i++) {
			line[2] = x;
			line[3] = i;
			if(chessData[x][i] == temp) {
				++count;
			} else {
				i = 100;
			}
		}
		success(line[0], line[1], line[2], line[3], temp, --count);
	}

	function rtCount(temp, x, y) {
		var line = new Array(4);
		var count = 0;

		for(var i = x, j = y; i <= 14 && j >= 0;) {
			line[0] = i;
			line[1] = j;
			if(chessData[i][j] == temp) {
				++count;
			} else {
				i = 100;
			}
			i++;
			j--;
		}
		for(var i = x, j = y; i >= 0 && j <= 14;) {
			line[2] = i;
			line[3] = j;
			if(chessData[i][j] == temp) {
				++count;
			} else {
				i = -1;
			}
			i--;
			j++;
		}
		success(line[0], line[1], line[2], line[3], temp, --count);
	}

	function rbCount(temp, x, y) {
		//右下斜判断  
		var line = new Array(4);
		var count = 0;

		for(var i = x, j = y; i >= 0 && j >= 0;) {
			line[0] = i;
			line[1] = j;
			if(chessData[i][j] == temp) {
				++count;
			} else {
				i = -1;
			}
			i--;
			j--;
		}
		for(var i = x, j = y; i <= 14 && j <= 14;) {
			line[2] = i;
			line[3] = j;
			if(chessData[i][j] == temp) {
				++count;
			} else {
				i = 100;
			}
			i++;
			j++;
		}
		success(line[0], line[1], line[2], line[3], temp, --count);
	}
	/**判断是否胜利及胜利之后的操作 
	 * @param  {[type]} turn  [description] 
	 * @param  {[type]} count [description] 
	 * @return {[type]}       [description] 
	 */
	function success(a, b, c, d, temp, count) {
		if(count == 5) { //因为落子点重复计算了一次  
			console.log("此局游戏结束啦");
			console.log("(" + a + "," + b + ")" + "到" + "(" + c + "," + d + ")");

			context.beginPath();
			context.lineWidth = 5;
			context.strokeStyle = 'purple';
			context.moveTo(40 * a + 180, 40 * b + 80);
			context.lineTo(40 * c + 180, 40 * d + 80);
			context.closePath();
			context.stroke();

			winner = "黑棋胜利!";
			if(temp == 1) {
				winner = "白棋胜利!";
			}
			alert(winner);
		}
	}
}