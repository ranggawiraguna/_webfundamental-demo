//Basic Destructuring Array
const arr1 = ["Rangga", "1803015106", "Teknik Informatika", "Angkatan", 3.65];
const [name_1, nim_1, jurusan_1, angkatan_1, ipk_1] = arr1;       //name = arr[0], nim = arr[1], jurusan = arr[2], angkatan = arr[3], ipk = arr[4];

document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4) > p:nth-child(2)").textContent = `Nama : ${name_1}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4) > p:nth-child(3)").textContent = `NIM : ${nim_1}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4) > p:nth-child(4)").textContent = `Jurusan : ${jurusan_1}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4) > p:nth-child(5)").textContent = `Angkatan : ${angkatan_1}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4) > p:nth-child(6)").textContent = `IPK : ${ipk_1}`;


//Skipping Destructuring Array
const arr2 = ["Rangga", "1803015106", "Teknik Informatika", "Angkatan", 3.65];
const [name_2, nim_2, , , ipk_2] = arr2;       //name = arr[0], nim = arr[1], skip, skip, ipk = arr[4];

document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(5) > p:nth-child(2)").textContent = `Nama : ${name_2}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(5) > p:nth-child(3)").textContent = `NIM : ${nim_2}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(5) > p:nth-child(4)").textContent = `IPK : ${ipk_2}`;


//Destructuring Swap Item Array
let a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = 5;
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(1)").textContent = `${a} , ${b} , ${c} , ${d} , ${e}`;

[a,b,c,d,e] = [e,d,c,b,a];
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(2)").textContent = `${a} , ${b} , ${c} , ${d} , ${e}`;

[e,d,c,b,a] = [d,e,c,a,b];
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(3)").textContent = `${a} , ${b} , ${c} , ${d} , ${e}`;




//Return Value Array Pada Function
function getArray(){
    return ["Rangga", "1803015106", "Teknik Informatika", "Angkatan", 3.65];
}

const [name_3, nim_3, jurusan_3, angkatan_3, ipk_3] = getArray();

document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(3) > p:nth-child(1)").textContent = `Nama : ${name_3}`;
document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(3) > p:nth-child(2)").textContent = `NIM : ${nim_3}`;
document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(3) > p:nth-child(3)").textContent = `Jurusan : ${jurusan_3}`;
document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(3) > p:nth-child(4)").textContent = `Angkatan : ${angkatan_3}`;
document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(3) > p:nth-child(5)").textContent = `IPK : ${ipk_3}`;



//Rest Values in Destructuring Array
const arr4 = ["Rangga", "1803015106", "Teknik Informatika", "Angkatan", 3.65];

const [name_4, nim_4, ...bio_4] = arr4;
document.querySelector(".LayoutParent:nth-child(4) > div:nth-child(3) > p:nth-child(1)").textContent = `Nama : ${name_4}`;
document.querySelector(".LayoutParent:nth-child(4) > div:nth-child(3) > p:nth-child(2)").textContent = `NIM : ${nim_4}`;
document.querySelector(".LayoutParent:nth-child(4) > div:nth-child(3) > p:nth-child(3)").textContent = `Bio : ${bio_4}`;



//Destructuring Object
let obj1 = {
    name_o1 : "Rangga Wiraguna",
    nim_o1 : "1803015106"
}

const {name_o1, nim_o1} = obj1;
document.querySelector(".LayoutParent:nth-child(5) > div:nth-child(5) > p:nth-child(1)").textContent = `Nama : ${name_o1}`;
document.querySelector(".LayoutParent:nth-child(5) > div:nth-child(5) > p:nth-child(2)").textContent = `NIM : ${nim_o1}`;

({name_o2, nim_o2} = { name_o2 : "Rangga Wiraguna",  nim_o2 : "1803015106" });
document.querySelector(".LayoutParent:nth-child(5) > div:nth-child(6) > p:nth-child(1)").textContent = `Nama : ${name_o2}`;
document.querySelector(".LayoutParent:nth-child(5) > div:nth-child(6) > p:nth-child(2)").textContent = `NIM : ${nim_o2}`;

const {name_o1 : name_5, nim_o1 : nim_5} = obj1;
document.querySelector(".LayoutParent:nth-child(5) > div:nth-child(7) > p:nth-child(1)").textContent = `Nama : ${name_5}`;
document.querySelector(".LayoutParent:nth-child(5) > div:nth-child(7) > p:nth-child(2)").textContent = `NIM : ${nim_5}`;



//Rest Parameter in Desctructuring Object
const obj2 = {
    name : "Rangga", 
    nim : "1803015106", 
    jurusan : "Teknik Informatika", 
    angkatan : "2018", 
    ipk : 3.65
}

const {name : name_6, nim : nim_6, ...bio_6} = obj2;
document.querySelector(".LayoutParent:nth-child(6) > div:nth-child(3) > p:nth-child(1)").textContent = `Nama : ${name_6}`;
document.querySelector(".LayoutParent:nth-child(6) > div:nth-child(3) > p:nth-child(2)").textContent = `NIM : ${nim_6}`;
document.querySelector(".LayoutParent:nth-child(6) > div:nth-child(3) > p:nth-child(3)").textContent = `Jurusan : ${bio_6.jurusan}`;
document.querySelector(".LayoutParent:nth-child(6) > div:nth-child(3) > p:nth-child(4)").textContent = `Angkatan : ${bio_6.angkatan}`;
document.querySelector(".LayoutParent:nth-child(6) > div:nth-child(3) > p:nth-child(5)").textContent = `IPK : ${bio_6.ipk}`;


//Get Spesific attribut for Argument (Object)
const obj3 = {
    name : "Rangga Wiraguna", 
    nim : "1803015106", 
    jurusan : "Teknik Informatika", 
    angkatan : "2018", 
    ipk : 3.65
}

function showBio({name, nim}){
    document.querySelector(".LayoutParent:nth-child(7) > div:nth-child(3) > p:nth-child(1)").textContent = `Nama : ${name}`;
    document.querySelector(".LayoutParent:nth-child(7) > div:nth-child(3) > p:nth-child(2)").textContent = `NIM : ${nim}`;
}

showBio(obj3);



