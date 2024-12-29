const gold = document.querySelector("#gold");
const black = document.querySelector("#black");
const typeImage = document.querySelector("#type-img");
const textMain = document.querySelector("#text-main");
const dot8 = document.querySelector("#dot8");
const dot16 = document.querySelector("#dot16");
const dot30 = document.querySelector("#dot30");
const dot35 = document.querySelector("#dot35");
const dot40 = document.querySelector("#dot40");
const dot53 = document.querySelector("#dot53");
const colorType = document.querySelector(".color-type")
const div2 = document.querySelector(".div2")

gold.addEventListener('click', () => {
    
    typeImage.src = "./images/gold.png";
})

black.addEventListener('click', () => {
    
    typeImage.src = "./images/black.png";
})

const originalText = textMain.innerHTML; // for restore

//dot35
dot35.addEventListener('mouseover', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/earTip.png";
    typeImage.style.width = "45%";

});

dot35.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        div2.innerHTML= "";
    }, 2000); 
});


