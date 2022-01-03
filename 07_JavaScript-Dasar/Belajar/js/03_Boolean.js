var layer1_boolean1 = true,
    layer1_boolean2 = false;
document.getElementById("layer1-boolean1").innerHTML = layer1_boolean1;
document.getElementById("layer1-boolean2").innerHTML = layer1_boolean2;

var layer2_boolean1 = 5 < 10,
    layer2_boolean2 = "Rangga" == "rangga";
document.getElementById("layer2-boolean1").innerHTML = "5 < 10 -> " + layer2_boolean1;
document.getElementById("layer2-boolean2").innerHTML = '"Rangga" == "rangga" -> ' + layer2_boolean2;

var layer3_boolean1 = Boolean(true);
    layer3_boolean2 = Boolean(5 < 10),
    layer3_boolean3 = Boolean("Rangga" == "rangga");
document.getElementById("layer3-boolean1").innerHTML = "Boolean(true) -> " + layer3_boolean1;
document.getElementById("layer3-boolean2").innerHTML = "Boolean(5 < 10) -> " + layer3_boolean2;
document.getElementById("layer3-boolean3").innerHTML = '"Boolean(Rangga" == "rangga") -> ' + layer3_boolean3;
    
var layer4_boolean11 = Boolean(true),     layer4_boolean12 = Boolean(false), 
    layer4_boolean21 = Boolean(5),        layer4_boolean22 = Boolean(0)
    layer4_boolean31 = Boolean("Rangga"), layer4_boolean32 = Boolean(""),
document.getElementById("layer4-boolean11").innerHTML = "Boolean(true) -> " + layer4_boolean11;
document.getElementById("layer4-boolean12").innerHTML = "Boolean(false) -> " + layer4_boolean12;
document.getElementById("layer4-boolean21").innerHTML = "Boolean(5) -> " + layer4_boolean21;
document.getElementById("layer4-boolean22").innerHTML = "Boolean(0) -> " + layer4_boolean22;
document.getElementById("layer4-boolean31").innerHTML = "Boolean(\"Rangga\") -> " + layer4_boolean31;
document.getElementById("layer4-boolean32").innerHTML = "Boolean(\"\") -> " + layer4_boolean32;

var layer5_boolean1;
    layer5_boolean2 = null;
document.getElementById("layer5-boolean1").innerHTML = "layer5_boolean1 -> " + layer5_boolean1;
document.getElementById("layer5-boolean2").innerHTML = "layer5_boolean2 -> " + layer5_boolean2;




