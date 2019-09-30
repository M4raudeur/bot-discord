const Discord = require('discord.js');
const puppeteer = require('puppeteer');
const CREDS = require('./creds');
const client = new Discord.Client();
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(11575, 16370)
const ctx = canvas.getContext('2d')


client.on('ready', () => {
    console.log('I am ready!');
  });
  

  client.on('message', message => {
    // If the message is '!rip'


    if (message.content === 'mat lundi') {
        message.channel.send("Lundi, 5 ou 6 matières : (grec), physique, EPS, anglais, arts plastiques et français.");
    }
    if (message.content === 'mat mardi') {
        message.channel.send("Mardi, 6 ou 7 matières : techno, SVT, français ou lv2, maths, musique anglais et (latin).");
    }
    if (message.content === 'mat jeudi') {
        message.channel.send("Jeudi, 4 ou 5 matières : (latin), histoire, italien, français et maths");
    }
    if (message.content === 'mat vendredi') {
        message.channel.send("Regarde ton emploi du temps stp.");
    }
    if (message.content === 'mat samedi') {
        message.channel.send("Mhh ? Tu es vachement fut nan ?");
    }
 
   
    if (message.content === '/tarif') {
        message.channel.send("https://tenor.com/view/emma-stone-we-are-gonna-bang-yes-nodding-gif-14393395");
        message.channel.send("https://tenor.com/view/hairflip-smile-coy-darkfemme-femme-gif-11160766");
        message.channel.send("https://tenor.com/view/amanda-seyfried-wink-gif-5480660");
    }
    if (message.content === '/hack bot') {
        message.channel.send("hacking effectué. Je suis ton esclave.");
    }
    if (message.content === 'Adiren') {
        message.channel.send("Il a voulu mettre Adrien mais il est con.");
    }
    if (message.content === '/bye') {
        message.channel.send("https://tenor.com/view/bye-bitch-marilyn-monroe-bye-bitch-wave-gif-5399924");
        message.channel.send("https://tenor.com/view/you-will-never-see-my-face-again-tamera-running-gif-12599371");
    }

    if (message.content === 'temps') {
        main();
        message.channel.send("Emploi du temps:", {
            files: [
              "element.png"
            ]
          });
    }

    if (message.content === 'italien') {
        italien();
        message.channel.send("Les devoirs d'italien:", {
            files: [
              "italien.png"
            ]
          });
    }

    if (message.author.username === 'CrystalFirst') {
        texte = message.content;
        truc();
           

    }
    if (message.content === 'go') {
        caca();
    }
});

async function italien() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 1200})
    await page.goto('https://3emeh4-italiano-201920.blogspot.com')

    await page.screenshot({
        path: 'italien.png',
        clip: {x: 110, y: 390, width: 650, height: 1200}
    })

    await browser.close();

    }



