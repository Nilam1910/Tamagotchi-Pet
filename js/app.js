console.log("tamagotchi Pet")
alert("Wellcome to Tamagotchi Pet Cub")
alert("Rules of the Pet-Game: You have three things to worry about hunger,sleepines and boredom. Those things have set start to 10 means full and when they go lower its means your pet closer to Faint, to make them serviev you must not allow them to go to zero. To increase them there are three butoons to choose from, click them to inccrese by 1")
alert("After start button clicked your pet age get incresed and they morph at certian ages.")

// create class, instatiate your Tamagotchi ,display a character of your choice the screen to represent your pet. Disply the matrics for your pet(hunger,sleepiness,boredon(1-10 scale) and Age)
let hungerButton=document.querySelector("#button-2")
let hungerTime=document.querySelector("#hug")

let sleepinessButton=document.querySelector("#button-3")
let sleepinesTime=document.querySelector("#sleep")

let boredomButton=document.querySelector("#button-4")
let boredomTime=document.querySelector("#bore")

let getAllDivs=document.querySelector("#all-divs")
let startButton=document.querySelector('#buttonOne')

buttonOne = document.querySelector("button")

class Pet {
   constructor( age, hunger, sleepiness, boredom){
      this.age = age
      this.hunger = hunger
      this.sleepines = sleepines
      this.boredom = boredom
      }

      hunger () {
      // interval
      // hunger up
      //query selector to hunger number
      // set query selector.innerhtml = hunger number
      // query selector button
      // eventlistener for button where which makes it lower


















   }

 
 }
 
 // once start butooon click need to make times go down and age go up
//    start(){
//       let startActive = setInterval(()=>{
//          if(this.hunger >= 1 && this.sleepines >= 1 && this.boredom >= 1){
//             this.hunger --
//             this.hungerTime.innerText = this.hunger //innerhtml 
//             console.log(hangerTime)

//             this.sleepines --
//             this.sleepinesTime.innerText = this.sleepines
//             console.log(sleepinesTime)

//             this.boredom --
//             this.boredomTime.innerText = this.boredom
//             console.log(boredomTime)
//          }else if(this.hunger <= 0 || this.sleepines <= 0 || this.boredom <= 0){
//             alert("The pet has Fainted")
//             clearInterval(startActive)
//          }else {
//             console.log("Not working")
//          }
//       }, 2000)
//    }
//    feed(){
//       // console.log("feed food")
//       let feedTime =setInterval(()=>{
//          this.hunger -- 
//          if(this.hunger <=0){
//             alert("pet has fainted from hunger")

//          }else

//      }) 
//    }
//    sleey(){
//       this.sleepines --
//    }
//    bored(){
//       this.boredom --
//    }
//    age(){
//       this.age++
//    }

// }
let tamagotchi = new Pet(0, 10, 10, 10) 
   
   
      
   
// set alert when start button click, "Welcome to Tom's Tamagotchi Pet Cub" 
// let getStart = document.querySelector("#button-1")
//  getStart.addEventListener("click", ()=>{
//    console.log("1: start")
//    prompt("Enter your Pet Name")
   
// })
// turn off the light so the sleepyness don't go up
// if huger,sleepyness or boredome go up to 10 he died
// Lost child need to find home or parent in that  process need to take care of basic need
// first see the health
// direct him the way to find home

document.getElementById("button-1").addEventListener("click", (e)=>{tamagotchi.start(),tamagotchi.age()})
document.getElementById("button-2").addEventListener("click", (e)=>{tamagotchi.feed()})
document.getElementById("button-3").addEventListener("click", (e)=>{tamagotchi.sleepy()})
document.getElementById("button-4").addEventListener("click", (e)=>{tamagotchi.boredom()})

