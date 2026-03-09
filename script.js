// FORM ALERT

const form = document.querySelector(".contact-form")

if(form){

form.addEventListener("submit",function(e){

e.preventDefault()

alert("Pesan berhasil dikirim!")

form.reset()

})

}

document.addEventListener("DOMContentLoaded", function(){

/* =========================
   PARTICLE GENERATOR
========================= */

const particleContainer = document.querySelector(".particles")

if(particleContainer){

for(let i = 0; i < 40; i++){

const p = document.createElement("span")

p.style.left = Math.random()*100 + "%"

p.style.animationDuration = (15 + Math.random()*20) + "s"

p.style.opacity = Math.random()

p.style.transform = `translateY(${Math.random()*800}px)`

particleContainer.appendChild(p)

}

}


/* =========================
   AURA PARALLAX EFFECT
========================= */

const aura1 = document.querySelector("body::before")
const aura2 = document.querySelector("body::after")

document.addEventListener("mousemove", function(e){

const x = (window.innerWidth / 2 - e.clientX) / 40
const y = (window.innerHeight / 2 - e.clientY) / 40

document.body.style.backgroundPosition =
`${50 + x}% ${50 + y}%`

})


/* =========================
   SMOOTH BUTTON HOVER BOOST
========================= */

const buttons = document.querySelectorAll(".btn, .btn-outline")

buttons.forEach(btn=>{

btn.addEventListener("mouseenter", ()=>{
btn.style.transform="translateY(-4px) scale(1.02)"
})

btn.addEventListener("mouseleave", ()=>{
btn.style.transform="translateY(0) scale(1)"
})

})


/* =========================
   SAFE FORM HANDLER
========================= */

const form = document.querySelector(".contact-form")

if(form){

form.addEventListener("submit", function(e){

e.preventDefault()

alert("Pesan berhasil dikirim!")

form.reset()

})

}

})

document.addEventListener("DOMContentLoaded",function(){

/* RANDOM FLAME */

const flames=document.querySelectorAll(".flame")

flames.forEach(flame=>{

flame.style.left=Math.random()*100+"%"

flame.style.animationDuration=(6+Math.random()*6)+"s"

flame.style.animationDelay=Math.random()*5+"s"

})



/* SPARK GENERATOR */

const sparkContainer=document.querySelector(".fire-sparks")

for(let i=0;i<40;i++){

let spark=document.createElement("span")

spark.style.left=Math.random()*100+"%"

spark.style.bottom="0"

spark.style.animationDuration=(6+Math.random()*8)+"s"

spark.style.opacity=Math.random()

sparkContainer.appendChild(spark)

}



/* PARALLAX BACKGROUND */

document.addEventListener("mousemove",function(e){

let x=(window.innerWidth/2-e.clientX)/60
let y=(window.innerHeight/2-e.clientY)/60

document.body.style.backgroundPosition=`${50+x}% ${50+y}%`

})

})