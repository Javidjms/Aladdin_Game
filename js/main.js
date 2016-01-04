// Request Animation Frame - Met à jour les animations et boucle la fonction principale

var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Déclarations des variables
var rocks = [], 
    hand = [],
    timeSpeed, //Temps d'une boucle de jeu
    AlertTime, // Temps d'alerte de la main
    timeDealert, // Temps de fin d'alerte
    gameTime, //Temps de jeu
    menuTime = 0, //Temps pour le menu
    random_choice, 
    choice, 
    nb_choice,
    increase, //booléen pour l'incrémentation des paramètres de jeux
    middle, // évènement milieu
    rocker, // évènement rocher
    hander, // évènement main
    menu_exit = false,
    genie_start = false, 
    genie_flag = false,
    invincibility,
    reverse,
    invincibility_level, 
    reverse_level, 
    HighScore = 0,
    score = 0,
    isGameOver,
    backgroundPattern,//arrière plan
    playerSpeed, //vitesse du joueur
    itime, //temps d'invincibilité ou de reverse
    AllSpeed; //vitesse du jeu


	

// Chargement des Images
resources.load([
	'img/aladdin-carpet.png',
	'img/invincibility.png',
	'img/background.png',
    'img/background1.png',
    'img/carpet.png',
	'img/hand_up.png',
	'img/hand_down.png',
	'img/lava.png',
	'img/menu.jpg',
	'img/genie-start.png',
	'img/aladdin-title.png',
	'img/abu.png',
	'img/gameover.png',
	'img/genie-flag.png',
	'img/invincibility.png',
	'img/reverse.png',
	'img/missile.png',
	'img/kamek.png',
	'img/iagoenemy.png',
	'img/Gintoki.png',
	'img/boo.png',
	'img/sonicfont.png',
	'img/sonic.png',
	'img/sonic2.png',
	'img/beam.png',
	'img/beam-long.png',
    'img/rock.png'
]);
resources.onReady(init);

// Chargement des Musiques et des images du menu
var stage_music = new Audio('mp3/rug-ride.mp3');
stage_music.loop= true;
var intro_music = new Audio('mp3/intro.mp3');
intro_music.loop= true;
var invincibility_music = new Audio('mp3/bonus.mp3');
var menu_image = new Image();
menu_image.src = 'img/menu.jpg';
var menu_title = new Image();
menu_title.src = 'img/aladdin-title.png'; 

// Creation du canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 340;
document.body.appendChild(canvas);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Creation des Sprites 
var player = {
    pos: [0, 0],
    sprite: new Sprite('img/aladdin-carpet.png', [0, 0], [52, 39], 5, [0, 1, 2, 3,4])
};

var carpet = {
    pos: [0, 0],
    sprite: new Sprite('img/carpet.png', [0, 0], [99.4, 21], 10, [0, 1, 2, 3, 4])
};

var background_scroll={
    pos: [0, 0],
    sprite: new Sprite('img/background1.png', [0, 0], [1440, 28], 1, [0])
};

var lava_scroll={
    pos: [0, 0],
    sprite: new Sprite('img/lava.png', [0, 0], [1332, 50], 1, [0])
};

var genie_start_img= {
	pos: [220, 100],
	sprite: new Sprite('img/genie-start.png', [0, 0], [70, 122], 6, [9,9,9,9,9,9,9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0])
};

var abu= {
	pos: [canvas.width/2, 200],
	sprite: new Sprite('img/abu.png', [0,0], [72, 66], 6, [0,1,2,3,4,5])
};

var dead={
	pos:[200, 130],
	sprite: new Sprite('img/gameover.png', [0,0], [80, 90], 5, [0,1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,24,24,24,24,24])
};

var genie_flag_img = {
	pos:[0, 135],
	sprite : new Sprite('img/genie-flag.png', [0,0], [110, 60], 5, [0,1,2,3,4,5,6,7,8])
};

var invincibility_img = {
	pos:[canvas.width,110],
	sprite : new Sprite('img/invincibility.png', [0,0], [50.5, 54], 5, [0,1,2,3])
};

