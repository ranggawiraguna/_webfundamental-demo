var biodata_mhs = [ ["1803015106", "Rangga Wiraguna", "Teknik Informatika", "RPL", "2018"],   
                    ["1803015057", "Fasya Nazihah", "Teknik Informatika", "RPL", "2018"], 
                    ["1803015000", "Agus Budiantoro", "Teknik Mesin", "Biomekanik", "2010"]
                  ];

var tempDataUpdate = [undefined, undefined];

document.getElementById("UnavailableContent").style.display = "block";

function hiddenAllContent_layer2(nextProcess){
    document.getElementById("ProgressLoading").style.display = "none";        
    document.getElementById("process_layer").style.display = "none";        

    if(nextProcess){
        document.getElementById("UnavailableContent").style.display = "none";
    } else {
        document.getElementById("UnavailableContent").style.display = "block";
    }
}

function createData(status){
    if(Boolean(status)){
        hiddenAllContent_layer2(true);
        document.getElementById("UnavailableContent").style.display = "none";
        document.getElementById("ProgressLoading").style.display = "block";
        location.href = "#process_layer"    

        var scriptHTML = "";
        var indexValue = ["NIM", "Nama", "Jurusan", "Peminatan", "Tahun Angkatan"]
        indexValue.forEach(function(e,i){
            scriptHTML += "<input id=\"layer11-jawaban" + (i+1) + "\" type=\"text\" name=\"layer11-jawaban " + (i+1) + "\" placeholder=\"Masukkan " + e + "\" onfocus=\"if(this.value=='Nama') this.value=' '\" onblur=\"if(this.value==' ') this.value=''\" autocomplete=\"off\"> <br>\n"
        });

        scriptHTML +=   "\n" +
                        "<button onclick=\"createData('')\">SIMPAN DATA</button> \n";

        hiddenAllContent_layer2(true);
        document.getElementById("process_layer").innerHTML = scriptHTML;
        document.getElementById("process_layer").style.display = "block";
    } else{
        var isValidData;
        for(var i=1; i<=5; i++){ 
            if(!Boolean(document.getElementById("layer11-jawaban" + i).value)){ 
                isValidData = false; 
                break; 
            } 
            isValidData = true;
        }

        
        if(isValidData){
            hiddenAllContent_layer2(true);
            document.getElementById("UnavailableContent").style.display = "none";
            document.getElementById("ProgressLoading").style.display = "block";    

            var appendData = [];
            for(var i=1; i<=5; i++){
                appendData.push(document.getElementById("layer11-jawaban" + i).value);
            }
            biodata_mhs.push(appendData);
            
            var reference = document.getElementById("layer12");
            var cloneReference = reference.cloneNode(true);
            cloneReference.id = "layer12_clone";
            cloneReference.style.marginBottom = "-20px";

            setTimeout(function(){
                document.getElementById("process_layer").innerHTML = "<p> Data telah terinput kedalam sistem, <br> Silahkan lihat data untuk memeriksa kembali... </p>";        
                document.getElementById("process_layer").appendChild(cloneReference);
                document.getElementById("ProgressLoading").style.display = "none";        
                document.getElementById("process_layer").style.display = "block";        
            }, 2000);
        } else {
            alert("Silahkan isi formulir dengan benar!");
        }
    }
}

function readData(status){
    hiddenAllContent_layer2(false);

    document.getElementById("UnavailableContent").style.display = "none";
    document.getElementById("ProgressLoading").style.display = "block";    
    location.href = "#process_layer"

    if(Boolean(status)){
        var scriptHTML =  "<table> \n" +
                            "   <tr> \n" +
                            "       <th> NO </th> \n" +
                            "       <th> NIM </th> \n" +
                            "       <th> Nama </th> \n" +
                            "       <th> Jurusan </th> \n" +
                            "       <th> Peminatan </th> \n" +                       
                            "       <th> Angkatan </th> \n" + 
                            "   </tr> \n";

        biodata_mhs.forEach(function(mhs,mhs_i){
            scriptHTML += "   <tr> \n" +
                            "       <td class=\"CenterData\"> " + (mhs_i+1) + " </td> \n"; 
            mhs.forEach(function(dataMhs, dataMhs_i){
                scriptHTML += "       <td> " + dataMhs + " </td> \n"; 
            });
            scriptHTML += "   </tr> \n";
        });

        scriptHTML += "</table> \n\n";
        setTimeout(function(){
            document.getElementById("ProgressLoading").style.display = "none";    
            document.getElementById("process_layer").innerHTML = scriptHTML;
            document.getElementById("process_layer").style.display = "block";
            location.href = "#process_layer"
        }, 2000);
        
        setTimeout(function(){
            document.getElementById("process_layer").innerHTML += "<button onclick=\"readData('')\">SEMBUNYIKAN DATA</button> \n\n";
            location.href = "#process_layer"
        }, 3000);
    } else {
        hiddenAllContent_layer2(true);
        document.getElementById("process_layer").innerHTML = "";
        document.getElementById("ProgressLoading").style.display = "block";
        location.href = "#process_layer"

        setTimeout(function(){
            document.getElementById("ProgressLoading").style.display = "none";
            document.getElementById("UnavailableContent").style.display = "block";
            location.href = "#process_layer"
        }, 500);
    }
}

