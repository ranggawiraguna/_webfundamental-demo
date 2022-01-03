//Basic Asynchronous
const Container1 = document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(6)");
let i = 1;

Container1.innerHTML += "<p> Statement-1 </p> \n";
setTimeout(()=>{        
    //setTimeout merupakan asynchronous, jadi callback dimasukkan kedalam Web API >> CallbackQueue >> dan pada saat stack execution kosong/selesai baru asynchronous mulai di eksekusi
    Container1.innerHTML += "<p> Statement-2 </p> \n";
},0);
Container1.innerHTML += "<p> Statement-3 </p> \n";



