//Event Layer 1
const allButton_1 = document.querySelectorAll(".LayoutParent:nth-child(1) .ContainerLayer .Card .btn")

allButton_1.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentNode.style.backgroundColor = randomColor;
    });
});



//Event Layer 2
const allButton_2 = document.querySelectorAll(".LayoutParent:nth-child(2) .ContainerLayer .Card .btn")

allButton_2.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
        event.target.parentElement.style.backgroundColor = randomColor;
    });
});


//Event Layer 3
const allButton_3 = document.querySelectorAll(".LayoutParent:nth-child(3) .ContainerLayer .Card .btn")

allButton_3.forEach((element, i)=>{
    element.addEventListener('dblclick', (event)=>{
        if(i!=3){
            let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
            (event.target.parentElement).nextSibling.nextSibling.style.backgroundColor = randomColor;
        } else {
            alert("Parent dari elemen yang dipilih tidak meimiliki saudara setelahnya");
        }
    });
});

//Event Layer 4
const allButton_4 = document.querySelectorAll(".LayoutParent:nth-child(4) .ContainerLayer .Card .btn")

allButton_4.forEach((element, i)=>{
    element.addEventListener('click', (event)=>{
        if(i!=3){
            let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
            (event.target.parentElement).nextElementSibling.style.backgroundColor = randomColor;
        } else {
            alert("Parent dari elemen yang dipilih tidak meimiliki saudara setelahnya");
        }
    });
});

//Event Layer 5
const allButton_5 = document.querySelectorAll(".LayoutParent:nth-child(5) .ContainerLayer .Card .btn")

allButton_5.forEach((element, i)=>{
    element.addEventListener('dblclick', (event)=>{
        if(i!=0){
            let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
            (event.target.parentElement).previousSibling.previousSibling.style.backgroundColor = randomColor;
        } else {
            alert("Parent dari elemen yang dipilih tidak meimiliki saudara sebelumnya");
        }
    });
});

//Event Layer 6
const allButton_6 = document.querySelectorAll(".LayoutParent:nth-child(6) .ContainerLayer .Card .btn")

allButton_6.forEach((element, i)=>{
    element.addEventListener('click', (event)=>{
        if(i!=0){
            let randomColor = "rgb(" + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + "," + Math.round((Math.random()*255)+1) + ")";
            (event.target.parentElement).previousElementSibling.style.backgroundColor = randomColor;
        } else {
            alert("Parent dari elemen yang dipilih tidak meimiliki saudara sebelumnya");
        }
    });
});