function updateData(status){
    if(Boolean(status)){
        var idData = prompt("Masukkan NIM yang ingin dihapus : ");
        
        if(Boolean(idData)){
            var isValidData = false;

            biodata_mhs.forEach(function(mhs,mhs_i){
                if(mhs[0]==idData){
                    isValidData = true;
                    tempDataUpdate[0] = mhs;
                    tempDataUpdate[1] = mhs_i;
                }
            });

            if(isValidData){
                document.getElementById("UnavailableContent").style.display = "none";
                document.getElementById("ProgressLoading").style.display = "block";
                location.href = "#process_layer"    
        
                var scriptHTML = "";
                var indexValue = ["NIM", "Nama", "Jurusan", "Peminatan", "Tahun Angkatan"]
                indexValue.forEach(function(e,i){
                    scriptHTML += "<input id=\"layer13-jawaban" + (i+1) + "\" type=\"text\" name=\"layer13-jawaban " + (i+1) + "\" placeholder=\"Masukkan " + e + "\" onfocus=\"if(this.value=='Masukkan " + e + "') this.value=' '\" onblur=\"if(this.value==' ') this.value=''\" autocomplete=\"off\"> <br>\n"
                });
        
                scriptHTML +=   "\n" +
                                "<button onclick=\"updateData('')\">SIMPAN DATA</button> \n";
        
                hiddenAllContent_layer2(true);
                document.getElementById("process_layer").innerHTML = scriptHTML;
                document.getElementById("process_layer").style.display = "block";

                tempDataUpdate[0].forEach(function(e,i){
                    document.getElementById("layer13-jawaban"+(i+1)).value = e;
                });
            }else {
                alert("NIM yang anda masukkan tidak ditemukan!")
            }
        }
    } else{
        var isValidData=false, isValidUpdate = false;
        for(var i=1; i<=5; i++){ 
            if(!Boolean(document.getElementById("layer13-jawaban" + i).value)){ 
                isValidData = false; 
                break; 
            }
            isValidData = true;
        } if(document.getElementById("layer13-jawaban1").value==tempDataUpdate[0][0]){
            isValidUpdate = true;
        }

        if(isValidData){
            if(isValidUpdate){
                hiddenAllContent_layer2(true);
                document.getElementById("UnavailableContent").style.display = "none";
                document.getElementById("ProgressLoading").style.display = "block";    

                for(var i=0; i<5; i++){
                    biodata_mhs[tempDataUpdate[1]][i] = document.getElementById("layer13-jawaban"+(i+1)).value;
                }

                var reference = document.getElementById("layer12");
                var cloneReference = reference.cloneNode(true);
                cloneReference.id = "layer12_clone";
                cloneReference.style.marginBottom = "-20px";

                setTimeout(function(){
                    document.getElementById("process_layer").innerHTML = "<p> Data telah berhasil di update, <br> Silahkan lihat data untuk memeriksa kembali... </p>";        
                    document.getElementById("process_layer").appendChild(cloneReference);
                    document.getElementById("ProgressLoading").style.display = "none";        
                    document.getElementById("process_layer").style.display = "block";        
                }, 2000);
            } else {
                alert("NIM tidak sesuai dengan data yang di update!");
            }
        } else {
            alert("Silahkan isi formulir dengan benar!");
        }

        tempDataUpdate[0] = undefined;
        tempDataUpdate[1] = undefined;        
    }
}

function deleteData(status, id){
    hiddenAllContent_layer2(false);

    document.getElementById("UnavailableContent").style.display = "none";
    document.getElementById("ProgressLoading").style.display = "block";    
    location.href = "#process_layer"

    if(Boolean(status) && !Boolean(id)){
        var scriptHTML =  "<table> \n" +
                            "   <tr> \n" +
                            "       <th> NO </th> \n" +
                            "       <th> NIM </th> \n" +
                            "       <th> Nama </th> \n" +
                            "       <th> Jurusan </th> \n" +
                            "       <th> Peminatan </th> \n" +                       
                            "       <th> Angkatan </th> \n" + 
                            "       <td class=\"DeleteRow\">  </td> \n" + 
                            "   </tr> \n";

        biodata_mhs.forEach(function(mhs,mhs_i){
            scriptHTML += "   <tr> \n" +
                            "       <td class=\"CenterData\"> " + (mhs_i+1) + " </td> \n"; 
            mhs.forEach(function(dataMhs, dataMhs_i){
                scriptHTML += "       <td> " + dataMhs + " </td> \n"; 
            });
            scriptHTML +=   "       <td class=\"DeleteRow\"> \n" + 
                            "           <img id=\"layer14_delete_mhs" + mhs_i + "\" src=\"./../pictures/IC_User-Remove.png\" alt=\"\" width=\"30px\" onclick=\"deleteData(false, this.id)\"> <br> \n" +
                            "       </td> \n"; 
            scriptHTML +=   "   </tr> \n";
        });

        scriptHTML += "</table> \n\n";
        setTimeout(function(){
            document.getElementById("ProgressLoading").style.display = "none";    
            document.getElementById("process_layer").innerHTML = scriptHTML;
            document.getElementById("process_layer").style.display = "block";
            location.href = "#process_layer"
        }, 2000);
        
        setTimeout(function(){
            document.getElementById("process_layer").innerHTML += "<button onclick=\"deleteData(false, false)\">SEMBUNYIKAN DATA</button> \n\n";
            location.href = "#process_layer"
        }, 3000);
    } else if(Boolean(id) && !Boolean(status)) {
        var index = parseInt(id.replace("layer14_delete_mhs", ""), 10);
        biodata_mhs.splice(index, 1);    
        console.log(biodata_mhs);
        deleteData("DELETE", false);
    } else {
        hiddenAllContent_layer2(true);
        document.getElementById("process_layer").innerHTML = "";
        document.getElementById("ProgressLoading").style.display = "block";
        location.href = "#process_layer"

        setTimeout(function(){
            document.getElementById("ProgressLoading").style.display = "none";
            document.getElementById("UnavailableContent").style.display = "block";
            location.href = "#process_layer"
        }, 500);
    }
}