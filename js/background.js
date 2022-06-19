const images = ["1.PNG","2.PNG","3.PNG"];

const chosenImage=images[Math.floor(Math.random()*images.length)]

const bgImage=document.createElement("img")

bgImage.src=`img/${chosenImage}`
document.body.appendChild(bgImage)