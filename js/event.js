var tab_img=['img/missile.png','img/kamek.png','img/iagoenemy.png','img/Gintoki.png','img/boo.png'], //tableau d'images
    tab_width=[117,155,126,174,111], //tableau des longueurs d'images
	tab_height=[92,100,60,100,100], //tableau des largeurs d'images
	side = false,	//evenement side
	middle1 = false; //evenement milieu

function event() {
	random_choice = Math.floor(Math.random()*nb_choice); //nb aleatoire entre 0 et nb_choice
	if(gameTime%timeSpeed <0.02){
		choice=random_choice; //Stocke le choix à un temps précis
	}
	if(score < 100){ //evenement pour score <100
		switch(choice){
			case 0:
		// Evenement Main en Haut
		if(!hander){
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -100],
					sprite: new Sprite('img/hand_down.png', [0, 0], [48, 64],
									   1,[0])
				});
				hander=true;
			}
		}
		// Evenement Rocher en Haut
		if(!rocker) {
		
			if(gameTime%timeSpeed > (timeSpeed -0.02)){
					rocks.push({
					pos: [canvas.width,
						  40],
					sprite: new Sprite('img/rock.png', [0, 0], [130, 99],
									   1,[0])
				});
				rocker=true;
			}    
		}
		break;
			case 1:
		// Evenement Main en Bas
		if(!hander) {
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -100],
					sprite: new Sprite('img/hand_up.png', [0, 0], [48, 64],
									   1,[0])
				});
				hander=true;
			}
		}
		// Evenement Rocher en Bas
		if(!rocker) {

			if(gameTime%timeSpeed > (timeSpeed -0.02)){
					rocks.push({
					pos: [canvas.width,
						  150],
					sprite: new Sprite('img/rock.png', [0, 0], [130, 99],
									   1,[0])
				});
				rocker=true;
				
			}    
		}
		break;
			case 2:
				// Evenement 2 Mains au Milieu
		if(!hander) {
				middle = true;
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -60],
					sprite: new Sprite('img/hand_up.png', [0, 0], [48, 64],
									   1,[0])
				});
			
			}

			
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2-20],
					sprite: new Sprite('img/hand_down.png', [0, 0], [48, 64],
									   1,[0])
				});
			hander=true;
			}
		}
		// Evenement Rocher au Milieu
		if(!rocker) {

			if(gameTime%timeSpeed > (timeSpeed -0.02)){
					rocks.push({
					pos: [canvas.width,
						  100],
					sprite: new Sprite('img/rock.png', [0, 0], [130, 99],
									   1,[0])
				});
				rocker=true;
			}   
		}
		break;
		case 3:
				// Evenement 2 Mains en Haut/Bas
		if(!hander) {
			middle = true;
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -60],
					sprite: new Sprite('img/hand_down.png', [0, 0], [48, 64],
									   1,[0])
				});
			
			}

			
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2-20],
					sprite: new Sprite('img/hand_up.png', [0, 0], [48, 64],
									   1,[0])
				});
				hander=true;
			}
		}
		// Evenement 2 Rocher Haut/Bas
		if(!rocker) {

			if(gameTime%timeSpeed > (timeSpeed -0.02)){
					rocks.push({
					pos: [canvas.width,
						  0],
					sprite: new Sprite('img/rock.png', [0, 0], [130, 99],
									   1,[0])
				});
				
			}
			if(gameTime%timeSpeed > (timeSpeed -0.02)){
					rocks.push({
					pos: [canvas.width,
						  200],
					sprite: new Sprite('img/rock.png', [0, 0], [130, 99],
									   1,[0])
				});
				rocker=true;
			 }   
		}

		break;
		default:
		score=score;
		}
	
	}
	//Evenement pour score entre 100 et 250
	else if((score>=100)&&(score<250)){
		var n = Math.floor(Math.random()*5);
		switch(choice){
			case 0:
		// Evenement Mains en Haut
		if(!hander){
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -100],
					sprite: new Sprite('img/hand_down.png', [0, 0], [48, 64],
									   1,[0])
				});
				hander=true;
			}
		}
		//  Evenement 2 Rocher en Haut
		if(!rocker) {
		
			if((gameTime%(timeSpeed) > ((timeSpeed-1.1) -0.02))&&(gameTime%(timeSpeed) < (timeSpeed-1.1))){
					rocks.push({
					pos: [canvas.width,
						  40],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			}

			if(gameTime%(timeSpeed) > ((timeSpeed) -0.02)){
					rocks.push({
					pos: [canvas.width,
						  40],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			} 
		}
		break;
			case 1:
		// Evenement  Mains en Bas
		if(!hander) {
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -100],
					sprite: new Sprite('img/hand_up.png', [0, 0], [48, 64],
									   1,[0])
				});
				hander=true;
			}
		}
		//  Evenement 2 Rocher en Bas
		if(!rocker) {
		
			if((gameTime%(timeSpeed) > ((timeSpeed-1.1) -0.02))&&(gameTime%(timeSpeed) < (timeSpeed-1.1))){
					rocks.push({
					pos: [canvas.width,
						  150],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			}

			if(gameTime%(timeSpeed) > ((timeSpeed) -0.02)){
					rocks.push({
					pos: [canvas.width,
						  150],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			} 
		}
		break;
			case 2:
				// Evenement  2 Mains au Milieu
		if(!hander) {
				middle = true;
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -60],
					sprite: new Sprite('img/hand_up.png', [0, 0], [48, 64],
									   1,[0])
				});
			
			}

			
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2-20],
					sprite: new Sprite('img/hand_down.png', [0, 0], [48, 64],
									   1,[0])
				});
			hander=true;
			}
		}
		//  Evenement 2 Rocher au Milieu
		if(!rocker) {
		
			if((gameTime%(timeSpeed) > ((timeSpeed-1.1) -0.02))&&(gameTime%(timeSpeed) < (timeSpeed-1.1))){
					rocks.push({
					pos: [canvas.width,
						  100],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			}

			if(gameTime%(timeSpeed) > ((timeSpeed) -0.02)){
					rocks.push({
					pos: [canvas.width,
						  100],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			} 
		}
		break;
		case 3:
				//  Evenement 2 Main Haut/ Bas
		if(!hander) {
			middle = true;
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2 -60],
					sprite: new Sprite('img/hand_down.png', [0, 0], [48, 64],
									   1,[0])
				});
			
			}

			
			if((gameTime%timeSpeed > (AlertTime -0.02)) && (gameTime%timeSpeed <AlertTime)){
				hand.push({
					pos: [canvas.width-100,
						  canvas.height/2-20],
					sprite: new Sprite('img/hand_up.png', [0, 0], [48, 64],
									   1,[0])
				});
				hander=true;
			}
		}
		//  Evenement 4 Rocher Haut/ Bas
		if(!rocker) {
		
			if((gameTime%(timeSpeed) > ((timeSpeed-1.1) -0.02))&&(gameTime%(timeSpeed) < (timeSpeed-1.1))){
					rocks.push({
					pos: [canvas.width,
						  0],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			}

			if(gameTime%(timeSpeed) > ((timeSpeed) -0.02)){
					rocks.push({
					pos: [canvas.width,
						  0],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			}
			
			if((gameTime%(timeSpeed) > ((timeSpeed-1.1) -0.02))&&(gameTime%(timeSpeed) < (timeSpeed-1.1))){
					rocks.push({
					pos: [canvas.width,
						  200],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			}

			if(gameTime%(timeSpeed) > ((timeSpeed) -0.02)){
					rocks.push({
					pos: [canvas.width,
						  200],
					sprite: new Sprite(tab_img[n], [0, 0], [tab_width[n], tab_height[n]],
									   1,[0])
				});
				rocker=true;
			} 
		
		}
		break;
		default:
		score=score;
		}
		
		
	
	}
	// Evenement Boss
	else if(score >=250){
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (0.5 -0.03))&&(gameTime%timeSpeed < 0.5))){
					rocks.push({
					pos: [canvas.width,
						  30],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (1 -0.03))&&(gameTime%timeSpeed < 1))){
					rocks.push({
					pos: [canvas.width,
						  60],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (1.5 -0.03))&&(gameTime%timeSpeed < 1.5))){
					rocks.push({
					pos: [canvas.width,
						  90],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (2 -0.03))&&(gameTime%timeSpeed < 2))){
					rocks.push({
					pos: [canvas.width,
						  120],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (2.5 -0.03))&&(gameTime%timeSpeed < 2.5))){
					rocks.push({
					pos: [canvas.width,
						  150],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (3 -0.03))&&(gameTime%timeSpeed < 3))){
					rocks.push({
					pos: [canvas.width,
						  180],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (3.5 -0.03))&&(gameTime%timeSpeed < 3.5))){
					rocks.push({
					pos: [canvas.width,
						  210],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
			}  
		}
		if(!rocker) {
		
			if(((gameTime%timeSpeed > (4 -0.03))&&(gameTime%timeSpeed < 4))){
					rocks.push({
					pos: [canvas.width,
						  240],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
				side = true;
			}  
		}
		if(side){
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (4.5 -0.03))&&(gameTime%timeSpeed < 4.5))){
						rocks.push({
						pos: [0,
							  30],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (5 -0.03))&&(gameTime%timeSpeed < 5))){
						rocks.push({
						pos: [0,
							  60],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (5.5 -0.03))&&(gameTime%timeSpeed < 5.5))){
						rocks.push({
						pos: [0,
							  90],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (6 -0.03))&&(gameTime%timeSpeed < 6))){
						rocks.push({
						pos: [0,
							  120],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (6.5 -0.03))&&(gameTime%timeSpeed < 6.5))){
						rocks.push({
						pos: [0,
							  150],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (7 -0.03))&&(gameTime%timeSpeed < 7))){
						rocks.push({
						pos: [0,
							  180],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (7.5 -0.03))&&(gameTime%timeSpeed < 7.5))){
						rocks.push({
						pos: [0,
							  210],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
				}  
			}
			if(!rocker) {
			
				if(((gameTime%timeSpeed > (8 -0.03))&&(gameTime%timeSpeed < 8))){
						rocks.push({
						pos: [0,
							  240],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
					side=false;
					
				}  
			}
		}
		if(((gameTime%timeSpeed > (9 -0.03))&&(gameTime%timeSpeed < 9))){
			middle1=true;
		}
		if(middle1){
			if(!rocker) {
				
					if(((gameTime%timeSpeed > (9 -0.03))&&(gameTime%timeSpeed < 9))){
							rocks.push({
							pos: [canvas.width,
								  30],
							sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
											   1,[0])
						});
						rocker=true;
						
					}  
				}
		}
		if(((gameTime%timeSpeed > (10 -0.03))&&(gameTime%timeSpeed < 10))){
			middle2=true;
		}
		if(middle2){
			if(!rocker) {
				middle1=false;
				if(((gameTime%timeSpeed > (10 -0.03))&&(gameTime%timeSpeed < 10))){
						rocks.push({
						pos: [canvas.width,
							  240],
						sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
					
				}  
			}
		}
			if(((gameTime%timeSpeed > (11 -0.03))&&(gameTime%timeSpeed < 11))){
			middle1=true;
			side =true;
		}
		if(middle1){
			if(!rocker) {
				
					if(((gameTime%timeSpeed > (11 -0.03))&&(gameTime%timeSpeed < 11))){
							rocks.push({
							pos: [0,
								  30],
							sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
											   1,[0])
						});
						rocker=true;
						
					}  
				}
		}
		if(((gameTime%timeSpeed > (12 -0.03))&&(gameTime%timeSpeed < 12))){
			middle1=false;
			middle2=true;
			side = true;
		}
		if(middle2){
			if(!rocker) {
				middle1=false;
				if(((gameTime%timeSpeed > (12 -0.03))&&(gameTime%timeSpeed < 12))){
						rocks.push({
						pos: [0,
							  240],
						sprite: new Sprite('img/sonic2.png', [0, 0], [57, 60],
										   1,[0])
					});
					rocker=true;
					
				}  
			}
		}
		if(((gameTime%timeSpeed > (13 -0.03))&&(gameTime%timeSpeed < 13))){
			side = false;
		}
		if(!rocker) {
			
				if(((gameTime%timeSpeed > (14 -0.03))&&(gameTime%timeSpeed < 14))){
						rocks.push({
						pos: [canvas.width,
							  0],
						sprite: new Sprite('img/beam.png', [0, 0], [1100, 100],
										   1,[0])
					});
					rocker=true;
				}  
		}
		if(!rocker) {
			
			if(((gameTime%timeSpeed > (15.5 -0.03))&&(gameTime%timeSpeed < 15.5))){
					rocks.push({
					pos: [canvas.width,
						  180],
					sprite: new Sprite('img/beam.png', [0, 0], [1100, 100],
									   1,[0])
				});
				rocker=true;
									
			}  
		}
		
		if(!rocker) {
			
				if(((gameTime%timeSpeed > (17 -0.03))&&(gameTime%timeSpeed < 17))){
						rocks.push({
						pos: [canvas.width,
							  0],
						sprite: new Sprite('img/beam.png', [0, 0], [1100, 100],
										   1,[0])
					});
					
				}  
		
			
			if(((gameTime%timeSpeed > (17 -0.03))&&(gameTime%timeSpeed < 17))){
					rocks.push({
					pos: [canvas.width,
						  100],
					sprite: new Sprite('img/beam.png', [0, 0], [1100, 100],
									   1,[0])
				});
				rocker=true;
									
			}  
		}
		if(!rocker) {
			
				if(((gameTime%timeSpeed > (18.5 -0.03))&&(gameTime%timeSpeed < 18.5))){
						rocks.push({
						pos: [canvas.width,
							  80],
						sprite: new Sprite('img/beam.png', [0, 0], [1100, 100],
										   1,[0])
					});
					
				}  
		
			
			if(((gameTime%timeSpeed > (18.5 -0.03))&&(gameTime%timeSpeed < 18.5))){
					rocks.push({
					pos: [canvas.width,
						  180],
					sprite: new Sprite('img/beam.png', [0, 0], [1100, 100],
									   1,[0])
				});
				rocker=true;
									
			}  
		}
		if(!rocker) {
			
				if(((gameTime%timeSpeed > (20 -0.03))&&(gameTime%timeSpeed < 20))){
						rocks.push({
						pos: [canvas.width,
							  0],
						sprite: new Sprite('img/beam-long.png', [0, 0], [2200, 100],
										   1,[0])
					});
					
				}  
		
			
			if(((gameTime%timeSpeed > (20.5 -0.03))&&(gameTime%timeSpeed < 20.5))){
					rocks.push({
					pos: [canvas.width,
						  100],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				
									
			} 
			
			if(((gameTime%timeSpeed > (21 -0.03))&&(gameTime%timeSpeed < 21))){
					rocks.push({
					pos: [canvas.width,
						  150],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
									
			} 
		}
		if(!rocker) {
			
				if(((gameTime%timeSpeed > (22.5 -0.03))&&(gameTime%timeSpeed < 22.5))){
						rocks.push({
						pos: [canvas.width,
							  180],
						sprite: new Sprite('img/beam-long.png', [0, 0], [2200, 100],
										   1,[0])
					});
					
				}  
		
			
			if(((gameTime%timeSpeed > (23 -0.03))&&(gameTime%timeSpeed < 23))){
					rocks.push({
					pos: [canvas.width,
						  150],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				
									
			} 
			
			if(((gameTime%timeSpeed > (23.5 -0.03))&&(gameTime%timeSpeed < 23.5))){
					rocks.push({
					pos: [canvas.width,
						  100],
					sprite: new Sprite('img/sonic.png', [0, 0], [57, 60],
									   1,[0])
				});
				rocker=true;
									
			} 
		}
		if(!rocker) {
			
				if(((gameTime%timeSpeed > (24.5 -0.03))&&(gameTime%timeSpeed < 24.5))){
						rocks.push({
						pos: [canvas.width,
							  0],
						sprite: new Sprite('img/beam-long.png', [0, 0], [2200, 100],
										   1,[0])
					});
					
				}  
		
			
			if(((gameTime%timeSpeed > (24.5 -0.03))&&(gameTime%timeSpeed < 24.5))){
					rocks.push({
					pos: [canvas.width,
						  180],
					sprite: new Sprite('img/beam-long.png', [0, 0], [2200, 100],
									   1,[0])
				});
				rocker=true;
									
			}  
		}
		
	}
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Fonction modifie les paramètres du jeu en fonction du score et des evenements
// Evenements Spécial et Prédefinis
function newEvent(dt){
	if(score ==4){
		choice=0;
	}

	if((score ==5)&&increase) {
		AllSpeed+=100;
		AlertTime-=1;
		timeDealert-=1;
		timeSpeed-=1;
		increase=false;
		nb_choice++;
		gameTime-=5;
		
	}
		
	if(score ==9){
		choice=2;
	}


	if((score ==10)&&increase) {
		AllSpeed+=250;
		AlertTime-=1;
		timeDealert-=2;
		timeSpeed-=2;
		increase=false;		
		nb_choice++;
		gameTime-=6;
	}
		
	if(score ==28 ||score ==29){
		choice=0;
	}
	
	
	if((score ==30)&&increase) {
		AllSpeed+=250;
		AlertTime-=1;
		timeDealert-=2;
		timeSpeed-=2;
		increase=false;
		gameTime-=4;
		
	}
		
	if(score ==58 || score==59){
		choice=1;
	}
	

	if((score ==60)&&increase) {
		AlertTime-=1;
		timeDealert-=1;
		timeSpeed-=3;
		increase=false;
		gameTime-=1;
	}
	
	if(score ==98 || score==99){
		choice=2;
	}
	

	if((score ==100)&&increase) {
		AlertTime-=0.6;
		timeDealert-=1;
		playerSpeed+=100;
		increase=false;
	}
	if(score ==248 || score==249){
		choice=0;
	}
	//Modification de l'image et du son pour le Boss
	if((score ==250)&&increase) {
		gameTime=0;
		timeSpeed=28;
		stage_music.pause();
		stage_music = new Audio('mp3/sonicboss.mp3');
		stage_music.loop= true;
		stage_music.play();
		increase=false;
		
		
	}
	if(score >=250){
	
	backgroundPattern = ctx.createPattern(resources.get('img/sonicfont.png'), 'repeat');
	
	}
}