var reverse_img = {
	pos:[canvas.width,110],
	sprite : new Sprite('img/reverse.png', [0,0], [50,50], 1, [0])
};


 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



// Boucle principale du jeu
var lastTime;
function main() {
    
	
	Menu();
	if(menu_exit && !genie_start){
		var now = Date.now();
		var dt = (now - lastTime) / 1000.0;   // 60 fps -- sorte de Settimeout
		update(dt);
		render();
		
		lastTime = now;
    }
    requestAnimFrame(main);
    
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Fonction du Menu
function Menu() {
	if(!menu_exit) {
		gameOver(0);
		ctx.drawImage(menu_image, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(menu_title, 100, 0, 300, 150);
		ctx.fillStyle='rgba(255,255,255,1)';
		ctx.font='30px Century Solid';
		ctx.fillText("PRESS SPACE TO START",100,canvas.height-50,300);
		intro_music.play();
		   
		if(input.isDown('SPACE')) {
			intro_music.pause();
			genie_start=true;
			menu_exit = true;
		}
	}
	if(genie_start && menu_exit){ //Animation du Genie Start
		var now = Date.now();
   		var dt = (now - lastTime) / 1000.0;
   		menuTime++;
   		ctx.fillStyle="#000000";
   		ctx.fillRect(0,0,canvas.width,canvas.height);
   		genie_start_img.sprite.update(dt);
        renderEntity(genie_start_img);
        
        if(menuTime>250){
			genie_start = false;
			init();
        }
   		lastTime = now;  
	}
	
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// Fonction Initialisation -- Arrière plan
function init() {
    backgroundPattern = ctx.createPattern(resources.get('img/background.png'), 'repeat');
    reset();
    lastTime = Date.now();
    main();
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// MAJ du jeu
function update(dt) {
	//invincibility =true;  //Mode developpeur
    gameTime += dt;
    handleInput(dt);
    updateEntities(dt);
    event();
    newEvent();
    checkCollisions(dt);
    
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Gestion des entrées + Cas du Reverse
function handleInput(dt) {
	if(!isGameOver){
		if(!reverse){
			if(input.isDown('DOWN')) {
				player.pos[1] += playerSpeed * dt;
				carpet.pos[1] += playerSpeed * dt;
			}

			if(input.isDown('UP')) {
				player.pos[1] -= playerSpeed * dt;
				carpet.pos[1] -= playerSpeed * dt;
			}
		}
		else {
			if(input.isDown('DOWN')) {
				player.pos[1] -= playerSpeed * dt;
				carpet.pos[1] -= playerSpeed * dt;
			}

			if(input.isDown('UP')) {
				player.pos[1] += playerSpeed * dt;
				carpet.pos[1] += playerSpeed * dt;
			}

		}
	}
   }   
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// MAJ des sprites 
function updateEntities(dt) {
    if(!isGameOver){
		if(!invincibility){
			player.sprite.update(dt);
		}
		carpet.sprite.update(dt);
		background_scroll.sprite.update(dt);
		lava_scroll.sprite.update(dt);
		// Flag Genie - High Score
		if(genie_flag && (score == HighScore) && (HighScore >0)){
			genie_flag_img.sprite.update(dt);
			genie_flag_img.pos[0]+=250 *dt;
			if(genie_flag_img.pos[0] > canvas.width) {
				genie_flag = false;
				genie_flag_img.pos[0] =0;
			}
		} 

		
		//MAJ objet d'invincibilité	
		if((score ==invincibility_level) && (!invincibility)){
			invincibility_img.sprite.update(dt);
			invincibility_img.pos[0]-=200*dt;
		}
		else if((score ==invincibility_level+100) && (!invincibility)){
			invincibility_img.sprite.update(dt);
			invincibility_img.pos[0]-=500*dt;		
		}
		//MAJ objet de reverse
		if((score == reverse_level)&&(!reverse)){
			reverse_img.sprite.update(dt);
			reverse_img.pos[0]-=500*dt;
		}

		// MAJ de la main du génie
		for(var i=0; i<hand.length; i++) {
			if(!middle){
				hand[i].pos[1] -= 60 * dt;
				if (hand[i].pos[1] < 100){
					hand[i].pos[1] = 120;
				}
			}
			else {
			
				if(hand[i].pos[1] <=110){
					hand[i].pos[1] -= 60 * dt;
					if (hand[i].pos[1] < 90){
						hand[i].pos[1] = 110;
					}
				}
				if(hand[i].pos[1] >=150){
					hand[i].pos[1] -= 60 * dt;
					if (hand[i].pos[1] < 150){
						hand[i].pos[1] = 170;
					}
				
				}
			}    	
			hand[i].sprite.update(dt);
			//Supprimer si sort du canvas
			if((gameTime%timeSpeed > (timeDealert-0.02)) &&(gameTime%timeSpeed <timeDealert)){
				hand.splice(i, 1);
				hander = false;
				i--;

			}
			
		}      
			   
		// MAJ des rochers
		for(var i=0; i<rocks.length; i++) {
			if(!side){ // Cas de l'évènement sur le coté
				if(!middle1&&!middle2){
					rocks[i].pos[0] -= AllSpeed *1.5* dt;
					rocks[i].sprite.update(dt);

				// Supprimer si sort du canvas
					if(rocks[i].pos[0] + rocks[i].sprite.size[0] < 0) {
						rocks.splice(i, 1);
						i--;
						gameTime+=0.02;
						rocker = false;
				// Ajout du score
						score += 1;
						
						if(score > HighScore){
							HighScore=score;
						}
						increase = true;
					}
				}
				//Niveau du BOSS
				else if(middle1){
					rocks[i].pos[0] -= AllSpeed *1.5* dt;
					rocks[i].pos[1] += AllSpeed *0.5* dt;
					rocks[i].sprite.update(dt);

				// Supprimer si sort du canvas
					if(rocks[i].pos[0] + rocks[i].sprite.size[0] < 0) {
						rocks.splice(i, 1);
						i--;
						gameTime+=0.02;
						rocker = false;
				// Ajout du Score
						score += 1;
						
						if(score > HighScore){
							HighScore=score;
						}
						increase = true;
						middle1 = false;
						
					}
				}
				else if(middle2){
					rocks[i].pos[0] -= AllSpeed *1.5* dt;
					rocks[i].pos[1] -= AllSpeed *0.5* dt;
					rocks[i].sprite.update(dt);

				// Supprimer si sort du canvas
					if(rocks[i].pos[0] + rocks[i].sprite.size[0] < 0) {
						rocks.splice(i, 1);
						i--;
						gameTime+=0.02;
						rocker = false;
				// Ajout du score
						score += 1;
						
						if(score > HighScore){
							HighScore=score;
						}
						increase = true;
						middle2 = false;
						
					}
				}
				
			}
			else{ // évènement normal
				if(!middle1&&!middle2){
					rocks[i].pos[0] += AllSpeed *1.5* dt;
					rocks[i].sprite.update(dt);

				// Supprimer si sort du canvas
					if(rocks[i].pos[0]  > canvas.width) {
						rocks.splice(i, 1);
						i--;
						gameTime+=0.02;
						rocker = false;
				// Ajout du score
						score += 1;
						
						if(score > HighScore){
							HighScore=score;
						}
						increase = true;
					}
				}
				else if(middle1){
					rocks[i].pos[0] += AllSpeed *1.5* dt;
					rocks[i].pos[1] += AllSpeed *0.5* dt;
					rocks[i].sprite.update(dt);

				// Supprimer si sort du canvas
					if(rocks[i].pos[0] > canvas.width) {
						rocks.splice(i, 1);
						i--;
						gameTime+=0.02;
						rocker = false;
				// Ajout du score
						score += 1;
						
						if(score > HighScore){
							HighScore=score;
						}
						increase = true;
						middle1 = false;
						
					}
				}
				else if(middle2){
					rocks[i].pos[0] += AllSpeed *1.5* dt;
					rocks[i].pos[1] -= AllSpeed *0.5* dt;
					rocks[i].sprite.update(dt);

				// Supprimer si sort du canvas
					if(rocks[i].pos[0] > canvas.width) {
						rocks.splice(i, 1);
						i--;
						gameTime+=0.02;
						rocker = false;
				// Ajout du score
						score += 1;
						
						if(score > HighScore){
							HighScore=score;
						}
						increase = true;
						middle2 = false;
						
					}
				}

			}
		}
			
			
		//Defilement de l'arrière plan
		if(background_scroll.pos[0] < -background_scroll.sprite.size[0] + canvas.width ) {
			background_scroll.pos[0]=0;
		}
		background_scroll.pos[0]-=AllSpeed * dt;
			
		//Defilement du Lava
		if(lava_scroll.pos[0]< -lava_scroll.sprite.size[0] + canvas.width){
			lava_scroll.pos[0]=0;
		}
		lava_scroll.pos[0]-=AllSpeed *1.5* dt;
	   
	   // Si invincibilité
		if(invincibility){
			stage_music.pause();
			invincibility_music.play();
			itime -=dt;
			if(itime <=0){
				invincibility_music.pause();
				stage_music.play();
				invincibility=false;
				itime = 30;
			}
		}
		//Si objet reverse
		if(reverse){
			itime -=dt;
			if(itime <=0){
				reverse=false;
				itime =30;
			}
		}	
	}
}

//Gestion des Collisions

function collision(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 ||
             b <= y2 || y > b2);
}
//Verification de collision entre deux 2 box (ennemy-player)
function boxCollision(pos, size, pos2, size2) {
    return collision(pos[0], pos[1],
                    pos[0] + size[0], pos[1] + size[1],
                    pos2[0], pos2[1],
                    pos2[0] + size2[0], pos2[1] + size2[1]);
}
//Verification de collision
function checkCollisions(dt) {
    checkPlayerBounds();
    
    // Verification de collision sur tout les rochers
    for(var i=0; i<rocks.length; i++) {
        var pos = rocks[i].pos;
        var size = rocks[i].sprite.size;  
		if(!invincibility){
			if(boxCollision(pos, size, player.pos, player.sprite.size)) {
				gameOver(dt); //Fin de Jeu
			}
        }
       
    }
	// Collision avec l'item Invincibility
    if((score ==invincibility_level||score ==invincibility_level+100) && (!invincibility)) {
        if(boxCollision(invincibility_img.pos,invincibility_img.sprite.size,player.pos,player.sprite.size)){
        	invincibility=true;
        	invincibility_img.pos[0]=canvas.width;
        }
		if(score ==(invincibility_level+1)){
			invincibility_img.pos[0]=canvas.width;
		}
     
     
    }
	// Collision avec l'item Reverse
    if((score ==reverse_level)&&(!reverse)) {
       	if(boxCollision(reverse_img.pos,reverse_img.sprite.size,player.pos,player.sprite.size)){
       		reverse=true;
      		reverse_img.pos[0]=canvas.width;
       	}
    }
}

function checkPlayerBounds() {
    // Verification de la position du player vis à vis des limites du canvas
    
    if(player.pos[1] < 0) {
        player.pos[1] = 0;
        carpet.pos[1] = 30;
    }
    else if(player.pos[1] > canvas.height - player.sprite.size[1]-lava_scroll.sprite.size[1]) {
        player.pos[1] = canvas.height - carpet.sprite.size[1] -30 -lava_scroll.sprite.size[1];
        carpet.pos[1] = canvas.height - carpet.sprite.size[1] -lava_scroll.sprite.size[1];
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Dessin-Insère les sprites sur le canvas
function render() {
	if(!isGameOver) {
		
		ctx.fillStyle = backgroundPattern;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		if((score ==invincibility_level||score ==invincibility_level+100) && (!invincibility)){
			renderEntity(invincibility_img);
		}
			
		if((score ==reverse_level) && (!reverse)){
			renderEntity(reverse_img);
		}
		renderEntity(carpet);
		if(!invincibility){
			renderEntity(player);
		}
		renderEntities(rocks);
		renderEntities(hand);
		if(score<250){
			renderEntity(background_scroll);
		}
		renderEntity(lava_scroll);
	
		// Flag Genie - High Score
		 
		ctx.fillStyle='rgba(255,255,255,1)';
		ctx.font='20px Century';
		ctx.fillText("Score: "+score,150,canvas.height-5,100);
		ctx.fillText("High-Score: "+HighScore,0,canvas.height-5,120);
		//ctx.fillText("GT: "+gameTime%timeSpeed,250,canvas.height-5,120);   //Mode développeur
		//ctx.fillText("TS: "+timeSpeed,400,canvas.height-5,120);			//Mode développeur
		
		
		//FLAG TEXTE
		if(genie_flag && (score == HighScore) && (HighScore >0)){
			renderEntity(genie_flag_img);
		    ctx.fillText("NEW SCORE",canvas.width/2,canvas.height-5,120);
		}

		if(invincibility){
			ctx.fillText(Math.floor(itime),canvas.width/2,canvas.height-5,120);
			ctx.fillText("INVINCIBILITY",290,canvas.height-5,120);
		}
		
		if(reverse){
			ctx.fillText(Math.floor(itime),canvas.width/2,canvas.height-5,120);
			ctx.fillText("REVERSE",290,canvas.height-5,120);
		}
		if((score ==5)||(score ==10)||(score ==30)||(score ==60)){
		ctx.fillText("CHECKPOINT",290,canvas.height-5,120);
		}
	}

    
};

function renderEntities(list) {
    for(var i=0; i<list.length; i++) {
        renderEntity(list[i]);
    }    
}

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}

// Fonction du Game over
function gameOver(dt) {
	if(menu_exit){
		isGameOver = true;
		stage_music.pause();
		stage_music.currentTime = 0;
		ctx.clearRect(0,0,canvas.width,270);
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		if(isGameOver){
			genie_flag = true;
			abu.sprite.update(dt);
			dead.sprite.update(dt);
			renderEntity(abu);
			renderEntity(dead);
			menuTime++;
		}
		if(menuTime > 1160){
			menuTime =250;
			reset();
		}
    }
    else {
    stage_music.pause();
    }
}

// Fonction du Reset - RAZ des paramètres de jeu
function reset() {

    isGameOver = false;
    gameTime = 0;
	playerSpeed = 400;
	 middle = false;
	 rocker = false;
	 hander = false;
	 invincibility = false;
	 reverse = false;
	 side=false;
	 middle1 = false;
	 middle2 = false;
	 itime = 30;
	 invincibility_level=Math.floor(150-Math.random()*50);
	 reverse_level = Math.floor(100-Math.random()*50);
	
    rocks = [];
    hand = [];
    
    
    player.pos = [canvas.width/3, canvas.height / 2 ];
    carpet.pos = [canvas.width/3 -25, canvas.height/2 +30];
    background_scroll.pos = [0, 0];
    lava_scroll.pos = [0, 290];
	stage_music.play();
	checkpoint();
			
  }
  //Point de Sauvegarde en cas de Game Over
function checkpoint() {
	increase = false;
	if(score <5){
		score=0;
		AllSpeed = 400;
		timeSpeed =10;
		AlertTime = 5;
		timeDealert = 8;
		choice=1;
		nb_choice =2;
	}
	else if((score >=5)&&(score <10)){
		score=5;
		AllSpeed = 500;
		timeSpeed =9;
		AlertTime = 4;
		timeDealert = 7;
		choice=1;
		nb_choice =3;
	
	}
	else if((score >=10)&&(score <30)){
		score=10;
		AllSpeed = 750;
		timeSpeed =7;
		AlertTime = 3;
		timeDealert = 5;
		choice=1;
		nb_choice =4;
	
	}
	else if((score >=30)&&(score <60)){
		score=30;
		AllSpeed = 1000;
		timeSpeed =5;
		AlertTime = 2;
		timeDealert = 3;
		choice=1;
		nb_choice =4;
	
	}
	else if((score >=60)&&(score<250)){
		score=60;
		AllSpeed = 1000;
		timeSpeed =2;
		AlertTime = 1;
		timeDealert = 2;
		choice=1;
		nb_choice =4;
	
	}
	else if(score>=250){
		score=250;
		AllSpeed = 1000;
		timeSpeed = 28;
		stage_music.pause();
		stage_music = new Audio('mp3/sonicboss.mp3');
		stage_music.play();
	}
}
