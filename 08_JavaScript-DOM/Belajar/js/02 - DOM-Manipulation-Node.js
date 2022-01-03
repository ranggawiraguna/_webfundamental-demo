function event_layer1(name){
    const elemen = document.createElement(name);
    alert("Elemen " + elemen + " sudah dibuat dan masih disimpan didalam memori pemrograman...");
}


function event_layer2(text){
    const textNode = document.createTextNode(text);
    alert("Text " + textNode + " sudah dibuat dan siap disimpan kedalam suatu elemen...");
}

const newDiv = document.createElement("div");
function event_layer3(element, text){
    const newElement = document.createElement(element);
    const textNode = document.createTextNode(text);

    newElement.appendChild(textNode);

    newDiv.appendChild(newElement);
    document.querySelector(".LayoutParent:nth-child(3) .ContainerLayer").appendChild(newDiv);
}


function event_layer4(){
    let newBio = prompt("Masukkan biodata baru : ");

    if(Boolean(newBio)){
        newBio = document.createElement('p').appendChild(document.createTextNode(newBio));
        let nomorBaris = prompt("Masukkan nomor baris : ");

        if(Boolean(nomorBaris)){
            const parentNode = document.querySelector(".LayoutParent:nth-child(4) .ContainerLayer > div > ul");
            const elementAfter = document.querySelector(".LayoutParent:nth-child(4) .ContainerLayer > div > ul li:nth-child(" + nomorBaris + ")");
    
            parentNode.insertBefore(newBio, elementAfter);
        }
    }
}


function event_layer5(){
    let nomorBaris = prompt("Masukkan nomor baris yang ingin dihapus : ");
    if(Boolean(nomorBaris)){
        const parentNode = document.querySelector(".LayoutParent:nth-child(5) .ContainerLayer > div > ul");
        const elementRemove = document.querySelector(".LayoutParent:nth-child(5) .ContainerLayer > div > ul li:nth-child(" + nomorBaris + ")");
    
        parentNode.removeChild(elementRemove);
    }
}

function event_layer6(){
    let nomorBaris = prompt("Masukkan nomor baris yng ingin diganti : ");

    if(Boolean(nomorBaris)){
        let newData = prompt("Masukkan data baru : ");
        
        if(Boolean(newData)){
            newData = document.createElement('p').appendChild(document.createTextNode(newData));

            const parentNode = document.querySelector(".LayoutParent:nth-child(6) .ContainerLayer > div > ul");
            const oldData = document.querySelector(".LayoutParent:nth-child(6) .ContainerLayer > div > ul li:nth-child(" + nomorBaris + ")");
    
            parentNode.replaceChild(newData, oldData);
        }
    }
}