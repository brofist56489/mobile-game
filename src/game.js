window.onload = (function() {
	const CANVAS_ID = "GAME_CANVAS";

	var canvas;
	var ctx;

	function initCanvas(id) {
		canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
		return canvas != null && ctx != null;
	}

	// Main Function
	return function() {
		if(!initCanvas(CANVAS_ID)) {
			alert("Something went wrong loading the canvas");
			return;
		}
		console.log("LOADED");

		canvas.width = 240 * 2;
		canvas.height = 240 * 3;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, 240 * 2, 240 * 3);
	}
})();
