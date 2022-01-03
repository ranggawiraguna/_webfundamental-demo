//Higher Order Function
function tampilkan(Mahasiswa, method){
    method( "Name : " + Mahasiswa.name + "\n" +
            "NIM  : " + Mahasiswa.nim  + "\n"
          );
}

let createMahasiswa = (function(){
    function Mahasiswa(name, nim){
        this.name = name;
        this.nim = nim;
    }

    return Mahasiswa;
})();

document.querySelector(".LayoutParent:nth-child(1) button").addEventListener('click', ()=>{
    let mhs1 = new createMahasiswa("Rangga","1803015106");
    console.log(mhs1);
    tampilkan(mhs1, alert);    
});



//Filter
    //arr.filter(callback  logic);
    let arr_1 = [70, 80, 66, 76, 54, 64, 83, 56, 90];
    const filterContainer_1 = document.querySelector(".LayoutParent:nth-child(2) > div");
    filterContainer_1.children[0].innerHTML =  "Array Asli : [" + arr_1.toString() + "]";
    filterContainer_1.children[1].innerHTML =  "Array Filter  : [" + arr_1.filter(e => e > 70).toString() + "]";

//Map
    //arr.map(callback  operation);
    let arr_2 = [70, 80, 66, 76, 54, 64, 83, 56, 90];
    const filterContainer_2 = document.querySelector(".LayoutParent:nth-child(3) > div");
    filterContainer_2.children[0].innerHTML =  "Array Asli : [" + arr_2.toString() + "]";
    filterContainer_2.children[1].innerHTML =  "Array Map  : [" + arr_2.map(e => e + 10).toString() + "]";
0
//Reduce
    //arr.map(callback operation, startValue);
    //accumulator = hasil operasi reduce yang sedang berjalan
    //curentValue = nilai elemen array yang sedang diseleksi
    let arr_3 = [70, 80, 66, 76, 54, 64, 83, 56, 90];
    const filterContainer_3 = document.querySelector(".LayoutParent:nth-child(4) > div");
    filterContainer_3.children[0].innerHTML =  "Array Asli : [" + arr_3.toString() + "]";
    filterContainer_3.children[1].innerHTML =  "Array Reduce  : [" + arr_3.reduce((acc, cur) => acc + cur , 0).toString() + "]";


//Method Chaining
    let arr_4 = [70, 80, 66, 76, 54, 64, 83, 56, 90];
    let hasil = arr_4.filter(e => e <= 70)          //70,66,54,64,56 
                     .map(e => e/10)                //7, 6.6, 5.4, 6.4, 5.6
                     .reduce((a,c) => a + c, 0);    //31


    const filterContainer_4 = document.querySelector(".LayoutParent:nth-child(5) > div");
    filterContainer_4.children[0].innerHTML =  "Array Asli : [" + arr_4.toString() + "]";
    filterContainer_4.children[1].innerHTML =  "Array Chaining  : [" + hasil + "]";
