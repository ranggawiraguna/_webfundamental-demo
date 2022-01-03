function event_layer1(){
    document.querySelector(".LayoutParent:nth-child(1) > div > div:first-of-type").innerHTML = prompt("Masukkan script kedalam content : ");
}

let background = 0, color_text=0, border=0;
function event_layer2(action){
    if(action.includes("Background")){
        if((background%2) == 0){
            document.querySelector(".LayoutParent:nth-child(2) > div > div:first-of-type").style.backgroundColor = "lightsalmon"; 
        }else{
            document.querySelector(".LayoutParent:nth-child(2) > div > div:first-of-type").style.backgroundColor = "indianred";             
        }
        background = (background+1) % 2;
    } else if(action.includes("Color Text")){
        if((color_text%2) == 0){            
            document.querySelector(".LayoutParent:nth-child(2) > div > div:first-of-type").style.color = "black";             
        }else{
            document.querySelector(".LayoutParent:nth-child(2) > div > div:first-of-type").style.color = "white";             
        }
        color_text = (color_text+1) % 2;
    } else if(action.includes("Border")){
        if((border%2) == 0){
            document.querySelector(".LayoutParent:nth-child(2) > div > div:first-of-type").style.border = "3px solid blue";             
        }else{
            document.querySelector(".LayoutParent:nth-child(2) > div > div:first-of-type").style.border = "none";             
        }
        border = (border+1) % 2;
    }
}


let changed=0; remove=false, nRemove=0;
function event_layer3(action){
    if(action.includes("Get")){
        alert("Link : " + document.querySelector(".LayoutParent:nth-child(3) > div > div:first-of-type a").getAttribute("href"));
    } else if(action.includes("Set")){
        let temp = prompt("Create New Link : ");
        if(Boolean(temp)){
            document.querySelector(".LayoutParent:nth-child(3) > div > div:first-of-type a").setAttribute("href", temp);        
            if(changed===0){
                document.querySelector(".LayoutParent:nth-child(3) > div > div:first-of-type").innerHTML += "\n<br><br>\n<p>(Link is changed)</p>\n";
                changed++;
            }
            remove = false;
        }
    } else if(action.includes("Remove")){
        if(!remove){
            document.querySelector(".LayoutParent:nth-child(3) > div > div:first-of-type a").removeAttribute("href");
    
            if(changed===0){
                document.querySelector(".LayoutParent:nth-child(3) > div > div:first-of-type").innerHTML += "\n<br><br>\n<p>(Link is changed)</p>\n";
                changed++;
            }
            remove = true;
        } else {
            alert("Link telah dihapus")
        }
    }
}


function event_layer4(action){
    if(action.includes("Add")){
        //classList.add() akan menambahkan class ke elemen yang dituju tanpa menimpa class yang lain, jika class sudah ada maka tidak masalah 
        let temp = prompt("Mau ditambahin class apa contentnya ? \n (bw / colorfull / box-light / box-dark / text-normal / text-bold) \n");

        if(Boolean(temp)){
            if("bw / colorfull / box-light / box-dark / text-normal / text-bold".includes(temp)){
                document.querySelector(".LayoutParent:nth-child(4) > div > div:first-of-type").classList.add(temp);
                alert("Class yang dipilih berhasil ditambahkan");                
            } else {
                alert("Class yang dipilih tidak tersedia");
            }
        }
    }else if(action.includes("Remove")){
        //classList.remove() akan menghapus class ke elemen yang dituju, dan jika class ternyata tidak ada pada elemen maka tidak masalah 
        let temp = prompt("Mau hapus class apa di contentnya ? \n (bw / colorfull / box-light / box-dark / text-normal / text-bold) \n");

        if(Boolean(temp)){
            if("bw / colorfull / box-light / box-dark / text-normal / text-bold".includes(temp)){
                document.querySelector(".LayoutParent:nth-child(4) > div > div:first-of-type").classList.remove(temp);
                alert("Class yang dipilih berhasil dihapus");                
            } else {
                alert("Class yang dipilih tidak tersedia");
            }
        }
    }else if(action.includes("Toggle")){
        //classList.toggle() akan bekerja seperti saklar on/off pada attribut class, jika tidak ada maka tambahkan, jika ada maka hilangkan 

        let temp = prompt("Mau toggle class apa di contentnya ? \n (bw / colorfull / box-light / box-dark / text-normal / text-bold) \n");

        if(Boolean(temp)){
            if("bw / colorfull / box-light / box-dark / text-normal / text-bold".includes(temp)){
                if(document.querySelector(".LayoutParent:nth-child(4) > div > div:first-of-type").classList.toggle(temp)){
                    alert("Class yang dipilih berhasil ditambahkan");                
                } else {
                    alert("Class yang dipilih berhasil dihapus");                
                }
            } else {
                alert("Class yang dipilih tidak tersedia");
            }
        }
    }else if(action.includes("Item")){
        //classList.item(index) akan mengembalikan suatu clas yang berada pada index tertentu 
        let index = prompt("Mau cari index ke berapa di contentnya ? \n");

        if(Boolean(index)){
            let classIndex  = document.querySelector(".LayoutParent:nth-child(4) > div > div:first-of-type").classList.item(index);
            if(Boolean(classIndex)){
                alert("Class pada index ke-" + index + " adalah " + classIndex);                
            } else {
                alert("Class pada index ke-" + index + " tidak ada");                                
            }
        }
    }else if(action.includes("Contains")){
        //classList.contains() akan memeriksa apakah suatu class yang dimasukkan kedalam argument ada pada class elemen atau tidak          
        let className = prompt("Mau cari class apa di contentnya ? \n");

        if(Boolean(className)){
            let thereIsClass  = document.querySelector(".LayoutParent:nth-child(4) > div > div:first-of-type").classList.contains(className);
            if(Boolean(thereIsClass)){
                alert("Class " + className + " ada pada content");                
            } else {
                alert("Class " + className + " tidak ada pada content");                
            }
        }
    }else if(action.includes("Replace")){
        //classList.replace() akan mengganti suatu class yang ada pada elemen dengan class lainnya
        //akan tetapi jika class yang ingin diganti tidak ditemuka maka fungsi replace tidak bekerja          
        let oldClass = prompt("Mau ganti class yang mana di contentnya ? \n");
        let newClass = prompt("Mau diganti sama apa class " + oldClass + " nya? \n");

        if(Boolean(oldClass) && Boolean(newClass)){
            let succesReplace = document.querySelector(".LayoutParent:nth-child(4) > div > div:first-of-type").classList.replace(oldClass, newClass);

            if(succesReplace){
                alert("Class " + oldClass + " berhasil diganti oleh " + newClass + "\n");
            } else {
                alert("Pergantian class gagal dilakukan karena class yang ingin diganti tidak ada didalam elemen")
            }
        }
    }
}