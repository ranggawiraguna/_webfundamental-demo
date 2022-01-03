//Basic Destructuring Function
function showBio_1({name,nim,ipk}){
    document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(1)").textContent = `Nama : ${name}`;
    document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(2)").textContent = `NIM : ${nim}`;
    document.querySelector(".LayoutParent:nth-child(1) > div > p:nth-child(3)").textContent = `IPK : ${ipk}`;
}

const mhs1 = {
    name : "Rangga Wiraguna", 
    nim : "1803015106", 
    jurusan : "Teknik Informatika", 
    angkatan : "2018", 
    ipk : 3.65
}

showBio_1(mhs1);





//Nested Destructuring Function Argument
function showBio_2({name,nim,ip:{smt1,smt2, smt3, smt4}}){
    document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(1)").textContent = `Nama : ${name}`;
    document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(2)").textContent = `NIM : ${nim}`;
    document.querySelector(".LayoutParent:nth-child(2) > div > p:nth-child(3)").textContent = `IPS : ${smt1} , ${smt2} , ${smt3} , ${smt4}`;
}

const mhs2 = {
    name : "Rangga Wiraguna", 
    nim : "1803015106", 
    jurusan : "Teknik Informatika", 
    angkatan : "2018", 
    ip : {
        smt1 : 3.42,
        smt2 : 3.35,
        smt3 : 3.56,
        smt4 : 3.52        
    }
}

showBio_2(mhs2);