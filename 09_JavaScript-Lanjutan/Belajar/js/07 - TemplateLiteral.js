// Basic Template Literal
let str11 = `Nama saya Rangga Wiraguna,`;
let str12 = `Saya tinggal di jakarta,`;
let str13 = `Hobi saya muter-muter.`;

document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(1)").innerHTML = str11;
document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(2)").innerHTML = str12;
document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(3)").innerHTML = str13;



//Multi-line string
let str2 = `Nama saya Fasya Nazihah,
Saya tinggal di cipenjo,
Hobi saya guling-gulingan.`;

document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(1)").innerHTML = str2;
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(1)").style.textAlign = "center";
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(3)").innerHTML = "(innerHTML gak ngenalin enter, makanya jadi satu baris, coba liat di console dah)";
console.log(str2); console.log("\n\n\n")



//Embedded Expression
let name = "Rangga Wiraguna";
let nim = "1803015106";
let str31 = `Nama saya ${name}, dengan nim ${nim}`;
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(1)").innerHTML = str31;

function getName(){ return name; }
function getNim(){ return nim; }
let str32 = `Nama saya ${getName()}, dengan nim ${getNim()}`;
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(2)").innerHTML = str32;

let str33 = `Hasil dari 4 * 3 adalah ${4*3}`;
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(3)").innerHTML = str33;

let str34 = `Angka 17 merupakan angka ${(17%2 == 0) ? "Genap" : "Ganjil"}`;
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(4)").innerHTML = str34;



//HTML Fragments
const container = document.querySelector(".LayoutParent:nth-child(4) > div:nth-child(4)");
const content = 
`
    <ul>
        <li>Nama : Rangga Wiraguna</li>
        <li>NIM : 1803015106</li>
        <li>Angkatan : 2018</li>
    </ul>
`;
container.innerHTML = content;



function Mahasiswa(name, nim, angkatan){
    this.name = name;
    this.nim = nim;
    this.angkatan = angkatan;
}

let mhs1 = new Mahasiswa("Rangga Wiraguna", "1803015106", "2018"); 

const container_2 = document.querySelector(".LayoutParent:nth-child(4) > div:nth-child(5)");
const content_2 = 
`
    <ul>
        <li>Nama : ${mhs1.name}</li>
        <li>NIM : ${mhs1.nim}</li>
        <li>Angkatan : ${mhs1.angkatan}</li>
    </ul>
`;
container_2.innerHTML = content_2;



let mhs = [
    ["Rangga Wiraguna", "1803015106", "2018"], 
    ["Fasya Nazihah", "1803015057", "2018"], 
    ["Agus Budiantoro", "1803015000", "2000"] 
];

let mhsListScript = mhs.map( m => `<ul>\n` + m.map(a => `\t<li>` + a + `</li>`).reduce((a,c)=> a + c + '\n', ``) + `</ul>\n`).reduce((a,c) => a+c ,``);

console.log(mhsListScript);

document.querySelector(".LayoutParent:nth-child(4) > div:nth-child(6)").innerHTML = mhsListScript;
