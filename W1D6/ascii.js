"use strict";

const DEFAULT_SPEED = 250;
const TURBO_SPEED = 50;
let time = null;
let speed = null;
let index = 0;
let word = ""; 

const FONT_SIZE = {
	'Tiny': '7pt',
	'Small': '10pt',
	'Medium': '12pt',
	'Large': '16pt',
	'Extra Large': '24pt',
	'XXL': '32pt',
};


window.onload = () => {
   const ani = document.getElementById("animation");
   ani.onchange = changeAnimation; 
   ani.disabled = false;
   
   const biggieSmalls = document.getElementById("fontsize");
   biggieSmalls.onchange = changeSize; 
   
   const start = document.getElementById("start");
   start.onclick = startAction; 
   start.disabled = false; 
   
   const stop = document.getElementById("stop");
   stop.onclick = stopAction; 
   stop.disabled = true; 
   
   const amphetamine = document.getElementById("turbo");
   amphetamine.onchange = goTurbo;  
};


const startAction = () => {
   const ani = document.getElementById("animation");
   const contents = ANIMATIONS[ani.value];
   const box = document.getElementById("text-area");
   
   word = box.value;
   
   const animArray = contents.split("=====\n");
   const length = animArray.length;
   
   ani.disabled = false;
   document.getElementById("start").disabled = true; 
   document.getElementById("stop").disabled = false; 
   speed = goTurbo();
   console.log('speed: ' + speed);
   time = setInterval(animFrames, speed, animArray, length);
};


const stopAction = () => {
   const box = document.getElementById("text-area");
   
   box.value = word;
   word = ""; 
   clearInterval(time);
   speed = null;
   index = 0;
   document.getElementById("animation").disabled = false;
   document.getElementById("start").disabled = false; 
   document.getElementById("stop").disabled = true; 
};

const animFrames = (array, length) => {
   const box = document.getElementById("text-area");
   box.value = array[index % length];
   index ++;
};


const changeAnimation = () => {
   const anim = document.getElementById("animation");
   document.getElementById("text-area").value = ANIMATIONS[anim.value];
};


const changeSize = () => {
   const biggieSmalls = document.getElementById("fontsize");
   const box = document.getElementById("text-area");
   box.style.fontSize = FONT_SIZE[biggieSmalls.value];
//    box.className = FONT_SIZE[biggieSmalls.value];
   console.log(box.className);
};


function goTurbo(){
	const turboCheckbox = document.getElementById('turbo');
   return (turboCheckbox.checked)? TURBO_SPEED : DEFAULT_SPEED;
};