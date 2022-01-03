function event_layer11(){
    var bilangan = prompt("Ganjil / Genap ?");

    if(Boolean(bilangan)){
        var deret = "";
        if(bilangan.toLowerCase()=="ganjil"){
            for(var i=1; i<=100; i++){
                if(i%2 == 1){
                    if(i===1){
                        deret += i
                    } else {
                        deret += (", " + i);
                    }
                }
            }

            alert("Deret Ganjil (1-100) : \n " + deret);            
        } else if(bilangan.toLowerCase()=="genap"){
            for(var i=1; i<=100; i++){
                if(i%2 == 0){
                    if(i===2){
                        deret += i
                    } else {
                        deret += (", " + i);
                    }
                }
            }            

            alert("Deret Genap (1-100) : \n " + deret);            
        } else {
            alert("Silahkan masukan jenis deret bilangan yang sesuai!");            
        }
    } else {
        alert("Silahkan masukan jenis deret bilangan!");
    }
}

function event_layer12(status){
    var layer12_value = ["NIM", "Nama", "Jurusan", "Peminatan", "Angkatan"];
    var isValidData = null;

    for(var i=0; i<layer12_value.length; i++){
        layer12_value[i] = prompt("Masukkan " + layer12_value[i]);
        if(Boolean(layer12_value[i])){
            isValidData = true;
        }else{
            isValidData =false;
            break;
        }
    }

    if(isValidData){
        for(var i=0; i<layer12_value.length; i++){        
            document.getElementById("layer12-jawaban"+(i+1)).style.display = "flex";
            document.getElementById("layer12-jawaban"+(i+1)).innerHTML = layer12_value[i];
        }
    }

    if(isValidData && status=="INPUT ULANG BIODATA"){
        alert("Terimakasih, Biodata berhasil di input kedalam sistem.");
    } else if(isValidData && status=="INPUT BIODATA"){
        alert("Terimakasih, Biodata berhasil di input kedalam sistem.");
        document.getElementById("layer12-button").innerHTML = "INPUT ULANG BIODATA";
    }
}

function event_layer13(){
    var random;
    var tebakan;

    for(var i=0; i<=10; i++){
        random = Math.random() < 0.5 ? "Putih" : "Hitam";
        console.log(random);

        tebakan = prompt("Putih / Hitam ?");

        if(Boolean(tebakan)){
            if(tebakan.toLowerCase()=="hitam" || tebakan.toLowerCase()=="putih"){
                if(tebakan.toLowerCase() == random.toLowerCase()){
                    alert("Tebakan anda benar")
                } else {
                    alert("Tebakan anda salah")
                }
            } else {
                alert("Silahkan pilih tebakan yang sesuai!")                
            }
        } else {
            break;
        }

        if(i==10){
            alert("Waktu bermain anda sudah habis!")
        }

        if(!confirm("Mau main lagi ?")){
            break;
        }
    }
}

function event_layer14(status){
    var mhs = ["Rangga Wiraguna", "Fasya Nazihah", "Agus Budiantoro"];

    if(status=="LIHAT DAFTAR MHS"){
        for(var i=0; i<mhs.length; i++){
            document.getElementById("layer14-mahasiswa"+(i+1)).style.display = "flex";
            document.getElementById("layer14-mahasiswa"+(i+1)).innerHTML = mhs[i];
        }

        document.getElementById("layer14-button").innerHTML = "SEMBUNYIKAN DAFTAR MHS";
    } else {
        for(var i=0; i<mhs.length; i++){
            document.getElementById("layer14-mahasiswa"+(i+1)).style.display = "none";
        }

        document.getElementById("layer14-button").innerHTML = "LIHAT DAFTAR MHS";
    }
}

function event_layer21(status){    
    var data = ["RPL", "Jaringan", "Multimedia"];

    if(status=="LIHAT DATA"){
        data.forEach(function(e,i){
            document.getElementById("layer21_Data"+(i+1)).innerHTML = data[i];
        })

        document.getElementById("layer21-button").innerHTML = "SEMBUNYIKAN DATA";
    } else {
        data.forEach(function(e,i){
            document.getElementById("layer21_Data"+(i+1)).innerHTML = "";
        })

        document.getElementById("layer21-button").innerHTML = "LIHAT DATA";
    }
}

