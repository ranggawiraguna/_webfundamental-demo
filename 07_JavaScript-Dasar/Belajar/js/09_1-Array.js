function event_layer11(){
    var biodata = ["Rangga Wiraguna", 20, "Fullstack Developer", "Jakarta", true];
    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent:nth-child(1) div p:nth-child(1)").innerHTML = biodata;
    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent:nth-child(1) div p:nth-child(2)").innerHTML = biodata[0] + " - " +  biodata[1] + " - " + biodata[2] + " - " + biodata[3] + " - " + biodata[4];
}

function event_layer12(){
    var arr = [10, 20, 30];
    
    arr[3] = 40;
    arr[4] = 50;
    arr[9] = 100;
    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent:nth-child(2) div p:nth-child(1)").innerHTML = arr;
}

function event_layer13(){
    var arr = [10, 20, 30, 40, 50];
    
    arr[2] = undefined;
    delete arr[3];
    document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent:nth-child(3) div p:nth-child(1)").innerHTML = arr;
}

function event_layer14(){
    var biodata = ["Rangga Wiraguna", 20, "Fullstack Developer", "Jakarta", true];

    for(var i=0; i<biodata.length; i++){
        document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent:nth-child(4) div p:nth-child(1)").innerHTML += biodata[i] + "  |  ";
    }
}
