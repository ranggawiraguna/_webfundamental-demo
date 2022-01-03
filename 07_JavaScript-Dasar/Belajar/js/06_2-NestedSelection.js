function event_layer1(jurusan){
    var accept = confirm("Kamu yakin memilih " + jurusan + " ?");

    if(accept){
        var isValidData = null;

        var nama = prompt("Siapa nama kamu ?");

        if(nama!=null){
            var peminatan = prompt("Apa bidang peminatan yang kamu pilih ?");

            if(peminatan!=null){
                if(jurusan==="Elektro"){
                    if(peminatan.toLowerCase()=="tenaga listrik" || peminatan.toLowerCase()=="elektronika" || peminatan.toLowerCase()=="telekomunikasi"){
                        isValidData = true;
                    }else{
                        isValidData = false;
                        alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                    }
                } else if(jurusan==="Informatika") {
                    if(peminatan.toLowerCase()=="jaringan" || peminatan.toLowerCase()=="rpl" || peminatan.toLowerCase()=="multimedia"){
                        isValidData = true;
                    }else{
                        isValidData = false;
                        alert("Bidang peminatan yang kamu masukkan tidak tersedia!");    
                    }
                } else if(jurusan==="Mesin"){
                    if(peminatan.toLowerCase()=="mekanika terapan" || peminatan.toLowerCase()=="biomekanik" || peminatan.toLowerCase()=="konversi energi"){
                        isValidData = true;    
                    }else{
                        isValidData = false;
                        alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                    }
                }
            }
        }

        if(isValidData){
            alert("Terimakasih, data anda berhasil di input kedalam sistem... \n\n" + 
                  "Nama         : " + nama + "\n" + 
                  "Jurusan      : " + jurusan + "\n" +
                  "Peminatan : " + peminatan);
        }
    } else {
        alert("Silahkan pilih jurusan dengan benar!")
    }
}


function event_layer2(jurusan){
    var accept = confirm("Kamu yakin memilih " + jurusan + " ?");

    switch(accept){
        case true :
            var isValidData = null;

            var nama = prompt("Siapa nama kamu ?");

            switch(Boolean(nama)){
                case true :
                    var peminatan = prompt("Apa bidang peminatan yang kamu pilih ?");

                    switch(Boolean(peminatan)){
                        case true :
                            switch(jurusan){
                                case "Elektro" :
                                    switch(peminatan.toLowerCase()){
                                        case "tenaga listrik" :
                                            isValidData = true;
                                            break;
                                        case "elektronika" :
                                            isValidData = true;    
                                            break;
                                            
                                        case "telekomunikasi" :
                                            isValidData = true;
                                            break;

                                        default :
                                            isValidData = false;
                                            alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                                            break;
                                    }
                                    break;

                                case "Informatika" :
                                    switch(peminatan.toLowerCase()){
                                        case "jaringan" :
                                            isValidData = true;
                                            break;
                                        case "rpl" :
                                            isValidData = true;    
                                            break;
                                            
                                        case "multimedia" :
                                            isValidData = true;
                                            break;

                                        default :
                                            isValidData = false;
                                            alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                                            break;
                                    } 
                                    break;

                                case "Mesin" :
                                    switch(peminatan.toLowerCase()){
                                        case "mekanika terapan" :
                                            isValidData = true;
                                            break;
                                        case "biomekanik" :
                                            isValidData = true;    
                                            break;
                                            
                                        case "konversi energi" :
                                            isValidData = true;
                                            break;

                                        default :
                                            isValidData = false;
                                            alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                                            break;
                                    } 
                                    break;
                            }
                            break;

                        default :
                            break;
                    }
                    break;

                default :
                    break;
            }

            switch(isValidData){
                case true :
                    alert("Terimakasih, data anda berhasil di input kedalam sistem... \n\n" + 
                        "Nama         : " + nama + "\n" + 
                        "Jurusan      : " + jurusan + "\n" +
                        "Peminatan : " + peminatan);
                    break;

                default :
                    break;
            }
            break;

        default :
            alert("Silahkan pilih jurusan dengan benar!");
            break;
    }
}

function event_layer3(jurusan){
    var accept = confirm("Kamu yakin memilih " + jurusan + " ?");

    if(accept){
        var isValidData = null;

        var nama = prompt("Siapa nama kamu ?");

        if(nama!=null){
            var peminatan = prompt("Apa bidang peminatan yang kamu pilih ?");

            if(peminatan!=null){
                switch(jurusan){
                    case "Elektro" :
                        switch(peminatan.toLowerCase()){
                            case "tenaga listrik" :
                                isValidData = true;
                                break;
                            case "elektronika" :
                                isValidData = true;    
                                break;
                                
                            case "telekomunikasi" :
                                isValidData = true;
                                break;

                            default :
                                isValidData = false;
                                alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                                break;
                        }
                        break;

                    case "Informatika" :
                        switch(peminatan.toLowerCase()){
                            case "jaringan" :
                                isValidData = true;
                                break;
                            case "rpl" :
                                isValidData = true;    
                                break;
                                
                            case "multimedia" :
                                isValidData = true;
                                break;

                            default :
                                isValidData = false;
                                alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                                break;
                        } 
                        break;

                    case "Mesin" :
                        switch(peminatan.toLowerCase()){
                            case "mekanika terapan" :
                                isValidData = true;
                                break;
                            case "biomekanik" :
                                isValidData = true;    
                                break;
                                
                            case "konversi energi" :
                                isValidData = true;
                                break;

                            default :
                                isValidData = false;
                                alert("Bidang peminatan yang kamu masukkan tidak tersedia!");
                                break;
                        } 
                        break;
                }
            }
        }

        switch(isValidData){
            case true :
                alert("Terimakasih, data anda berhasil di input kedalam sistem... \n\n" + 
                    "Nama         : " + nama + "\n" + 
                    "Jurusan      : " + jurusan + "\n" +
                    "Peminatan : " + peminatan);
                break;
                
            default :
                break;
        }
    } else {
        alert("Silahkan pilih jurusan dengan benar!")
    }
}



