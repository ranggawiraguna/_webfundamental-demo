//Basic Closure
function init(){
    let name = "Rangga Wiraguna"
    let nim  = "1803015106";

    function showBio(){
        const layer11 = document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(5)");
        layer11.children[0].innerHTML = "Name : " + name;
        layer11.children[1].innerHTML = "NIM : " + nim;
    }

    showBio();
}

init();


function welcomeText(time){
    return function sayGreetings(name){
        return "Hallo " + name + ", selamat " + time + "!";
    }
}

const layer12 = document.querySelector(".LayoutParent:nth-child(1) div:nth-child(6)");

let goodMorning = welcomeText("Pagi");
layer12.children[0].innerHTML = goodMorning("Rangga");
let goodAfternoon = welcomeText("Siang");
layer12.children[1].innerHTML = goodAfternoon("Fasya");
let goodNight = welcomeText("Malam");
layer12.children[2].innerHTML = goodNight("Agus");




//Var Closure & Var Local innerFunction
function welcomeText_2(){
    let univ = "Universitas Bacotan";

    return function showBio(name){
        //univ is a var closure, while name is a var local innerFunction 

        const layer2 = document.querySelector(".LayoutParent:nth-child(2) > div");
        layer2.children[0].innerHTML = "Hallo " + name + ", Selamat datang di " + univ + "!";
    }
}

let welcome = welcomeText_2();
welcome("Rangga Wiraguna");




//Closure Kompleks
const Mahasiswa  = (function(){
    const containerBio = document.querySelector(".LayoutParent:nth-child(3)");
    let univ = "Universitas Bacotan";
    let counter = 0;

    function Mahasiswa(name, nim){
        this.name = name;
        this.nim = nim;
        this.no_urut = ++counter;
        this.universitas = univ;
    }

    Mahasiswa.prototype.showBio = function(){
        const card = containerBio.children[parseInt(this.no_urut) + 4];

        card.children[0].innerHTML = "Name : " + this.name;
        card.children[1].innerHTML = "NIM : " + this.nim;
        card.children[2].innerHTML = "No-Urut : " + this.no_urut;
        card.children[3].innerHTML = "universitas : " + this.universitas;
    }

    return Mahasiswa;
})();

org1 = new Mahasiswa("Rangga Wiraguna", "1803015106");
org1.showBio();
console.log(org1);

org2 = new Mahasiswa("Fasya Nazihah", "1803015057");
org2.showBio();
console.log(org2);

org3 = new Mahasiswa("Agus Budiantoro", "1803015000");
org3.showBio();
console.log(org3);

