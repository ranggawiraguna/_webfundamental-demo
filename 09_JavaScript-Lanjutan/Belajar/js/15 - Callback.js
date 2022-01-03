//Basic Callback
function luasPersegi(sisi){
    return sisi * sisi;
}

function getVolume(sisi,callback){
    const result = `Volume kubus dengan sisi = ${sisi} adalah ${callback(callback(sisi),sisi)}`;

    return result;
}

document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(3)").innerHTML = getVolume(5,luasPersegi);

document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4)").innerHTML = getVolume(5, sisi => sisi * sisi);



//Synchronous Callback
const mhs = [
    {
        nama : "Rangga",
        nim : "1803015106",
    },
    {
        nama : "Fasya",
        nim : "1803015057",
    },
    {
        nama : "Agus",
        nim : "1803015000",
    }
];

mhs.forEach( ({nama}) => {
    for(let i=0; i < 999999; i++){
        let date = new Date();
    }

    document.querySelector(".LayoutParent:nth-child(2) > div:nth-child(5)").innerHTML += `<p>${nama}</p> \n`;
    console.log(nama);
});

//Statement ini akan dijeda sampai proses loop diatasnya selesai di eksekusi 
console.log("SELESAI");
document.querySelector(".LayoutParent:nth-child(2) > div:nth-child(5)").innerHTML += `<br><p> SELESAI </p> \n <p>(processnya di console)</p>`;


console.log("\n\n\n");


//Asynchronous Callback (Vanilla Javascript)
function getDataMhs(url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response);
            } else if(xhr.status === 404){
                error();
            }
        }
    };

    xhr.open('get', url);
    xhr.send();
}

console.log("Mulai");
getDataMhs(
    './../json/data.json',
    result => {
        const mhs = JSON.parse(result); //parse to array
        console.log("\nJSVanilla");
        console.log(mhs);
        console.log("\n");

        mhs.forEach(({name})=>{
            document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(5)").innerHTML += `<p>${name}</p> \n`;
        })
    }, 
    ()=> {
        alert("Error");
    }
);
console.log("Selesai");


console.log("\n\n\n");

//Asynchronous Callback (JQuery)
console.log("Mulai");
$.ajax({
    url : './../json/data.json',

    success : (mhs) => {
        console.log("\nJQuery");
        console.log(mhs);
        console.log("\n");

        mhs.forEach(({name})=>{
            document.querySelector(".LayoutParent:nth-child(3) > div:nth-child(6)").innerHTML += `<p>${name}</p> \n`;
        })
    },

    error : (e) => {
        alert(e.responseText);
    }
});
console.log("Selesai");


