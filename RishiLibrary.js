function bounce(p1,p2){

    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2) {
    p1.velocityX = p1.velocityX * (-1);
    p2.velocityX = p2.velocityX * (-1);
  }
  if (p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2){
    p1.velocityY = p1.velocityY * (-1);
    p2.velocityY = p2.velocityY * (-1);
  }
  
  
  }
  
  function isTouching(o1,o2){
      
    if (o1.x - o2.x < o2.width/2 + o1.width/2 
        && o2.x - o1.x < o2.width/2 + o1.width/2 
        &&o1.y - o2.y < o2.height/2 + o1.height/2 
        && o2.y - o1.y < o2.height/2 + o1.height/2)
         { return true; } 
         else { return false; } 
        }


