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
dot35.addEventListener('click', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/earTip.png";
    typeImage.style.width = "45%";

});

dot35.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        location.reload();
    }, 2000); 
});

//dot16
dot16.addEventListener('click', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/transparent.png";
    typeImage.style.height = "60%";
    typeImage.style.objectFit = "contain";
    typeImage.style.transform = "translateY(6%)";

});

dot16.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        location.reload();
    }, 2000); 
});

//dot30
dot30.addEventListener('click', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/noise ANC.png";
    typeImage.style.width = "45%";
    // typeImage.style.objectFit = "contain";
    typeImage.style.transform = "scale(1.1) translateY(10%)";

});

dot30.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        location.reload();
    }, 2000); 
});

//dot40
dot40.addEventListener('click', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/ip54.png";
    typeImage.style.width = "45%";
    // typeImage.style.objectFit = "contain";
    // typeImage.style.transform = "scale(1.25) translateY(10%)";

});

dot40.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        location.reload();
    }, 2000); 
});

//dot8
dot8.addEventListener('click', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/power.png";
    // typeImage.style.width = "45%";
    // typeImage.style.objectFit = "contain";
    typeImage.style.transform = "scale(1.15) translateY(12%)";

});

dot8.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        location.reload();
    }, 2000); 
});

//dot53
dot53.addEventListener('click', () => {
    colorType.innerHTML = "";

    typeImage.src = "./images/sensor.png";
    typeImage.style.width = "45%";
    // typeImage.style.objectFit = "contain";
    typeImage.style.transform = "scale(1.15) translateY(12%)";

});

dot53.addEventListener('mouseout', () => {
    setTimeout(() => {
        textMain.innerHTML = originalText; // Restore 
        location.reload();
    }, 2000); 
});


// Check screen width on page load
if (window.innerWidth < 800) {
    alert("Please open this website on a desktop or laptop .");
}