async function main() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    
    
    
    await page.setViewport({width: 1200, height: 720})
    await page.goto('https://lyceehenri-ivparis.la-vie-scolaire.fr/login', { waitUntil: 'networkidle0' }); // wait until page load
    await page.type('body > app-convergence > app-portail > app-body > div > app-authentication > app-login > div > div > div > div.login-form > div > form > div:nth-child(1) > input', CREDS.username);
    await page.type('body > app-convergence > app-portail > app-body > div > app-authentication > app-login > div > div > div > div.login-form > div > form > div:nth-child(2) > input', CREDS.password);
    // click and wait for navigation
    
    await Promise.all([
              page.click('.button-main'),
              page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('#menu-temps > div'),
    ]);
    
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    
        page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 2 }),
    
        await page.waitFor(5000),
    
        await page.screenshot({
            path: 'element.png',
            clip: {x: 0, y: 200, width: 1000, height: 710}
        }),
        await browser.close(),
    
    
    ]);
    
    
    }
    
    var texte = "";
    var index = texte.length;
    var hy = 0;
	var h;
	var u;
	var jki = 0;
	var pp;
	var gg;	
	var dbl;
	var jk;


   function truc() {
     index = texte.length;
     hy = 0;
	 h;
	 u;
	jki = 0;
	 pp = 1900;
	 gg = 1650;	
    for (var i = 0; i < texte.length; i++){
     index = hy;
     hy = hy + 1;
     h = texte.charAt(index);   	 
	 p = 200 + Math.floor(Math.random()*30);
	 u = 320 + Math.floor(Math.random()*50) + "px test3";
	 test();
	 if (h == "a"){
	  pp = pp + 172;
	 }
	 if (h == "b"){
	  pp = pp + 140;
	 }
	 if (h == "c"){
	  pp = pp + 105;
	 }
	 if (h == "d"){
	  pp = pp + 200;
	 }
	 if (h == "e"){
	  pp = pp + 105;
	 }
	 if (h == "f"){
	  pp = pp + 85;
	 }
	 if (h == "g"){
	  pp = pp + 150;
	 }
	 if (h == "h"){
	  pp = pp + 160;
	 }
	 if (h == "i"){
	  pp = pp + 85;
	 }
	 if (h == "j"){
	  pp = pp + 80;
	 }
	 if (h == "k"){
	  pp = pp + 170;
	 }
	 if (h == "l"){
	  pp = pp + 130;
	 }
	 if (h == "m"){
	  pp = pp + 200;
	 }
	 if (h == "n"){
	  pp = pp + 150;
	 }
	 if (h == "o"){
	  pp = pp + 135;
	 }
	 if (h == "p"){
	  pp = pp + 130;
	 }
	 if (h == "q"){
	  pp = pp + 135;
	 }
	 if (h == "r"){
	  pp = pp + 130;
	 }
	 if (h == "s"){
	  pp = pp + 85;
	 }
	 if (h == "t"){
	  pp = pp + 140;
	 }
	 if (h == "u"){
	  pp = pp + 160;
	 }
	  if (h == "v"){
	  pp = pp + 155;
	 }
	 if (h == "w"){
	  pp = pp + 210;
	 }
	 if (h == "x"){
	  pp = pp + 130;
	 }
	 if (h == "y"){
	  pp = pp + 150;
	 }
	 if (h == "z"){
	  pp = pp + 130;
	 }
	 if (h == "A"){
	  pp = pp + 150;
	 }
	 if (h == "B"){
	  pp = pp + 150;
	 }
	 if (h == "C"){
	  pp = pp + 150;
	 }
	 if (h == "D"){
	  pp = pp + 150;
	 }
	 if (h == "E"){
	  pp = pp + 150;
	 }
	 if (h == "F"){
	  pp = pp + 150;
	 }
	 if (h == "G"){
	  pp = pp + 150;
	 }
	 if (h == "H"){
	  pp = pp + 150;
	 }
	 if (h == "I"){
	  pp = pp + 40;
	 }
	 if (h == "J"){
	  pp = pp + 150;
	 }
	 if (h == "K"){
	  pp = pp + 150;
	 }
	 if (h == "L"){
	  pp = pp + 150;
	 }
	 if (h == "M"){
	  pp = pp + 100;
	 }
	 if (h == "N"){
	  pp = pp + 150;
	 }
	 if (h == "O"){
	  pp = pp + 150;
	 }
	 if (h == "P"){
	  pp = pp + 150;
	 }
	 if (h == "Q"){
	  pp = pp + 150;
	 }
	 if (h == "R"){
	  pp = pp + 150;
	 }
	 if (h == "S"){
	  pp = pp + 150;
	 }
	 if (h == "T"){
	  pp = pp + 150;
	 }
	 if (h == "U"){
	  pp = pp + 150;
	 }
	  if (h == "V"){
	  pp = pp + 150;
	 }
	 if (h == "W"){
	  pp = pp + 150;
	 }
	 if (h == "X"){
	  pp = pp + 150;
	 }
	 if (h == "Y"){
	  pp = pp + 150;
	 }
	 if (h == "Z"){
	  pp = pp + 150;
	 }
	 if (h == " "){
	  pp = pp + p;
	 }
	 if (h == "à"){
	  pp = pp + 172;
	 }
	 if (h == "é"){
	  pp = pp + 105;
	 }
	 if (h == "è"){
	  pp = pp + 105;
	 }
	 if (h == "ê"){
	  pp = pp + 105;
	 }
	 if (h == "â"){
	  pp = pp + 172;
	 }
	 if (h == "û"){
	  pp = pp + 160;
	 }
	 if (h == "ô"){
	  pp = pp + 135;
	 }
	 if (h == "ï"){
	  pp = pp + 85;
	 }
	 if (h == "ë"){
	  pp = pp + 105;
	 }
	 if (h == "ü"){
	  pp = pp + 160;
	 }
	 if (h == "'"){
	  pp = pp + 20;
	 }
	 if (h == "-"){
	  pp = pp + 30;
	 }
	 if (h == '"'){
	  pp = pp + 35;
	 }
	 if (h == "»"){
	  pp = pp + 35;
	 }
	 if (h == "«"){
	  pp = pp + 35;
	 }
	 if (h == "ç"){
	  pp = pp + 55;
	 }
	 if (h == "\n"){
	  gg = gg + 466;
	  pp = 1900;

	 }
     jk = h;	 
	}
   }
	 
	 
  
function test() {
  ctx.font = u ;
  ctx.fillStyle = "#000080";
  ctx.fillText(h, pp, gg);
}

function caca() {
var dataUrl = canvas.toDataURL({
    format:'png',
    quality: 1,
    multiplier:1,
    enableRetinaScaling:true
  });

  console.log(dataUrl);
}

client.login('NjE5ODE2MTEwNDg0ODgxNDE5.XXSu6g.K4ZapB0wsWSFJFLfwCtH7enVDAU');