function event_layer22(status){
    var mhs1 = ["1803015106", "Rangga Wiraguna", "Teknik Informatika", 90, "Lulus"];
    var mhs2 = ["1803015057", "Fasya Nazihah", "Teknik Informatika", 80, "Lulus"];
    var mhs3 = ["1803015000", "Agus Budiantoro", "Teknik Mesin", 100, "Sangat Lulus"];

    var mhs = [mhs1, mhs2, mhs3];

    if(status=="LIHAT DATA"){
        mhs.forEach(function(er,r){
            er.forEach(function(ec,c){
                document.getElementById("layer22_Data"+(r+1)+(c+1)).innerHTML = ec;
            })
        });

        document.getElementById("layer22-button").innerHTML = "SEMBUNYIKAN DATA";
    } else {
        mhs.forEach(function(er,r){
            er.forEach(function(ec,c){
                document.getElementById("layer22_Data"+(r+1)+(c+1)).innerHTML = "";
            })
        });        

        document.getElementById("layer22-button").innerHTML = "LIHAT DATA";
    }
}

function event_layer31(){
    var bilangan = prompt("Ganjil / Genap ?");

    if(Boolean(bilangan)){
        var deret = "";
        var i = 1;
        if(bilangan.toLowerCase()=="ganjil"){
            while(i<=100){
                if(i%2 == 1){
                    if(i===1){
                        deret += i
                    } else {
                        deret += (", " + i);
                    }
                }
                i++;
            }

            alert("Deret Ganjil (1-100) : \n " + deret);            
        } else if(bilangan.toLowerCase()=="genap"){
            while(i<=100){
                if(i%2 == 0){
                    if(i===2){
                        deret += i
                    } else {
                        deret += (", " + i);
                    }
                }
                i++;
            }            

            alert("Deret Genap (1-100) : \n " + deret);            
        } else {
            alert("Silahkan masukan jenis deret bilangan yang sesuai!");            
        }
    } else {
        alert("Silahkan masukan jenis deret bilangan!");
    }
}

function event_layer32(status){
    var layer32_value = ["NIM", "Nama", "Jurusan", "Peminatan", "Angkatan"];
    var isValidData = null;

    var i = 0;
    while(i<layer32_value.length){
        layer32_value[i] = prompt("Masukkan " + layer32_value[i]);
        if(Boolean(layer32_value[i])){
            isValidData = true;
        }else{
            isValidData =false;
            break;
        }

        i++
    }

    if(isValidData){
        var i = 0;
        while(i<layer32_value.length){        
            document.getElementById("layer32-jawaban"+(i+1)).style.display = "flex";
            document.getElementById("layer32-jawaban"+(i+1)).innerHTML = layer32_value[i];

            i++;
        }
    }

    if(isValidData && status=="INPUT ULANG BIODATA"){
        alert("Terimakasih, Biodata berhasil di input kedalam sistem.");
    } else if(isValidData && status=="INPUT BIODATA"){
        alert("Terimakasih, Biodata berhasil di input kedalam sistem.");
        document.getElementById("layer32-button").innerHTML = "INPUT ULANG BIODATA";
    }
}

function event_layer33(){
    console.clear();
    var random;
    var tebakan;
    var lagi=true;

    while(lagi){
        random = Math.random() < 0.5 ? "Putih" : "Hitam";
        console.log(random);

        tebakan = prompt("Putih / Hitam ?");

        if(Boolean(tebakan)){
            if(tebakan.toLowerCase()=="hitam" || tebakan.toLowerCase()=="putih"){
                if(tebakan.toLowerCase() == random.toLowerCase()){
                    alert("Tebakan anda benar")
                } else {
                    alert("Tebakan anda salah")
                }
            } else {
                alert("Silahkan pilih tebakan yang sesuai!")                
            }
        } else {
            break;
        }

        if(confirm("Mau main lagi ?")){
            lagi=true;
        }else{
            lagi=false;
        }
    }
}

function event_layer34(status){
    var mhs = ["Rangga Wiraguna", "Fasya Nazihah", "Agus Budiantoro"];

    if(status=="LIHAT DAFTAR MHS"){
        var i =0;
        while(i<mhs.length){
            document.getElementById("layer34-mahasiswa"+(i+1)).style.display = "flex";
            document.getElementById("layer34-mahasiswa"+(i+1)).innerHTML = mhs[i];
            i++;
        }

        document.getElementById("layer34-button").innerHTML = "SEMBUNYIKAN DAFTAR MHS";
    } else {
        var i=0;
        while(i<mhs.length){
            document.getElementById("layer34-mahasiswa"+(i+1)).style.display = "none";
            i++;
        }

        document.getElementById("layer34-button").innerHTML = "LIHAT DAFTAR MHS";
    }
}





