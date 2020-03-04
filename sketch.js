var direction = -1; // -1 fades down, 1 fades up; direction initialised at -1 so that you have to click the mouse to change direction to fade up
var fadeColour = 0; // r'G'b value of fading colour starts with black
 
// change the variables to direction 1 and fadeColour 255 to start off with green instead of black    
 
function setup() {
  createCanvas(1000, 1000);
  createP('');
  createButton('click me').mousePressed(swap);
}


function draw() {

<button onclick="document.getElementById('foo').jscolor.show()">
    	Show Picker</button>

	<button onclick="document.getElementById('foo').jscolor.hide()">
    	Hide Picker</button>

	<p><input id="foo" class="jscolor" value="cc4499"> 

}
 
function swap() {
  if (direction == 1) direction = -1; // if we've faded up, change direction to fading down
  else if (direction == -1) direction = 1; // if we've faded down, change direction to fading up
}





	<script src="libraries/jscolor.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">


<style>
h2 {
font-size: 60px;
font-family: 'Open Sans Condensed', sans-serif;

#foo {
	width: 60%;
	height: 40%;
}


</style>

<body style="text-align:center;">

	<h2 class ="title">LED Light Picker</h2>
	
	<button onclick="document.getElementById('foo').jscolor.show()">
    	Show Picker</button>

	<button onclick="document.getElementById('foo').jscolor.hide()">
    	Hide Picker</button>

	<p><input id="foo" class="jscolor" value="cc4499"> 



</body>