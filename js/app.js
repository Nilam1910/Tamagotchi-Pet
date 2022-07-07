console.log("tamagotchi Game")


class Game {
   constructor( age, hunger=5, sleepines=3, boredom=5){
      this.age = age
      this.hunger = hunger
      this.sleepines = sleepines
      this.boredom = boredom
   }
      
   feed(){
      // console.log("asking food")
     this.hunger --
   }
   sleey(){
      this.sleepines --
   }
   bored(){
      this.boredom --
   }

}
   let tamagotchi = new Game()
   tamagotchi.feed(){
      
   }
// set alert when start button click, "Welcome to Tom's Tamagotchi Home Game" 
function start(){
   console.log("1: start")

}
// let getStart = document.querySelector("#button-1")
// console.log(getStart)
// getStart.addEventListener("click",()=>{

// alert("wlcome")
// prompt("Enter your name")
// })


// turn off the light so the sleepyness don't go up
// if huger,sleepyness or boredome go up to 10 he died
// Lost child need to find home or parent in that  process need to take care of basic need
// first see the health
// direct him the way to find home
//































document.getElementById("button-1").addEventListener("click", start)
document.getElementById("button-2").addEventListener("click", FileSystemDirectoryHandle)
document.getElementById("button-3").addEventListener("click", sleepy)
document.getElementById("button-4").addEventListener("click", play)

document.getElementById("all-buttons").addEventListener("click", () => {
   start()
   feed()
   sleepy()
   play()})