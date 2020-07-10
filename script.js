let score = 0;
let health = 0;
let isOn = false;

let lgHead = 0;
let lgBody = 0;
let lgRightHand = 0;
let lgLeftHand = 0;
let lgRightLeg = 0;
let lgLeftLeg = 0;
/////////////////////////////////////////////////////////////////
HTMLAudioElement.prototype.stop = function(){
	this.pause();
	this.currentTime = 0.0;
}


/////////////////////////////////////////////////////////////////////
function getRandom() {
 	return (Math.floor(Math.random() * 6)+1);
}

////////////////////////////////////////////////////////////////////
function shoot(el) {
	if (score>=50) {
		return;
	}
    let s = el.id;
   if(isOn){
    switch (s) {
    	case 'bHead':{
    		aud.stop();
    		aud.play();
    		score+=50;
    		break;

    	}
    	case 'bBody':{
    		aud.stop();
    		aud.play();
    		score+=30;
    		bBody.style.display = "none";
    		break;
    		
    		/*bBody.className = 'hidden_body';*/

    	}
    	case 'bLeftLeg':{
    		aud.stop();
    		aud.play();
    		score+=20;
    		bLeftLeg.style.display = "none";
    		/*bLeftLeg.className = 'hidden_body';*/
    		break;
    	}
    	case 'bRightLeg':{
    		aud.stop();
    		aud.play();
    		score+=20;
    		bRightLeg.style.display = "none";
    		/*bRightLeg.className = 'hidden_body';*/
    		break;
    	}
    	case 'bLeftHand':{
    		aud.stop();
    		aud.play();
    		score+=20;
    		bLeftHand.style.display = "none";
    		/*bLeftHand.className = 'hidden_body';*/
    		break;
    	}
    	case 'bRightHand':{
    		aud.stop();
    		aud.play();
    		score+=20;
    		bRightHand.style.display = "none";
    		break;
    		/*bRightHand.className = 'hidden_body';*/
    		
    	}
    	
	}
}
}
////////////////////////////////////////////////////////////
 function countdown() {

    smoke.style.display = 'none';
 	button.style.display="none";
 		isOn = true;
      let start = Date.now();
      let timer = setInterval(function() {
         let timePassed = Date.now() - start;
			bottle.style.top = timePassed/3.33 + 'px';
   if (score >= 50){
   		clearInterval(timer); 
       	kill1.style.display = "block";
       	isOn = false;
       	congratulations.style.display = 'block';
       	return;
        	} 
        
        if (timePassed > 1000) {
        	aud.stop();
        	aud.play();
        	smoke.style.display = 'block';
        	bBody.style.display = "block";
        	bLeftLeg.style.display = "block";
			bRightLeg.style.display = "block";
			bLeftHand.style.display = "block";
			bRightHand.style.display = "block";
        	clearInterval(timer); 
        	isOn = false;
        	score = 0;
        	button.style.display="block";

        	let a = getRandom();
			switch (a) {
        		case 1:{
        			gHead.style.backgroundColor = "#4C0909";
        			health+=30;
        			break;
        		}

        		case 2:{
        		
        			lgBody+=1;
        			if(lgBody==1){
        				gBody.style.backgroundColor = "#A60000";}
        			else if (lgBody==2) {
        				gBody.style.backgroundColor = "#4C0909";}
        			
        			health+=20;
        			break;
        		}

        		case 3:{
        		lgRightHand+=1;
        			if(lgRightHand==1){
        				gRightHand.style.backgroundColor = "red";}
        			else if (lgRightHand==2) {
        				gRightHand.style.backgroundColor = "#A60000";}
        			else if (lgRightHand==3) {
        				gRightHand.style.backgroundColor = "#4C0909";
        			}
        			health+=10;
        			break;
        		}

        		case 4:{
        		lgLeftHand+=1;
        			if(lgLeftHand==1){
        				gLeftHand.style.backgroundColor = "red";}
        			else if (lgLeftHand==2) {
        				gLeftHand.style.backgroundColor = "#A60000";}
        			else if (lgLeftHand==3) {
        				gLeftHand.style.backgroundColor = "#4C0909";
        			}
        			health+=10;
        			break;
        		}

        		case 5:{
        		lgRightLeg+=1;
        			if(lgRightLeg==1){
        				gRightLeg.style.backgroundColor = "red";}
        			else if (lgRightLeg==2) {
        				gRightLeg.style.backgroundColor = "#A60000";}
        			else if (lgRightLeg==3) {
        				gRightLeg.style.backgroundColor = "#4C0909";
        			}
        			health+=10;
        			break;
        		}

        		case 6:{
        		lgLeftLeg+=1;
        			if(lgLeftLeg==1){
        				gLeftLeg.style.backgroundColor = "red";}
        			else if (lgLeftLeg==2) {
        				gLeftLeg.style.backgroundColor = "#A60000";}
        			else if (lgLeftLeg==3) {
        				gLeftLeg.style.backgroundColor = "#4C0909";
        			}
        			health+=10;
        			break;
                    }
        	}
        	if(health>=30){
        		isOn = false;
        		clearInterval(timer); 
       	kill2.style.display = "block";
       	health=0;
        button.style.display="none";
       	return;
        	}
        	
        }

      }, 20);


    }
///////////////////////////////////////////////////////////



