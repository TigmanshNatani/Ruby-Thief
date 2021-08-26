var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["846ae307-eb19-45d9-8260-4e11fdb4d872","345bf405-fc31-45ab-9fbe-92a65dcc112b","af6489f7-99d6-42e1-8007-b1fd129a48c7","594aec1d-e713-467d-86b1-71087f519593","a39da1e8-b367-4f0e-9ab1-5c7b2070cc95","bc63078e-9d38-4718-9709-18154de51dd5"],"propsByKey":{"846ae307-eb19-45d9-8260-4e11fdb4d872":{"name":"pac man","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Fa13hx8gXH_Vb__HTgZcS_XVjacZbHwO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/846ae307-eb19-45d9-8260-4e11fdb4d872.png"},"345bf405-fc31-45ab-9fbe-92a65dcc112b":{"name":"ghost 1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QZ5J5Ezc3z1u8mxlj.wIHFyWv7Dp_Apw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/345bf405-fc31-45ab-9fbe-92a65dcc112b.png"},"af6489f7-99d6-42e1-8007-b1fd129a48c7":{"name":"ghost 2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z2b7sZNpWq919ILX1f5DxwtrEqWtogdP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/af6489f7-99d6-42e1-8007-b1fd129a48c7.png"},"594aec1d-e713-467d-86b1-71087f519593":{"name":"ghost 3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IxqUfVWxvClpOACxhYO110dlGOcfk34o","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/594aec1d-e713-467d-86b1-71087f519593.png"},"a39da1e8-b367-4f0e-9ab1-5c7b2070cc95":{"name":"ghost 4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"DGkUP703i50N1DFZklAk8m0TcODHwv5X","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a39da1e8-b367-4f0e-9ab1-5c7b2070cc95.png"},"bc63078e-9d38-4718-9709-18154de51dd5":{"name":"ruby","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Making the lasers.
var laser1 = createSprite(100,317,150,5);
laser1.shapeColor = "red";
var laser2 = createSprite(300,270,150,5);
laser2.shapeColor = "red";
var laser3 = createSprite(100,220,150,5);
laser3.shapeColor = "red";
var laser4 = createSprite(300,174,150,5);
laser4.shapeColor = "red";
var laser5 = createSprite(100,130,150,5);
laser5.shapeColor = "red";
var laser6 = createSprite(300,90,150,5);
laser6.shapeColor = "red";
var laser7 = createSprite(100,50,150,5);
laser7.shapeColor = "red";

//Making the thief.
var thief = createSprite(200,375,10,10);
thief.shapeColor = "black";

//Making the ruby.
var ruby = createSprite(200,16,10,10);
ruby.setAnimation("ruby");
ruby.scale = 0.1;

//Making pillars around the ruby.
var pillar1 = createSprite(168,10,5,50);
var pillar2 = createSprite(233,10,5,50);

//score variable.
gamestate = "serve";


function draw(){
  background("yellow");
 
  createEdgeSprites();
  if(keyDown("space")){
    laser1.velocityX = 10;
    laser1.velocityX = -10;
    
    laser2.velocityX = -10;
    laser2.velocityX = 10;
    
    laser3.velocityX = 10;
    laser3.velocityX = -10;
    
    laser4.velocityX = -10;
    laser4.velocityX = 10;
    
    laser5.velocityX = 10;
    laser5.velocityX = -10;
    
    laser6.velocityX = -10;
    laser6.velocityX = 10;
    
    laser7.velocityX = 10;
    laser7.velocityX = -10;
  }
  laser1.bounceOff(rightEdge);
  laser1.bounceOff(leftEdge);
  
  laser2.bounceOff(rightEdge);
  laser2.bounceOff(leftEdge);
  
  laser3.bounceOff(rightEdge);
  laser3.bounceOff(leftEdge);
  
  laser4.bounceOff(rightEdge);
  laser4.bounceOff(leftEdge);
  
  laser5.bounceOff(rightEdge);
  laser5.bounceOff(leftEdge);
  
  laser6.bounceOff(rightEdge);
  laser6.bounceOff(leftEdge);
  
  laser7.bounceOff(rightEdge);
  laser7.bounceOff(leftEdge);
  
  //Adding conditions for moving the thief.
  if(keyDown("UP_ARROW")){
    thief.y+=-1; 
  }
  if(keyDown("DOWN_ARROW")){
    thief.y+=1;
  }
  
  if(laser1.isTouching(thief) || laser2.isTouching(thief) || laser3.isTouching(thief) || laser4.isTouching(thief) || laser5.isTouching(thief) || laser6.isTouching(thief) || laser7.isTouching(thief)){
    
    thief.x = 200;
    thief.y = 375;
  }
  if(gamestate == "serve"){
    textSize(18);
    stroke("blue");
    text("Welcome!! press SPACE to play",100,200);
    if(keyDown("space")){
     laser1.velocityX = 10;
    laser1.velocityX = -10;
    
    laser2.velocityX = -10;
    laser2.velocityX = 10;
    
    laser3.velocityX = 10;
    laser3.velocityX = -10;
    
    laser4.velocityX = -10;
    laser4.velocityX = 10;
    
    laser5.velocityX = 10;
    laser5.velocityX = -10;
    
    laser6.velocityX = -10;
    laser6.velocityX = 10;
    
    laser7.velocityX = 10;
    laser7.velocityX = -10;
    gamestate = "play";
      
    }
  } 
  
  if(gamestate == "play"){
  if(keyDown("UP_ARROW")){
    thief.y+=-3; 
  }
  if(keyDown("DOWN_ARROW")){
    thief.y+=3;
    gamestate = "end";
  }
  }
  
  if(gamestate == "end"){
    if(laser1.isTouching(thief) || laser2.isTouching(thief) || laser3.isTouching(thief) || laser4.isTouching(thief) || laser5.isTouching(thief) || laser6.isTouching(thief) || laser7.isTouching(thief)){
     laser1.velocityX = 0;
    laser1.velocityX = -0;
    
    laser2.velocityX = -0;
    laser2.velocityX = 0;
    
    laser3.velocityX = 0;
    laser3.velocityX = -0;
    
    laser4.velocityX = -0;
    laser4.velocityX = 0;
    
    laser5.velocityX = 0;
    laser5.velocityX = -0;
    
    laser6.velocityX = -0;
    laser6.velocityX = 0;
    
    laser7.velocityX = 0;
    laser7.velocityX = -0;
    textSize(18);
    stroke("black");
    text("Game Over",100,200);
  }
  }
  else
  {
    if(thief.isTouching(ruby)){
       laser1.velocityX = 0;
    laser1.velocityX = -0;
    
    laser2.velocityX = -0;
    laser2.velocityX = 0;
    
    laser3.velocityX = 0;
    laser3.velocityX = -0;
    
    laser4.velocityX = -0;
    laser4.velocityX = 0;
    
    laser5.velocityX = 0;
    laser5.velocityX = -0;
    
    laser6.velocityX = -0;
    laser6.velocityX = 0;
    
    laser7.velocityX = 0;
    laser7.velocityX = -0;
    textSize(18);
    stroke("blue");
    text("You Won!",200,200);
    
  }
  }
  














drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
