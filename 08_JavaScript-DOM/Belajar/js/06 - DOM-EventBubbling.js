// Prototype
function createCard(indexParent){
    const emoji = ["😈", "👻", "👽", "💩", "☠️", "🤑", "😍"];
    let nama = prompt("Masukkan Nama : ");
    if(Boolean(nama)){
        let telp = prompt("Masukkan Nomor Telepon : ");
        
        let randomEmoji = Math.round(Math.random() * 6);
        if(Boolean(telp)){
            const newCard = document.createElement('div');            
            newCard.className = "Card";
            newCard.innerHTML =     '<span class="image">' + emoji[randomEmoji] + '</span>\n' +
                                    '<span>\n' +
                                        '<p class="name">' + nama + '</p>\n' +
                                        '<p class="number">(' + telp + ')</p>\n' +
                                    '</span>\n' +
                                    '<a href="#" class="btn">🎨</a>\n';
            
            const parent = document.querySelector(".LayoutParent:nth-child(" + indexParent + ") .ContainerLayer > div");
            const beforeElement = document.querySelector(".LayoutParent:nth-child(" + indexParent + ") .ContainerLayer > div > div.Action");

            parent.insertBefore(newCard, beforeElement);
        }
    }
}



//Event Layer 1
const allCard_1 = document.querySelectorAll(".LayoutParent:nth-child(1) .ContainerLayer > div:nth-child(1) .Card");
const allButton_1 = document.querySelectorAll(".LayoutParent:nth-child(1) .ContainerLayer > div:nth-child(1) .Card .btn")


allCard_1.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        alert("This card for : " +  element.children[1].children[0].innerHTML + element.children[1].children[1].innerHTML);
        event.preventDefault();
    });
});

allButton_1.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentNode.style.backgroundColor = randomColor;
        event.preventDefault();
    });
});


//Event Layer 2
const allCard_2 = document.querySelectorAll(".LayoutParent:nth-child(2) .ContainerLayer > div:nth-child(1) .Card");
const allButton_2 = document.querySelectorAll(".LayoutParent:nth-child(2) .ContainerLayer > div:nth-child(1) .Card .btn")

allCard_2.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        alert("This card for : " +  element.children[1].children[0].innerHTML + element.children[1].children[1].innerHTML);
        event.preventDefault();
    });
});

allButton_2.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentNode.style.backgroundColor = randomColor;
        event.preventDefault();
        event.stopPropagation();
    });
});



//Event Layer 3
const allCard_3 = document.querySelectorAll(".LayoutParent:nth-child(3) .ContainerLayer > div:nth-child(1) .Card");
const allButton_3 = document.querySelectorAll(".LayoutParent:nth-child(3) .ContainerLayer > div:nth-child(1) .Card .btn")

allCard_3.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        alert("This card for : " +  element.children[1].children[0].innerHTML + " " + element.children[1].children[1].innerHTML);
        event.preventDefault();
    });
});

allButton_3.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentNode.style.backgroundColor = randomColor;
        event.preventDefault();
        event.stopPropagation();
    });
});

const button_3 = document.querySelector(".LayoutParent:nth-child(3) .ContainerLayer .Action button");

button_3.addEventListener('click', ()=>{
    createCard(3);
});



//Event Layer 4
const container_4 = document.querySelector(".LayoutParent:nth-child(4) .ContainerLayer > div:nth-child(1)");
container_4.addEventListener('click', (element)=>{
    if(element.target.className === "btn"){
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        element.target.parentElement.style.backgroundColor = randomColor;
        element.preventDefault();
    } else if(element.target.className === "Card"){
        alert("This card for : " +  element.target.children[1].children[0].innerHTML + " " + element.target.children[1].children[1].innerHTML);
        element.preventDefault();
    } else if(element.target.className === "btn-add") {
        createCard(4);
    } else if(element.target.parentElement.className === "Card"){
        alert("This card for : " +  element.target.parentElement.children[1].children[0].innerHTML + " " + element.target.parentElement.children[1].children[1].innerHTML);
        element.preventDefault();
    } else if(element.target.parentElement.parentElement.className === "Card"){
        alert("This card for : " +  element.target.parentElement.parentElement.children[1].children[0].innerHTML + " " + element.target.parentElement.parentElement.children[1].children[1].innerHTML);
        element.preventDefault();
    }
});









