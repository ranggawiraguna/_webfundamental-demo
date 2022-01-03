//Event Layer 1
const allButton_1 = document.querySelectorAll(".LayoutParent:nth-child(1) .ContainerLayer > div:nth-child(1) .Card .btn")

allButton_1.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentNode.style.backgroundColor = randomColor;
    });
});


//Event Layer 2
const allButton_2 = document.querySelectorAll(".LayoutParent:nth-child(1) .ContainerLayer > div:nth-child(2) .Card .btn")

allButton_2.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentNode.style.backgroundColor = randomColor;

        event.preventDefault();
    });
});