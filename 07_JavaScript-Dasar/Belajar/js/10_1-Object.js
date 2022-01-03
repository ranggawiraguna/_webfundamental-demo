function event_layer11(){
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(1)").innerHTML = '<button onclick="event_layer11()"> SHOW OBJECT </button>'    

    var mhs = {
        nim : "1803015106",
        nama : "Rangga Wiraguna",
        jurusan : "Teknik Informatika",
        angkatan : "2018"
    }    

    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(1)").innerHTML = "<p> nim : " + mhs.nim + "</p>\n" +
                                                                                                        "<p> nama : " + mhs.nama + "</p>\n" +
                                                                                                        "<p> jurusan : " + mhs['jurusan'] + "</p>\n" +
                                                                                                        "<p> angkatan : " + mhs['angkatan'] + "</p><br>\n" +
                                                                                                        '<button onclick="event_layer11()"> SHOW OBJECT </button>';    
}

function event_layer12(paramNim, paramNama, paramJurusan, paramAngkatan){
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(2)").innerHTML = '<button onclick=\'event_layer12("1803015106","Rangga Wiraguna","Teknik Informatika","2018")\'> SHOW OBJECT </button>'

    var mhs = {
        nim : paramNim,
        nama : paramNama,
        jurusan : paramJurusan,
        angkatan : paramAngkatan
    }

    var htmlUnshift = "";
    for(var property in mhs){
        htmlUnshift +=  "<p>" + property + " : " + mhs[property] + "</p>\n";
    }

    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(2)").innerHTML = htmlUnshift + "\n<br>\n" + '<button onclick="event_layer12()"> SHOW OBJECT </button>';

}

function event_layer13(){
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(3)").innerHTML = '<button onclick=\'event_layer13()\'> SHOW OBJECT </button>'

    var mhs = {
        nim : "1803015106",
        nama : "Rangga Wiraguna",
        jurusan : "Teknik Informatika",
        angkatan : "2018",
        ips : [3.42, 3.51, 3.88, 3.85],
        alamat : {
            jalan : "Kamboja VII",
            rt_rw : "003/010",
            kota : "Jakarta Timur"
        }
    }

    var htmlUnshift = "";
    for(var property in mhs){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs[property] + "</p>\n";
        } else {
            for(var property2 in mhs.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs.alamat[property2] + "</p>\n";
            }
        }
    }

    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(3)").innerHTML = htmlUnshift + "\n<br>\n" + '<button onclick="event_layer13()"> SHOW OBJECT </button>';
}


function event_layer2(){
    var mhs1 = {
        nim : "1803015106",
        nama : "Rangga Wiraguna",
        jurusan : "Teknik Informatika",
        angkatan : "2018",
        ips : [3.42, 3.51, 3.88, 3.85],
        alamat : {
            jalan : "Kamboja VII",
            rt_rw : "003/010",
            kota : "Jakarta Timur."
        }
    }

    var mhs2 = {
        nim : "1803015057",
        nama : "Fasya Nazihah",
        jurusan : "Teknik Informatika",
        angkatan : "2018",
        ips : [3.00, 3.35, 3.52, 3.85],
        alamat : {
            jalan : "Cluster Melati",
            rt_rw : "001/003",
            kota : "Cileungsi, Bogor."
        }
    }

    var mhs3 = {
        nim : "1803015000",
        nama : "Agus Budiantoro",
        jurusan : "Teknik Tata Boga",
        angkatan : "2000",
        ips : [4.00, 5.00, 6.00, 7.00],
        alamat : {
            jalan : "Rafflesia Arnoldi",
            rt_rw : "100/200",
            kota : "Jakarta Barat Daya"
        }
    }

    var htmlUnshift;

    htmlUnshift = "";
    for(var property in mhs1){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs1[property] + "</p>\n";
        } else {
            for(var property2 in mhs1.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs1.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(2) .SectionInlineContent:nth-child(1)").innerHTML = htmlUnshift;
        }
    }

    htmlUnshift = "";
    for(var property in mhs2){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs2[property] + "</p>\n";
        } else {
            for(var property2 in mhs2.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs2.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(2) .SectionInlineContent:nth-child(2)").innerHTML = htmlUnshift;
        }
    }

    htmlUnshift = "";
    for(var property in mhs3){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs3[property] + "</p>\n";
        } else {
            for(var property2 in mhs3.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs3.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(2) .SectionInlineContent:nth-child(3)").innerHTML = htmlUnshift;
        }
    }
}

