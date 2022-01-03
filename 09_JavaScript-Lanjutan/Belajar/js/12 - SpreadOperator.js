// Basic Spread Operator
const mhs1 = ["Rangga Wiraguna", "1803015106", "Teknik Informatika", "2018"];

document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(1)").innerHTML = [...mhs1];
document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(2)").innerHTML = [...mhs1[0]];


//Menggabungkan Array
const mhs2 = ["Rangga Wiraguna", "1803015106", "Teknik Informatika", "2018"];
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(1)").innerHTML = [...mhs2];

const mhs2_ips = [3.45, 3.52, 3.56, 3.53];
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(2)").innerHTML = [...mhs2_ips];

const newMhs2 = [...mhs2, ...mhs2_ips];
document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(3)").innerHTML = newMhs2;



//Mengcopy Array
const data = ["Rangga", "Fasya", "Agus"];
const newData = [...data];      //Jika tidak dengan spread operator, misal newData = data , maka array akan memiliki referensi yang sama, artinya mereka tetap satu array walau variablenya berbeda

document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(1)").innerHTML = "Data : " + data;
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(2)").innerHTML = "New Data : " + newData;

newData[2] = "Otong";
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(4)").innerHTML = "Data : " + data;
document.querySelector(".LayoutParent:nth-child(3) > div > p:nth-child(5)").innerHTML = "New Data : " + newData;
