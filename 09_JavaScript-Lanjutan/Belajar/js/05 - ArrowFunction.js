// Basic Arrow Function
const layer11 = document.querySelector(".LayoutParent:nth-child(1) div:nth-child(5)");
let arrFunct_1 = () => { layer11.innerHTML = "Hallo Rangga"; }
arrFunct_1();


const layer12 = document.querySelector(".LayoutParent:nth-child(1) div:nth-child(6)");
let arrFunct_2 = nama => "Hallo " + nama;
layer12.innerHTML = arrFunct_2("Rangga");


const layer13 = document.querySelector(".LayoutParent:nth-child(1) div:nth-child(7)");
let arrFunct_3 = (nama,waktu) => "Hallo " + nama + ", Selamat " + waktu + "!";
layer13.innerHTML = arrFunct_3("Rangga","Malam");


const layer14 = document.querySelector(".LayoutParent:nth-child(1) div:nth-child(8)");
let arrFunct_4 = (nama,waktu) => {
    console.log("run arrFunct_3()");
    return "Hallo " + nama + ", Selamat " + waktu + "!";
}
layer14.innerHTML = arrFunct_4("Rangga","Malam");


let mahasiswa = ["Rangga","Fasya","Agus"];
let newArray = mahasiswa.map(nama => ({nama:nama, fakultas:"Fakultas Teknik"}));
console.log(newArray)


// This Pada Arrow Function

// Error karena arrow function tidak dapat digunakan sebagai constuctor function yang mengakses this
// let Mahasiswa = (name, nim)=>{
//     this.name = name;
//     this.nim = nim;
// }


const layer22 = document.querySelector(".LayoutParent:nth-child(2) > div:nth-child(6)")
let Mahasiswa = function(name, nim){
    this.name = name;
    this.nim = nim;
    this.showBio = ()=>{
        layer22.children[0].innerHTML = "Name : " + this.name;
        layer22.children[1].innerHTML = "NIM : " + this.nim;

        //Pada proses ini terlihat bahwa tidak terjadi error, akan tetapi sebenarnya function showBio tidak mengenali this
        //Hal ini tidak error dikarenakan showBio mencari this ke block scope diatasnya, karena block scope diatasnya mendeklarasikan this jadi pada function ini tidak terdapat error
    }
}

let mhs1 = new Mahasiswa("Rangga", "1803015106");
mhs1.showBio();




//Study Case
const box = document.querySelector(".box");

box.addEventListener('click', function(){
    let animation = ["resize","bw"];

    if(this.classList.contains(animation[0])){ animation = [animation[1], animation[0]]; }

    this.classList.toggle(animation[0]);

    setTimeout(()=>{
        //Pada function ini jika menggunakan function declaration sebagai callback, maka function akan terkena hoisting, dan di scope parentnya menjadi global
        //untuk itu digunakan function arrow supaya tidak terkena hoisting, walaupun function arrow tidak mengenali this, akan tetapi parent scopenya mengenali this
        this.classList.toggle(animation[1]);        
    }, 1000)
});


