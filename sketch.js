var fondo1;
var pollo;
var jefe;
var jefeataque;
var monstruo;
var dragon;
var monstruo2;
var corredor;
var corredorataque;
var corredorexplosion;
var monstruo3quieto;
var monstruo3ataque;
var lagarto;
var toro;
function preload(){
fondo1=loadImage("./imagenes/fondo1.png");
pollo1=loadImage("./imagenes/pollo.png");
jefe=loadImage("./imagenes/jefe final.gif");
jefeataque=loadImage("./imagenes/jefe final 2.gif");
monstruo1=loadImage("./imagenes/monstruo1.gif");
dragon=loadImage("./imagenes/monstruo2.gif");
monstruo2=loadImage("./imagenes/monstruo3.gif");
corredor=loadImage("./imagenes/monstruo4(1).gif");
corredorataque=loadImage("./imagenes/monstruo4(2).gif");
corredorexplosion=loadImage("./imagenes/monstruo4(3).gif");
monstruo3quieto=loadImage("./imagenes/monstruo5(1).gif");
monstruo3ataque=loadImage("./imagenes/monstruo5(2).gif");
lagarto=loadImage("./imagenes/monstruo6.gif");
toro=loadImage("./imagenes/monstruo7.gif");
monstruogif=createImg("./imagenes/monstruo1.gif")
}
function setup(){
    canvas=createCanvas(600,600);
 fondo =createSprite(300,300,600,600);
fondo.addImage("fondo",fondo1);
fondo.scale=3.5
protagonista=createSprite(500,550);
protagonista.addImage("pollo",pollo1)
protagonista.scale=0.5
monstruo=createSprite(100,500);
monstruo.addImage("monstruo",monstruo1)
}
function draw(){
background(51)
image(monstruogif,300,500)
drawSprites();
}


 