function event_layer3(){
    function buatObjectMhs(paramNim, paramNama, paramJurusan, paramAngkatan, paramIps, paramAlamat){
        mhs = {}
        mhs.nim = paramNim,
        mhs.nama = paramNama,
        mhs.jurusan = paramJurusan,
        mhs.angkatan = paramAngkatan,
        mhs.ips = paramIps,
        mhs.alamat = {
            jalan : paramAlamat.jalan,
            rt_rw : paramAlamat.rt_rw,
            kota : paramAlamat.kota
        }

        return mhs;
    }

    var mhs1 = buatObjectMhs("1803015106","Rangga Wiraguna","Teknik Informatika","2018",[3.42, 3.51, 3.88, 3.85],{jalan : "Kamboja VII", rt_rw : "003/010", kota : "Jakarta Timur."});
    var mhs2 = buatObjectMhs("1803015057","Fasya Nazihah","Teknik Informatika","2018",[3.00, 3.35, 3.52, 3.85],{jalan : "Cluster Melati", rt_rw : "001/003", kota : "Cileungsi, Bogor." });
    var mhs3 = buatObjectMhs("1803015000","Agus Budiantoro","Teknik Tata Boga","2000",[4.00, 5.00, 6.00, 7.00],{jalan : "Rafflesia Arnoldi", rt_rw : "100/200", kota : "Jakarta Barat Daya"});

    var htmlUnshift;

    htmlUnshift = "";
    for(var property in mhs1){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs1[property] + "</p>\n";
        } else {
            for(var property2 in mhs1.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs1.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(3) .SectionInlineContent:nth-child(1)").innerHTML = htmlUnshift;
        }
    }

    htmlUnshift = "";
    for(var property in mhs2){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs2[property] + "</p>\n";
        } else {
            for(var property2 in mhs2.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs2.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(3) .SectionInlineContent:nth-child(2)").innerHTML = htmlUnshift;
        }
    }

    htmlUnshift = "";
    for(var property in mhs3){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs3[property] + "</p>\n";
        } else {
            for(var property2 in mhs3.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs3.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(3) .SectionInlineContent:nth-child(3)").innerHTML = htmlUnshift;
        }
    }
}


function event_layer4(){
    function Mahasiswa(paramNim, paramNama, paramJurusan, paramAngkatan, paramIps, paramAlamat){
        this.nim = paramNim,
        this.nama = paramNama,
        this.jurusan = paramJurusan,
        this.angkatan = paramAngkatan,
        this.ips = paramIps,
        this.alamat = {
            jalan : paramAlamat.jalan,
            rt_rw : paramAlamat.rt_rw,
            kota : paramAlamat.kota
        }
    }

    var mhs1 = new Mahasiswa("1803015106","Rangga Wiraguna","Teknik Informatika","2018",[3.42, 3.51, 3.88, 3.85],{jalan : "Kamboja VII", rt_rw : "003/010", kota : "Jakarta Timur."});
    var mhs2 = new Mahasiswa("1803015057","Fasya Nazihah","Teknik Informatika","2018",[3.00, 3.35, 3.52, 3.85],{jalan : "Cluster Melati", rt_rw : "001/003", kota : "Cileungsi, Bogor." });
    var mhs3 = new Mahasiswa("1803015000","Agus Budiantoro","Teknik Tata Boga","2000",[4.00, 5.00, 6.00, 7.00],{jalan : "Rafflesia Arnoldi", rt_rw : "100/200", kota : "Jakarta Barat Daya"});

    var htmlUnshift;

    htmlUnshift = "";
    for(var property in mhs1){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs1[property] + "</p>\n";
        } else {
            for(var property2 in mhs1.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs1.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(4) .SectionInlineContent:nth-child(1)").innerHTML = htmlUnshift;
        }
    }

    htmlUnshift = "";
    for(var property in mhs2){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs2[property] + "</p>\n";
        } else {
            for(var property2 in mhs2.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs2.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(4) .SectionInlineContent:nth-child(2)").innerHTML = htmlUnshift;
        }
    }

    htmlUnshift = "";
    for(var property in mhs3){
        if(property!="alamat"){
            htmlUnshift +=  "<p>" + property + " : " + mhs3[property] + "</p>\n";
        } else {
            for(var property2 in mhs3.alamat){
                htmlUnshift +=  "<p>" + property2 + " : " + mhs3.alamat[property2] + "</p>\n";
            }
            document.querySelector(".LayoutParent:nth-child(4) .SectionInlineContent:nth-child(3)").innerHTML = htmlUnshift;
        }
    }
}