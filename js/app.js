console.log("tamagotchi Pet")
alert("Wellcome to Tamagotchi Pet Cub")
alert("Rules of the Pet-Game: You have three things to worry about hunger,sleepines and boredom. Those things have set start to 10 means full and when they go lower its means your pet closer to Faint, to make them serviev you must not allow them to go to zero. To increase them there are three butoons to choose from, click them to inccrese by 1")
alert("After start button clicked your pet age get incresed and they morph at certian ages.")

// create class, instatiate your Tamagotchi ,display a character of your choice the screen to represent your pet. Disply the matrics for your pet(hunger,sleepiness,boredon(1-10 scale) and Age)

let hungerButton=document.querySelector("#button-2")
let hungerTime=document.querySelector("#hug")

let sleepinessButton=document.querySelector("#button-3")
let sleepinessTime=document.querySelector("#sleep")

let boredomButton=document.querySelector("#button-4")
let boredomTime=document.querySelector("#bore")

let getAllDivs=document.querySelector("#all-divs")
let startButton=document.querySelector('#buttonOne')

buttonOne = document.querySelector("button")

class Cub {
   constructor( name,age, hunger, sleepiness, boredom){
      this.age = age
      this.hunger = hunger
      this.sleepiness = sleepiness
      this.boredom = boredom
      this.name = name
      }

      start(){
      let startActive = setInterval(()=>{
         if(this.hunger >= 1 && this.sleepiness >= 1 && this.boredom >= 1){
                  this.hunger --
                  hungerButton.innerText = this.hunger //innerhtml 
                  console.log(hungerButton)
      
                  this.sleepiness --
                  sleepinessButton.innerText = this.sleepiness
                  console.log(sleepinessButton)
      
                  this.boredom --
                  boredomButton.innerText = this.boredom
                  console.log(boredomButton)
               }else if(this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0){
                  alert("The Cub has Fainted")
                  clearInterval(startActive)
               }else {
                  console.log("Not working")
               }
            }, 2000)
         }

      feed(){
         console.log("feed") 
         this.hunger++
         hungerButton.innerText=this.hunger    
            let feedActive =setInterval(()=>{
            let hugId=document.querySelector("#hug") 
            this.hunger -- 
            if(this.hunger ===0){
            alert("pet has fainted from hunger")
            // getAllDivs.remove()
            document.querySelector("#cub").src ="../download (1).jpeg"
            document.body.style.backgroundImage = clearInterval(feedActive)
            document.querySelector("button").disabled = false
            return
            }  
            },5000)
            hungerButton.addEventListener("click",()=>{
            tamagotchi.feed()
            console.log(tamagotchi.hunger)
            }) 
          }

      sleepy(){
         this.sleepiness ++
            sleepinessButton.innerText=this.sleepiness   
            let sleepyActive =setInterval(()=>{
                    let sleepId=document.querySelector("#sleep") 
                     this.sleepiness -- 
                     if(this.sleepiness ===0){
                        alert("pet has fainted from Sleepiness")
                        // getAllDivs.remove()
                        document.querySelector("#cub").src ="../download (1).jpeg"
                        document.body.style.backgroundImage = clearInterval(sleepyActive)
                        document.querySelector("button").disabled = false
                        return
                     }
                 },5000)
                 sleepinessButton.addEventListener("click",()=>{
                  tamagotchi.sleepy()
                  console.log(tamagotchi.sleepiness)
                 }) 
            }
         bored(){
            this.boredom ++
             boredomButton.innerText=this.boredom   
            let boredActive =setInterval(()=>{
                    let bore=document.querySelector("#bore") 
                     this.boredom -- 
                     if(this.boredom ===0){
                        alert("pet has fainted from bored")
                        // getAllDivs.remove()
                        document.querySelector("#cub").src = "../download (1).jpeg"
                        document.body.style.backgroundImage = clearInterval(boredActive)
                        document.querySelector("button").disabled = false
                        return
                     }
                 },5000)
                 boredomButton.addEventListener("click",()=>{
                  tamagotchi.bored()
                  console.log(tamagotchi.boredom)
                 }) 
         }
         ageUp(){
            let intervalId = setInterval(()=>{
               let agedId = document.querySelector("#age1")
               agedId.innerText = `${this.age}`
               this.age ++
               if(this.age ==3){
                  alert("Your pet has gained new form!!")
                  document.querySelector("#cub").src = "../sitting-cute-tiger-cartoon-character-vector-isolated-colorful-illustration-for-print-and-design-posters-nursery-design-cards-stickers-room-dec-2F1NM2X.jpeg"
               }
               if(this.age == 7){
                  alert("Your pet has gained new form!!")
                  document.querySelector("#cub").src = "../cub.jpeg"
               } 
               if(this.age == 15){
                  alert("Your pet has hits final form!!")
                  document.querySelector("#cub").src = "../download.png"
               }
               if(this.age == 21){
                  clearInterval(intervalId)
               }else{

               }       
            },2000)
         }
         setName(){
            this.name = prompt("Name your pet")
            let nameId = document.querySelector("#name")
            nameId.innerText = `${this.name}`
         }
      } 
 
     

let tamagotchi = new Cub("name",0, 10, 10, 10)

document.getElementById("buttonOne").addEventListener("click", (e)=>{tamagotchi.start();tamagotchi.ageUp()})
document.getElementById("button-2").addEventListener("click", (e)=>{tamagotchi.feed()})
document.getElementById("button-3").addEventListener("click", (e)=>{tamagotchi.sleepy()})
document.getElementById("button-4").addEventListener("click", (e)=>{tamagotchi.bored()}) 

 // some thought process:
 // once start butooon click need to make times go down and age go up     
   
// set alert when start button click, "Welcome to Tom's Tamagotchi Pet Cub" 
let getStart = document.querySelector("#buttonOne")
 getStart.addEventListener("click", ()=>{
   console.log("1: start")
   prompt("Enter your Pet Name")
   
})
// turn off the light so the sleepyness don't go up
// if huger,sleepyness or boredome go up to 10 he died
// Lost child need to find home or parent in that  process need to take care of basic need
// first see the health
// direct him the way to find home



