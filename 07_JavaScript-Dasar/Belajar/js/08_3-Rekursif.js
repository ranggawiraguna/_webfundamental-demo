function event_layer1(n){
    if(n===1){ //this basecase (Kondisi berhenti rekursif)
        document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent p").innerHTML += n + " = ";
        document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent p").innerHTML += eval((document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent p").innerHTML).slice(0,-2));
        return;
    } else {
        document.querySelector(".LayoutParent:nth-child(1) .SectionBlockContent p").innerHTML += n + " + ";        
        event_layer1(n-1)
    }
}
