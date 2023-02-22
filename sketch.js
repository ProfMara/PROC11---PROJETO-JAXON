var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 



//Criando menino que corre 
boy = createSprite(200,350);
boy.addAnimation("correndo",boyImg);
boy.scale =0.07;

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 



 drawSprites();

 }




