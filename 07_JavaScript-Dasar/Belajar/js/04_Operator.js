var layer1_var1 = 8 + 4,
    layer1_var2 = 8 - 4,
    layer1_var3 = 8 * 4,
    layer1_var4 = 8 / 4,
    layer1_var5 = 8 % 4,
    layer1_var6 = ((((((8+4)-4)*4)/4)%4));
document.getElementById("layer1-var1").innerHTML = "8 + 4 = " + layer1_var1;
document.getElementById("layer1-var2").innerHTML = "8 - 4 = " + layer1_var2;
document.getElementById("layer1-var3").innerHTML = "8 * 4 = " + layer1_var3;
document.getElementById("layer1-var4").innerHTML = "8 / 4 = " + layer1_var4;
document.getElementById("layer1-var5").innerHTML = "8 % 4 = " + layer1_var5;
document.getElementById("layer1-var6").innerHTML = "((((((8+4)-4)*4)/4)%4)) = " + layer1_var6;

var layer2_var1;
var layer2_var2 = 10;
var layer2_var3 = 11; layer2_var3 += 4;
var layer2_var4 = 11; layer2_var4 -= 4;
var layer2_var5 = 11; layer2_var5 *= 4;
var layer2_var6 = 11; layer2_var6 /= 4;
var layer2_var7 = 11; layer2_var7 %= 4;
document.getElementById("layer2-var1").innerHTML = "layer2_var1 = " + layer2_var1;
document.getElementById("layer2-var2").innerHTML = "layer2_var2 = " + layer2_var2;
document.getElementById("layer2-var3").innerHTML = "layer2_var3 += 4 -> layer2_var3 = layer2_var3 + 4 -> layer2_var3 = " + layer2_var3;
document.getElementById("layer2-var4").innerHTML = "layer2_var4 -= 4 -> layer2_var4 = layer2_var4 - 4 -> layer2_var4 = " + layer2_var4;
document.getElementById("layer2-var5").innerHTML = "layer2_var5 *= 4 -> layer2_var5 = layer2_var5 * 4 -> layer2_var5 = " + layer2_var5;
document.getElementById("layer2-var6").innerHTML = "layer2_var6 /= 4 -> layer2_var6 = layer2_var6 / 4 -> layer2_var6 = " + layer2_var6;
document.getElementById("layer2-var7").innerHTML = "layer2_var7 %= 4 -> layer2_var7 = layer2_var7 % 4 -> layer2_var7 = " + layer2_var7;

var layer3_var1 = 10 == 10;
    layer3_var2 = 10 != "11",
    layer3_var3 = 10 === 10,
    layer3_var4 = 10 !== "11",
    layer3_var5 = 10 > 11,
    layer3_var6 = 10 < "11",
    layer3_var7 = 10 >= "10",
    layer3_var8 = 10 <= 10;
document.getElementById("layer3-var1").innerHTML = "10 == 10 -> " + layer3_var1;
document.getElementById("layer3-var2").innerHTML = "10 != \"11\" -> " + layer3_var2;
document.getElementById("layer3-var3").innerHTML = "10 === 10 -> " + layer3_var3;
document.getElementById("layer3-var4").innerHTML = "10 !=== \"11\" -> " + layer3_var4;
document.getElementById("layer3-var5").innerHTML = "10 > 11 -> " + layer3_var5;
document.getElementById("layer3-var6").innerHTML = "10 < \"11\" -> " + layer3_var6;
document.getElementById("layer3-var7").innerHTML = "10 >= \"10\" -> " + layer3_var7;
document.getElementById("layer3-var8").innerHTML = "10 <= 10 -> " + layer3_var8;

var layer4_var1 = true && false,
    layer4_var2 = true || false,
    layer4_var3 = !false,
    layer4_var4 = (10 % 2 == 0) && (10 % 2 == 1),
    layer4_var5 = (10 % 2 == 0) || (10 % 2 == 1),
    layer4_var6 = !(10 % 2 == 1);
document.getElementById("layer4-var1").innerHTML = "true && false -> " + layer4_var1;
document.getElementById("layer4-var2").innerHTML = "true || false -> " + layer4_var2;
document.getElementById("layer4-var3").innerHTML = "!false -> " + layer4_var3;
document.getElementById("layer4-var4").innerHTML = "(10 % 2 == 0) && (10 % 2 == 1) -> " + layer4_var4;
document.getElementById("layer4-var5").innerHTML = "(10 % 2 == 0) || (10 % 2 == 1) -> " + layer4_var5;
document.getElementById("layer4-var6").innerHTML = "!(10 % 2 == 1) -> " + layer4_var6;

var layer5_var1 = "Rangga" + " " + "Wiraguna",
    layer5_var2 = 10 + "10",
    layer5_var3 = "10" + 10 ,
    layer5_var4 = 10 + 10 + "10",
    layer5_var5 = 10 + "10" + 10,
    layer5_var6 = "10" + 10 + 10;
document.getElementById("layer5-var1").innerHTML = '"Rangga" + " " + "Wiraguna" -> ' + layer5_var1;
document.getElementById("layer5-var2").innerHTML = '10 + "10" -> ' + layer5_var2;
document.getElementById("layer5-var3").innerHTML = '"10" + 10 -> ' + layer5_var3;
document.getElementById("layer5-var4").innerHTML = '10 + 10 + "10" -> ' + layer5_var4;
document.getElementById("layer5-var5").innerHTML = '10 + "10" + 10 -> ' + layer5_var5;
document.getElementById("layer5-var6").innerHTML = '"10" + 10 + 10 -> ' + layer5_var6;

var layer6_var1 = typeof("Rangga"),
    layer6_var2 = typeof(2000),
    layer6_var3 = typeof(true);
document.getElementById("layer6-var1").innerHTML = 'typeof("Rangga") -> ' + layer6_var1;
document.getElementById("layer6-var2").innerHTML = 'typeof(2000) -> ' + layer6_var2;
document.getElementById("layer6-var3").innerHTML = 'typeof(true) -> ' + layer6_var3;

var layer7_var1 = (10 % 2 == 0) ? true : false,
    layer7_var2 = (10 % 2 == 0) ? "Genap" : "Ganjil",
    layer7_var3 = (10 % 2 == 0) ? "Benar" : false;
document.getElementById("layer7-var1").innerHTML = '(10 % 2 == 0) ? true : false -> ' + layer7_var1;
document.getElementById("layer7-var2").innerHTML = '(10 % 2 == 0) ? "Genap" : "Ganjil" -> ' + layer7_var2;
document.getElementById("layer7-var3").innerHTML = '(10 % 2 == 0) ? "Benar" : false -> ' + layer7_var3;


