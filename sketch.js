var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
 //carregando a imagem do fundo ...
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

 // Crie a sprite de fundo



 //Criando menino que corre 
 boy = createSprite(200,350);
 boy.addAnimation("correndo",boyImg);
 boy.scale =0.07;

 // esse código cria a barreira ESQUERDA 
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;

 //crie a barreira direita


}


function draw() {
 background(0);


 // programe para o menino se mover no eixo X com o mouse

 edges= createEdgeSprites();
 //esse código faz o garoto colidir com a borda esquerda
 boy.collide(leftBoundary);
 //programe para ele colidir com a borda direita



  //programe para reiniciar o fundo na vertical




  drawSprites();

 }




