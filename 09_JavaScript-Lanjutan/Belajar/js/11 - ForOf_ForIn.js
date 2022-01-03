let i;

//For of - Array
const arr = ["Rangga Wiraguna", "1803015106", "Teknik Informatika", "2018"]

i = 2;
for (const data of arr) {
    document.querySelector(`.LayoutParent:nth-child(1) > div:nth-child(3) > p:nth-child(${i})`).innerHTML = data;
    i++;
}

for (const [i,data] of arr.entries()) {
    document.querySelector(`.LayoutParent:nth-child(1) > div:nth-child(4) > p:nth-child(${i+2})`).innerHTML = `${i}. ${data}`;
}


//For of - String
let name = "Rangga"

i = 2;
for (const data of name) {
    document.querySelector(`.LayoutParent:nth-child(1) > div:nth-child(5) > p:nth-child(${i})`).innerHTML = data;
    i++;
}



//For of - NodeList
const mhs = document.querySelectorAll(".LayoutParent:nth-child(1) > div:nth-child(6) > p");
for (const data of mhs) {
    console.log(data);
    console.log("\t  " + data.innerHTML);
}




//For in - Object
const obj_mhs = {
    name : "Rangga Wiraguna",
    nim  : "1803015106",
    ipk  : "3.65"
}

i = 2;
for (const attr in obj_mhs) {
    document.querySelector(`.LayoutParent:nth-child(2) > div p:nth-child(${i})`).innerHTML = attr + " : " + obj_mhs[attr];
    i++;
}