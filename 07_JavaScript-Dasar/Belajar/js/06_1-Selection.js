
function event_Layer11(pilihan){
    if(pilihan==="pil1"){
        alert("Selamat anda benar!");
    } else{
        alert("Goblok lu salah!");
    }
}

function event_Layer12(jawaban){
    if(jawaban.toLowerCase()==="hypertext preprocessor" || jawaban==="hypertext pre-processor"){
        alert("Selamat anda benar!");
    } else{
        alert("Goblok lu salah!");
    }
}

function event_Layer13(pilihan){
    if(pilihan==="pil2"){
        alert("Selamat anda benar!");
    } else{
        alert("Goblok lu salah!");
    }
}

function event_Layer2(pilihan){
    var isTrue = null;
    
    if(pilihan.toLowerCase()==="matematika"){
        if(prompt("(10 x 16) / 4 x 2 ?") == 20){
            isTrue = true;
        }
    } else if(pilihan.toLowerCase()==="ipa"){
        if(prompt("Berkembang biak bertujuan untuk...") == "melestarikan keturunan"){
            isTrue = true;
        }
    } else if(pilihan.toLowerCase()==="ips"){
        if(prompt("Organisasi kerja sama ekonomi di wilayah Asia Tenggara adalah...") == "afta"){
            isTrue = true;
        }
    }

    if(isTrue == null){
        console.log("");
    } else if(isTrue) {
        alert("Selamat anda benar!");
    } else if(!isTrue){
        alert("Goblok lu salah!");
    }
}

function event_Layer3(inputUser){
    if(!Boolean(inputUser)){
        alert("Silahkan masukkan nim untuk melihat biodata!");
    } else if(inputUser.toLowerCase()==="1803015106"){
        alert("Biodata : \n" +
              "NIM       : 1803015106 \n" +
              "Nama     : Rangga Wiraguna \n" + 
              "TTL        : Jakarta, 20 Juni 2000 \n" + 
              "Alamat   : Cililitan, Jakarta.");
    } else if(inputUser.toLowerCase()==="1803015057"){
        alert("Biodata : \n" +
              "NIM       : 1803015057 \n" +
              "Nama     : Fasya Nazihah \n" + 
              "TTL        : Cileungsi, 15 Maret 2000 \n" + 
              "Alamat   : Cipenjo, Cileungsi.");
    } else if(inputUser.toLowerCase()==="1803015000"){
        alert("Biodata : \n" +
              "NIM       : 1803015000 \n" +
              "Nama     : Agus Budiantoro \n" + 
              "TTL        : Jakarta, 18 Agustus 1996 \n" + 
              "Alamat   : Priok, Jakarta."); 
    } else {
        alert("NIM yang anda masukkan tidak terdaftar!")
    }

    document.getElementById("layer3-jawaban").value = "";
}

function event_Layer4(inputUser){
    switch(inputUser){
        case "" :
            alert("Silahkan masukkan nama peserta untuk melihat hasil ujian!");
            break;
            
        case "Rangga" :
            alert("Selamat Rangga Wiraguna, Anda lulus ujian dengan nilai 90");
            break;

        case "Rangga Wiraguna" :
            alert("Selamat Rangga Wiraguna, Anda lulus ujian dengan nilai 90");
            break;            

        case "Fasya" :
            alert("Selamat Fasya Nazihah, Anda lulus ujian dengan nilai 80");
            break;

        case "Fasya Nazihah" :
            alert("Selamat Fasya Nazihah, Anda lulus ujian dengan nilai 80");
            break;            

        case "Agus" :
            alert("Selamat Agus Budiantoro, Anda lulus ujian dengan nilai 100");
            break;

        case "Agus Budiantoro" :
            alert("Selamat Agus Budiantoro, Anda lulus ujian dengan nilai 100");
            break;

        default :
            alert("Maaf, Anda tidak lulus ujian, silahkan coba lagi di lain waktu...")
            break;
    }

    document.getElementById("layer4-jawaban").value = "";
}



