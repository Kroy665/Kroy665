function getRandomNumber(min, max) {
    
    
   return Math.random() * (max - min) + min;
}





// for(let i=0; i< 100; i++){
    
    setInterval(()=>{
        var randN = getRandomNumber(1,100);
        console.log("randN: ",randN)
//         funstore.dashboard(randN)
    },1000)
    
// }



