function getRandomNumber(min, max) {
    
    
   return Math.random() * (max - min) + min;
}


const randN = getRandomNumber(1,100);

console.log("randN: ",randN)

