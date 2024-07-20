//roll button
image_array = [
    {
        value:1,
        image: 'die-1.png',
    },
    {
        value:2,
        image: 'die-2.png',
    },
    {
        value:3,
        image: 'die-3.png',
    },
    {
        value:4,
        image: 'die-4.png',
    },
    {
        value:5,
        image: 'die-5.png',
    },
    {
        value:6,
        image: 'die-6.png',
    },
]
    // 'die-1.png',
    // 'die-2.png',
    // 'die-3.png',
    // 'die-4.png',
    // 'die-5.png',
    // 'die-6.png']

const rollDiceBtn = document.querySelector(".btn--roll")
const playerOneCurrentScore = document.querySelector("#current--0")
const playerTwoCurrentScore = document.querySelector("#current--1")
const playerOneScore = document.querySelector("#score--0")
const playerTwoScore = document.querySelector("#score--1")
let score__0 = 0
let score__1 = 0
localStorage.setItem("current-player", "player-1")
const current_user = localStorage.getItem("current-player")

rollDiceBtn.addEventListener("click", function(){
    const random_index = Math.floor(Math.random() * image_array.length);
     const selected_images = image_array[random_index]
    //  console.log(selected_images)
     document.querySelector('.dice').src = `./img/${selected_images.image}`
 
     if(current_user==="player-1"){
        playerOneCurrentScore.innerText= selected_images.value
        score__0 += selected_images.value
        playerOneScore.innerText = score__0
     }else if(current_user==="player-2") {
        playerTwoCurrentScore.innerText= selected_images.value
        score__1 += selected_images.value
        playerTwoScore.innerText = score__1
     }
    currentScore.innerText =selected_images.value
})


const newGame = document.querySelector(".btn--new")
newGame.addEventListener("click", function(){
    window.location.reload()
})


const holdBtn = document.querySelector(".btn--hold")
const playerOne= document.querySelector(".player--0")
const playerTwo= document.querySelector(".player--1")

holdBtn.addEventListener("click", function(){
    if(current_user=== "player-1"){
        localStorage.setItem("current-player", "player-2")
        playerTwo.classList.add("player--active")
        playerOne.classList.remove("player--active")
    }else{
        localStorage.setItem("current-player", "player-1")
        playerOne.classList.add("player--active")
        playerTwo.classList.remove("player--active")


    }
    
})







