
function event_layer1(){
    var biodata = ["Rangga Wiraguna", 20, "Fullstack Developer", "Jakarta", true];
    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent div p:nth-child(1)").innerHTML = "";

    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent div p:nth-child(1)").innerHTML = biodata.join();
    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent div p:nth-child(2)").innerHTML = biodata.join(" - ");
}

function event_layer2(){
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(2)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(3)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(4)").innerHTML = "";

    var temp = ["Rangga Wiraguna", 20, "Fullstack Developer", "Jakarta", true];

    temp.push("Bacot");
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(1)").innerHTML = temp.join("  -  ");

    temp.push("Bacot Lagi", " Bacot Terus");
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(2)").innerHTML = temp.join("  -  ");

    temp.pop();
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(3)").innerHTML = temp.join("  -  ");

    temp.pop();
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent div p:nth-child(4)").innerHTML = temp.join("  -  ");
}

function event_layer3(){
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(2)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(3)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(4)").innerHTML = "";


    var temp = ["Rangga Wiraguna", 20, "Fullstack Developer", "Jakarta", true];

    temp.unshift("Bacot");
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(1)").innerHTML = temp.join("  -  ");

    temp.unshift("Bacot Lagi", " Bacot Terus");
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(2)").innerHTML = temp.join("  -  ");

    temp.shift();
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(3)").innerHTML = temp.join("  -  ");

    temp.shift();
    document.querySelector(".LayoutParent:nth-child(3) .SectionBlockContent div p:nth-child(4)").innerHTML = temp.join("  -  ");
}

function event_layer4(){
    //splice(index, nHapus, newVar1, newVar2)
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(2)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(3)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(4)").innerHTML = "";

    var temp;

    temp = ["Rangga", "Ucup", "Agus"];
    temp.splice(1, 2);
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(1)").innerHTML = temp.join("  -  ");

    temp = ["Rangga", "Ucup", "Agus"];
    temp.splice(1, 0, "Ucok");
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(2)").innerHTML = temp.join("  -  ");

    temp = ["Rangga", "Ucup", "Agus"];
    temp.splice(1, 1, "Ucok");
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(3)").innerHTML = temp.join("  -  ");

    temp = ["Rangga", "Ucup", "Agus"];
    temp.splice(1, 2, "Ucok", "Otong");
    document.querySelector(".LayoutParent:nth-child(4) .SectionBlockContent div p:nth-child(4)").innerHTML = temp.join("  -  ");
}

function event_layer5(){
    //slice(awal, akhir+1)
    document.querySelector(".LayoutParent:nth-child(5) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(5) .SectionBlockContent div p:nth-child(2)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(5) .SectionBlockContent div p:nth-child(3)").innerHTML = "";

    var temp = ["Rangga", "Ucok", "Ucup", "Otong", "Agus",];

    document.querySelector(".LayoutParent:nth-child(5) .SectionBlockContent div p:nth-child(1)").innerHTML = temp.slice(0, 3);

    document.querySelector(".LayoutParent:nth-child(5) .SectionBlockContent div p:nth-child(2)").innerHTML = temp.slice(1, 3);

    document.querySelector(".LayoutParent:nth-child(5) .SectionBlockContent div p:nth-child(3)").innerHTML = temp.slice(1, 4);
}

function event_layer6(){
    document.querySelector(".LayoutParent:nth-child(6) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(6) .SectionBlockContent div p:nth-child(2)").innerHTML = "";

    var temp = [1, 3, 5, 7, 9];

    temp.forEach((e)=>{
        document.querySelector(".LayoutParent:nth-child(6) .SectionBlockContent div p:nth-child(1)").innerHTML += "[" + e + "] ";        
    });

    temp.forEach((e, i)=>{
        document.querySelector(".LayoutParent:nth-child(6) .SectionBlockContent div p:nth-child(2)").innerHTML += "[e" + i + " = " + e + "] ";        
    });
}

function event_layer7(){
    document.querySelector(".LayoutParent:nth-child(7) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(7) .SectionBlockContent div p:nth-child(2)").innerHTML = "";

    var temp = [1, 3, 5, 7, 9];

    document.querySelector(".LayoutParent:nth-child(7) .SectionBlockContent div p:nth-child(1)").innerHTML += "array original = " + temp;        

    document.querySelector(".LayoutParent:nth-child(7) .SectionBlockContent div p:nth-child(2)").innerHTML += "array return = " + temp.map((e)=>{
                                                                                                                                        return e + 1;
                                                                                                                                    });        
}

function event_layer8(){
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(3) div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(3) div p:nth-child(2)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(4) div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(4) div p:nth-child(2)").innerHTML = "";

    //Sort String
    var arr1 = ["Rangga", "Fasya", "Agus", "Andre", "Zaky"];
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(3) div p:nth-child(1)").innerHTML += "array original = " + arr1.join(" - ");        
    arr1.sort();
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(3) div p:nth-child(2)").innerHTML += "array sorting = " + arr1.join(" - ");        

    
    //Sort Number
    var arr2 = [1, 8, 4, 2, 10, 35, 22];
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(4) div p:nth-child(1)").innerHTML += "array original = " + arr2.join(" - ");        
    arr2.sort((a,b)=>{
        return a-b;
    });
    document.querySelector(".LayoutParent:nth-child(8) .SectionBlockContent:nth-child(4) div p:nth-child(2)").innerHTML += "array sorting = " + arr2.join(" - ");        
}

function event_layer9(){
    document.querySelector(".LayoutParent:nth-child(9) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(9) .SectionBlockContent div p:nth-child(2)").innerHTML = "";


    var arr1 = [1, 8, 4, 2, 10, 35, 22];

    document.querySelector(".LayoutParent:nth-child(9) .SectionBlockContent div p:nth-child(1)").innerHTML += "array = " + arr1;        

    document.querySelector(".LayoutParent:nth-child(9) .SectionBlockContent div p:nth-child(2)").innerHTML += "filter(e>=10) = " +  arr1.filter((e)=>{
                                                                                                                                        return e >= 10;
                                                                                                                                    }).join(" - ");        
}

function event_layer10(){
    document.querySelector(".LayoutParent:nth-child(10) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(10) .SectionBlockContent div p:nth-child(2)").innerHTML = "";

    var arr1 = [1, 8, 4, 2, 10, 35, 22];

    document.querySelector(".LayoutParent:nth-child(10) .SectionBlockContent div p:nth-child(1)").innerHTML += "array = " + arr1;        

    document.querySelector(".LayoutParent:nth-child(10) .SectionBlockContent div p:nth-child(2)").innerHTML += "find(10) = " +  arr1.find((e)=>{
                                                                                                                                        return e >= 10;
                                                                                                                                    });;        
}

function event_layer11(){
    document.querySelector(".LayoutParent:nth-child(11) .SectionBlockContent div p:nth-child(1)").innerHTML = "";
    document.querySelector(".LayoutParent:nth-child(11) .SectionBlockContent div p:nth-child(2)").innerHTML = "";

    var arr1 = [1, 8, 4, 2, 10, 35, 22];

    document.querySelector(".LayoutParent:nth-child(11) .SectionBlockContent div p:nth-child(1)").innerHTML += "array = " + arr1;        

    document.querySelector(".LayoutParent:nth-child(11) .SectionBlockContent div p:nth-child(2)").innerHTML += "findIndex(10) = " +  arr1.findIndex((e)=>{
                                                                                                                                        return e >= 10;
                                                                                                                                    });;        
}
