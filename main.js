function game(){
	window.location="index.html";
}




//index.html related code

var canvas = new fabric.Canvas('myCanvas');

var audio= new Audio("bird.wav");
var audio1= new Audio("wronganswer.wav");
waste_y=200;
waste_x=400;
graybin_y=130;
graybin_x=800;



bottle_y=300;
bottle_x=10;
orangebin_y= 100;
orangebin_x=20;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("organicbin.jpg", function(Img) {
		organicbin_obj = Img;
		organicbin_obj.scaleToWidth(350);
		organicbin_obj.scaleToHeight(350);
		organicbin_obj.set({
			top:graybin_y,
			left:graybin_x
		});
		canvas.add(organicbin_obj);
		});

		
	fabric.Image.fromURL("plasticbin.png", function(Img) {
		plasticbin_obj = Img;
		plasticbin_obj.scaleToWidth(370);
		plasticbin_obj.scaleToHeight(370);
		plasticbin_obj.set({
		top:orangebin_y,
		left:orangebin_x
		});
		canvas.add(plasticbin_obj);
		});


		
	new_image();
}

function new_image()
{

	/*fabric.Image.fromURL("plastic_waste.jpg", function(Img) {
		bottle_obj = Img;
		bottle_obj.scaleToWidth(280);
		bottle_obj.scaleToHeight(280);
		bottle_obj.set({
			top:bottle_y,
			left:bottle_x
		});
		canvas.add(bottle_obj);
		});*/


		fabric.Image.fromURL("organic_waste.jpg", function(Img) {
			waste_obj = Img;
			waste_obj.scaleToWidth(150);
			waste_obj.scaleToHeight(150);
			waste_obj.set({
			top:waste_y,
			left:waste_x
			});
			canvas.add(waste_obj);
			});
	
	



	
	


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	if(waste_x==graybin_x){//(waste_y==graybin_y)){
		canvas.remove(waste_obj);
		console.log("Good job!!!");
		document.getElementById("hd3").innerHTML="You did a great job, you scored 5 points!!!";
	    document.getElementById("myCanvas").style.borderColor="green";
		audio.play();
		document.body.style.backgroundImage="url('envi.jpg')";
	}
	else if(waste_x==100){//||(waste_y==orangebin_y)){
		canvas.remove(plasticbin_obj);
		//console.log("Good job!!!");
		document.getElementById("hd3").innerHTML="You touched the wrong bin, you lost the game!!!";
	    document.getElementById("myCanvas").style.borderColor="red";
		audio1.play();
	}
	
	else{
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}

/*try*/
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}

		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	}

	function right()
	{
		if(waste_x <=1050)
		{
			waste_x = waste_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + waste_x + " , Y = "+waste_y);
			canvas.remove(waste_obj);
			new_image();
		}
	}


	/*try*/

	function up()
	{
		if(waste_y >=5)
		{
			waste_y = waste_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + waste_x + " , Y = "+waste_y);
			canvas.remove(waste_obj);
			new_image();
		}
	}

	function down()
	{
		if(waste_y <=550)
		{
			waste_y = waste_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + waste_x + " , Y = "+waste_y);
			canvas.remove(waste_obj);
			new_image();
		}
	}


	function left()
	{
		if(waste_x >5)
		{
			waste_x = waste_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + waste_x + " , Y = "+waste_y);
			canvas.remove(waste_obj);
			new_image();
		}
	}




	/*if((bottle_x==orangebin_x)||(bottle_y==orangebin_y)){
		canvas.remove(plasticbin_obj);
		console.log("Good job!!!");
		document.getElementById("hd3").innerHTML="You did a great job and you scored 10 points :)!!!";
	    document.getElementById("myCanvas").style.borderColor="green";
	}
	else
	{

		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	}

	function left()
	{
		if(bottle_x >5)
		{
			bottle_x = bottle_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(plasticbin_obj);
			new_image();
		}
	}*/
	


	
	
}

