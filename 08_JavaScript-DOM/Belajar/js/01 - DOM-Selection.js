function event_layer1(pilihan){
    switch(pilihan){
        case "Change Theme" :
            let classList = document.getElementById("layer1_container").classList, index = "";
            index = classList.item(1).replace("theme","");
            classList.remove(classList.item(1));

            index = (parseInt(index)%3)+1;
            document.getElementById("layer1_container").classList.add("theme"+index);
            break;
            
        case "Change Name" :
            let name =  prompt("Silahkan masukkan Nama yang baru : ");
            if(Boolean(name)){document.getElementById("fieldNama").innerHTML = name;}
            break;

        case "Change Nim" :
            let nim =  prompt("Silahkan masukkan NIM yang baru : ");
            if(Boolean(nim)){document.getElementById("fieldNim").innerHTML = nim;}
            break;

        case "Change Jurusan" :
            let jurusan =  prompt("Silahkan masukkan Jurusan yang baru : ");
            if(Boolean(jurusan)){document.getElementById("fieldJurusan").innerHTML = jurusan;}
            break;

        case "Change Angkatan" :
            let angkatan =  prompt("Silahkan masukkan Angkatan yang baru : ");
            if(Boolean(angkatan)){document.getElementById("fieldAngkatan").innerHTML = angkatan;}
            break;
    }
}


function event_layer2(tag){
    if(Boolean(tag)){
        let getTag = document.querySelector(".LayoutParent:nth-child(2)").getElementsByTagName(tag);

        for(let i=0; i<getTag.length; i++){
            let next = confirm("<"+getTag[i].tagName.toLowerCase()+">\n" + getTag[i].innerHTML + "\n</"+getTag[i].tagName.toLowerCase()+">");

            if(!next){
                i = getTag.length;
            }
        }
    } else {
        alert("Silahkan masukkan tag untuk ditelusuri pada layer 2!")
    }
}


function event_layer3(){
    let getClass = document.querySelector(".LayoutParent:nth-child(3)").getElementsByClassName("IndexBio");

    for(let i=0; i<getClass.length; i++){
        let next = confirm("<"+getClass[i].tagName.toLowerCase()+">\n" + getClass[i].innerHTML + "\n</"+getClass[i].tagName.toLowerCase()+">");

        if(!next){
            i = getClass.length;
        } else {
            getClass[i].style.color = "blue";
            getClass[i].style.fontWeight = "bold";
        }
    }    
}

function event_layer4(){    
    document.querySelector("#layer4_container > div:nth-child(1) > p:nth-child(2)").style.color = "blue";
    document.querySelector("#layer4_container > div:nth-child(2) > p:nth-child(2)").style.color = "blue";
    document.querySelector("#layer4_container > div:nth-child(3) > p:nth-child(2)").style.color = "blue";

    document.querySelector("#layer4_container > div:nth-child(1) > p:nth-child(4)").style.color = "blue";
    document.querySelector("#layer4_container > div:nth-child(2) > p:nth-child(4)").style.color = "blue";
    document.querySelector("#layer4_container > div:nth-child(3) > p:nth-child(4)").style.color = "blue";
}

function event_layer5(){
    let getAllQuery = document.querySelectorAll("#layer5_container > div > p:nth-child(even)");

    for(let i=0; i<getAllQuery.length; i++){
        getAllQuery[i].style.color = "blue";
    }
}