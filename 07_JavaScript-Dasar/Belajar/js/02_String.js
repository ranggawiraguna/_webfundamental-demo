//Normal String
var layer1_string1 = "Rangga Wiraguna",
    layer1_string2 = 'Fasya Nazihah';
document.getElementById('layer1-string1').innerHTML = layer1_string1;
document.getElementById('layer1-string2').innerHTML = layer1_string2;

//String with kutip 
var layer2_string1 = "Sekarang hari Jum'at",
    layer2_string2 = 'Besok hari "Sabtu"';
document.getElementById('layer2-string1').innerHTML = layer2_string1;
document.getElementById('layer2-string2').innerHTML = layer2_string2;

//String with escape for kutip 
var layer3_string1 = "Sekarang hari Jum\'at, Besok hari \"Sabtu\"";
document.getElementById('layer3-string1').innerHTML = layer3_string1;

//String with escape for enter >> anehnya ini kalo ditaro kedalem halaman web, escape enternya gamau muncul tapi di console dia muncul
var layer4_string1 = "Sekarang hari Jum'at,\n Besok hari \"Sabtu\"";
document.getElementById('layer4-string1').innerHTML = layer4_string1;
console.log(layer4_string1);

//String with escape for tab >> anehnya ini kalo ditaro kedalem halaman web, escape tabnya gamau muncul tapi di console dia muncul
var layer5_string1 = "Sekarang hari Jum'at,\t Besok hari \"Sabtu\"";
document.getElementById('layer5-string1').innerHTML = layer5_string1;
console.log(layer5_string1);

//String with escape for backspace >> anehnya bukan seperti fungsi backspace
var layer6_string1 = "Sekarang hari Jum'at,\b Besok hari \"Sabtu\"";
document.getElementById('layer6-string1').innerHTML = layer6_string1;
console.log(layer6_string1);

//String with escape for unicode
var layer7_string1 = "Sekarang hari Jum'at, Besok hari Sabtu\u2122",
    layer7_string2 = "Sekarang hari Jum'at, Besok hari Sabtu\u00A9",
    layer7_string3 = "Sekarang hari Jum'at, Besok hari Sabtu\u00AE";
document.getElementById('layer7-string1').innerHTML = layer7_string1;
document.getElementById('layer7-string2').innerHTML = layer7_string2;
document.getElementById('layer7-string3').innerHTML = layer7_string3;


//String Concatination
var layer8_string1 = "Sekarang hari Jum'at",
    layer8_string2 = "Besok hari Sabtu",
    layer8_string3 = layer8_string1 + ", " + layer8_string2;
document.getElementById('layer8-string3').innerHTML = 'layer8_string1 + ", " + layer8_string2 -> ' + layer8_string3;

//String Concatination
var layer9_string1 = "Rangga Wiraguna", 
    layer9_string2 = "Fasya Nazihah",
    layer9_boolean = layer9_string1 != layer9_string2;
document.getElementById('layer9-boolean').innerHTML = layer9_string1 + " != " + layer9_string2 + " -> " + layer9_boolean;

//String Concatination
var layer10_string1 = "Rangga Wiraguna", 
    layer10_string2 = "Fasya Nazihah";
document.getElementById('layer10-string1').innerHTML = layer10_string1 + " -> lenght:" + layer10_string1.length;
document.getElementById('layer10-string2').innerHTML = layer10_string2 + " -> lenght:" + layer10_string2.length;

