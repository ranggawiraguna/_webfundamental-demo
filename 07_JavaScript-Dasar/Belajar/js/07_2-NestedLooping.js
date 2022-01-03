function event_layer1(status){
    console.clear();

    var dataMhs = [["1803015106", "Rangga Wiraguna", "Teknik Informatika", "RPL", "Cililitan, Jakarta."],
                   ["1803015057", "Fasya Nazihah", "Teknik Informatika", "RPL", "Cipenjo, Cielungsi."],
                   ["1803015000", "Agus Budiantoro", "Teknik Mesin", "Biomekanik", "Priok, Jakarta."]];
    
    if(status=="LIHAT DATA"){
        for(var i=0; i<dataMhs.length; i++){
            console.log("Data pada for-i : " + dataMhs[i]);
            for(var j=0; j<dataMhs[i].length; j++){
                console.log("Data pada for-j : " + dataMhs[i][j] + "(Ditampilkan)");
                document.getElementById("layer1_Data"+(i+1)+(j+1)).innerHTML = dataMhs[i][j];
            }
            console.log("\n");
        }

        document.getElementById("layer1-button").innerHTML = "SEMBUNYIKAN DATA";
    } else {
        for(var i=0; i<dataMhs.length; i++){
            console.log("Data pada for-i : " + dataMhs[i]);
            for(var j=0; j<dataMhs[i].length; j++){
                console.log("Data pada for-j : " + dataMhs[i][j] + "(Disembunyikan)");
                document.getElementById("layer1_Data"+(i+1)+(j+1)).innerHTML = "";
            }
            console.log("\n");
        }

        document.getElementById("layer1-button").innerHTML = "LIHAT DATA";
    }

}

function event_layer2(status){
    console.clear();

    var dataMhs = [["1803015106", "Rangga Wiraguna", "Teknik Informatika", "RPL", "Cililitan, Jakarta."],
                   ["1803015057", "Fasya Nazihah", "Teknik Informatika", "RPL", "Cipenjo, Cielungsi."],
                   ["1803015000", "Agus Budiantoro", "Teknik Mesin", "Biomekanik", "Priok, Jakarta."]];

    if(status=="LIHAT DATA"){
        dataMhs.forEach(function(er,ir){
            console.log("Data pada each-r : " + er);
            er.forEach(function(ec, ic){
                console.log("Data pada each-c : " + ec + "(Ditampilakan)");
                document.getElementById("layer2_Data"+(ir+1)+(ic+1)).innerHTML = ec;
            })
            console.log("\n\n");
        });

        document.getElementById("layer2-button").innerHTML = "SEMBUNYIKAN DATA";
    } else {
        dataMhs.forEach(function(er,ir){
            console.log("Data pada each-r : " + er);
            er.forEach(function(ec, ic){
                console.log("Data pada each-c : " + ec + "(Ditampilakan)");
                document.getElementById("layer2_Data"+(ir+1)+(ic+1)).innerHTML = "";
            })
            console.log("\n\n");
        });

        document.getElementById("layer2-button").innerHTML = "LIHAT DATA";
    }
}

function event_layer3(status){
    console.clear();

    var dataMhs = [["1803015106", "Rangga Wiraguna", "Teknik Informatika", "RPL", "Cililitan, Jakarta."],
                   ["1803015057", "Fasya Nazihah", "Teknik Informatika", "RPL", "Cipenjo, Cielungsi."],
                   ["1803015000", "Agus Budiantoro", "Teknik Mesin", "Biomekanik", "Priok, Jakarta."]];

    if(status=="LIHAT DATA"){
        var i=0;
        while(i<dataMhs.length){
            console.log("Data pada while-i : " + dataMhs[i]);

            var j=0;
            while(j<dataMhs[i].length){
                console.log("Data pada while-j : " + dataMhs[i][j] + "(Ditampilkan)");
                document.getElementById("layer3_Data"+(i+1)+(j+1)).innerHTML = dataMhs[i][j];
                j++;
            }
            i++;
            console.log("\n");
        }

        document.getElementById("layer3-button").innerHTML = "SEMBUNYIKAN DATA";
    } else {
        var i=0;
        while(i<dataMhs.length){
            console.log("Data pada while-i : " + dataMhs[i]);
            var j=0;
            while(j<dataMhs[i].length){
                console.log("Data pada while-j : " + dataMhs[i][j] + "(Disembunyikan)");
                document.getElementById("layer3_Data"+(i+1)+(j+1)).innerHTML = "";
                j++;
            }
            i++;
            console.log("\n");
        }

        document.getElementById("layer3-button").innerHTML = "LIHAT DATA";
    }

}

function event_layer4(status){
    console.clear();
    var dataMhs = [["1803015106", "Rangga Wiraguna", "Teknik Informatika", "RPL", "Cililitan, Jakarta."],
                   ["1803015057", "Fasya Nazihah", "Teknik Informatika", "RPL", "Cipenjo, Cielungsi."],
                   ["1803015000", "Agus Budiantoro", "Teknik Mesin", "Biomekanik", "Priok, Jakarta."]];

    if(status=="LIHAT DATA"){
        for(var i=0; i<dataMhs.length; i++){
            console.log("Data pada for-i : " + dataMhs[i]);
            var j=0;
            while(j<dataMhs[i].length){
                console.log("Data pada while-j : " + dataMhs[i][j] + "(Ditampilkan)");
                document.getElementById("layer4_Data"+(i+1)+(j+1)).innerHTML = dataMhs[i][j];
                j++;
            }
            console.log("\n\n");
        }

        document.getElementById("layer4-button").innerHTML = "SEMBUNYIKAN DATA";
    } else {
        var i=0;
        while(i<dataMhs.length){
            console.log("Data pada while-i : " + dataMhs[i]);
            for(var j=0; j<dataMhs[i].length; j++){
                console.log("Data pada for-j : " + dataMhs[i][j] + "(Disembunyikan)");
                document.getElementById("layer4_Data"+(i+1)+(j+1)).innerHTML = "";
            }
            console.log("\n\n");
            i++;
        }

        document.getElementById("layer4-button").innerHTML = "LIHAT DATA";
    }

}


