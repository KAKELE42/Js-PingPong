//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;
let raqueteComprimento = 10;
let raqueteAltura = 90

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let ponto;
let trilha;

function preload(){
  trilha = loadSound("Trilha lavender town.mp3")
  ponto = loadSound("Ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisãoborda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete ();
  //verificaColisãoRaquete();
  verificaColisãoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisãoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  if (xBolinha + raio> width  ||
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio>  height ||
      yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisãoborda(){
  
}

function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, raqueteAltura);

}

function movimentaMinhaRaquete(){
  if (keyIsDown (87)){
   yRaquete -= 10; 
  } 
    if (keyIsDown (83)){
   yRaquete += 10; 
  }
}

function verificaColisãoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento
&& yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){

    velocidadeXBolinha *= -1;
  }
}

function verificaColisãoRaquete(x, y){ 
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }

}

function movimentaRaqueteOponente(){
    if (keyIsDown (UP_ARROW)){
   yRaqueteOponente -= 10; 
  } 
    if (keyIsDown (DOWN_ARROW)){
   yRaqueteOponente += 10; 
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(112, 128, 144));
  rect(150, 10, 40, 20);
  fill(255)
  text(meusPontos, 170, 26);
  fill(color(112, 128, 144));
  rect(450, 10, 40, 20);
  fill(255)
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}
