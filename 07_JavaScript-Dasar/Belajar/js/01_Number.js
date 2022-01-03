//Number pada js dioperasikan dalam bentuk pecahan, sehingga kemungkinan terjadi perbedaan pada perhitungan yang dilakukan oleh js 

//Max digit for number is 15digit
var layer1_angka1 = 9, layer1_angka2 = 99, layer1_angka3 = 999999999999999, layer1_angka4 = 9999999999999999;
document.getElementById('layer1-angka1').innerHTML = layer1_angka1;
document.getElementById('layer1-angka2').innerHTML = layer1_angka2;
document.getElementById('layer1-angka3').innerHTML = layer1_angka3;
document.getElementById('layer1-angka4').innerHTML = layer1_angka4 + "?";

//Desimal number dihitung seakurat mingkin dengan 15 angka dibelakang koma
var layer2_angka1 = 0.5,
    layer2_angka2 = 0.7 + 0.3;
    layer2_angka3 = 0.2 + 0.1;
document.getElementById('layer2-angka1').innerHTML = layer2_angka1;
document.getElementById('layer2-angka2').innerHTML = layer2_angka2;
document.getElementById('layer2-angka3').innerHTML = layer2_angka3 + "?";

var layer3_angka1 = 12345e5,
    layer3_angka2 = 12345e-5;
document.getElementById('layer3-angka1').innerHTML = "12345e5 -> " + layer3_angka1;
document.getElementById('layer3-angka2').innerHTML = "12345e-5 -> " + layer3_angka2;

var layer4_angka1 = -9, layer4_angka2 = -99, layer4_angka3 = -999999999999999, layer4_angka4 = -9999999999999999;
document.getElementById('layer4-angka1').innerHTML = layer4_angka1;
document.getElementById('layer4-angka2').innerHTML = layer4_angka2;
document.getElementById('layer4-angka3').innerHTML = layer4_angka3;
document.getElementById('layer4-angka4').innerHTML = layer4_angka4 + "?";

//Jangan mengawali angka dengan angka 0 ataupun 0x
var layer5_angka1 = 012,
    layer5_angka2 = 0xFF;
document.getElementById('layer5-angka1').innerHTML = layer5_angka1 + " -> Dianggap Oktal";
document.getElementById('layer5-angka2').innerHTML = layer5_angka2 + " -> Dianggap Hexadecimal";

//Angka Spesial
var layer6_angka1 = 10/0,
    layer6_angka2 = -10/0,
    layer6_angka3 = 0/0;
document.getElementById('layer6-angka1').innerHTML = "10/0 -> " + layer6_angka1;
document.getElementById('layer6-angka2').innerHTML = "-10/0 -> " + layer6_angka2;
document.getElementById('layer6-angka3').innerHTML = "0/0 -> " + layer6_angka3;

//String Number
var layer7_angka1 = 100,
    layer7_angka2 = "10";
    layer7_angka3 = layer7_angka1 / layer7_angka2;
document.getElementById('layer7-angka1').innerHTML = layer7_angka1;
document.getElementById('layer7-angka2').innerHTML = layer7_angka2;
document.getElementById('layer7-angka3').innerHTML = layer7_angka3;
var layer7_angka4 = "100",
    layer7_angka5 = "10";
    layer7_angka6 = layer7_angka1 / layer7_angka2;
document.getElementById('layer7-angka4').innerHTML = layer7_angka4;
document.getElementById('layer7-angka5').innerHTML = layer7_angka5;
document.getElementById('layer7-angka6').innerHTML = layer7_angka6;
