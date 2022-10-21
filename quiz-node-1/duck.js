/* eslint-disable space-before-blocks */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
let flying = false;
let quaking = false;
let xPos = 0;
let yPos = 0;

const takeOff = () => {
      flying = true;
};

const land = () => {
      flying = false;
};

const startQuaking = () => {
      quaking = true;
};

const stopQuaking = () => {
      quaking = false;
};

const moveTo = (x, y) => {
      if (flying && !quaking){
            xPos += x;
            yPos += y;
            console.log(`Duck is swimming to ${xPos}, ${yPos}`);
      }
      else if (!flying && quaking){
            xPos += x;
            yPos += y;
            console.log(`Duck is flying to ${xPos}, ${yPos}`);
      }
      else if (flying && quaking){
            xPos += x;
            yPos += y;
            console.log(`Duck is swimming to ${xPos}, ${yPos} while quaking`);
      }
};

module.exports = { takeOff, land, startQuaking, stopQuaking, moveTo };