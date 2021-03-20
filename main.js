var canvas= new fabric.Canvas("myCanvas");

var player_object, block_object; 

var player_x = 10;
var player_y = 10;

function player_update(){
    console.log("inside player update");
    fabric.Image.fromURL("Groot.png", function(Img){
    player_object= Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
    top:player_y,
    left:player_x

    })

    canvas.add(player_object);

    });
}

var block_width = 30;
var block_height = 30;

function block_update(blocks){
    fabric.Image.fromURL(blocks, function(Img){
    block_object= Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x

    })

    canvas.add(block_object);

    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed== 40){
        down();
    }
    if (keypressed== 38){
        up();
    }
    if (keypressed== 37){
        left();
    }
    if (keypressed== 39){
        right();
    }
    if(keypressed == "70"){
        console.log("F is pressed");
        block_update("ironman_face.png");
    }

    if(keypressed == "66"){
        console.log("B is pressed");
        block_update("spiderman_body.png");
    }

    if(keypressed == "76"){
        console.log("L is pressed");
        block_update("captain_america_left_hand.png");
    }

    if(keypressed == "82"){
        console.log("R is pressed");
        block_update("thor_right_hand.png");
    }


    if(keypressed == "72"){
        console.log("H is pressed");
        block_update("hulk_legs.png");
    }

    if(e.shiftKey == true && keypressed == "107"){
        console.log("SHIFT and + are clicked together");
        block_width = block_width + 10;
        block_height = block_height + 10; 
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keypressed == "109"){
        console.log("SHIFT and + are clicked together");
        block_width = block_width - 10;
        block_height = block_height - 10; 
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
}

function right(){
    if(player_x<850){
       player_x  = player_x  + 10;
        canvas.remove(player_object);
        player_update() ;
    }
}

function left (){
    if(player_x>0){
       player_x  = player_x - 10;
       canvas.remove(player_object);
       player_update() ;
    }
}

function up (){
    if(player_y>0){
      player_y   = player_y - 10;
      canvas.remove(player_object);
        player_update() ;  
    }
}

function down(){
    if(player_y<350){
    console.log("down is clicked");
   player_y     =player_y + 10;
   canvas.remove(player_object);
   player_update() ;
    }
}


