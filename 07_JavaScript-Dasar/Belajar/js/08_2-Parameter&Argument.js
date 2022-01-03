function event_layer11(a,b,c){
    if(a==""){a=undefined;}     if(b==""){b=undefined;}    if(c==""){c=undefined;}

    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(1) #layer11_return p:nth-child(1)").innerHTML = "Parameter (a) : " + a;
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(1) #layer11_return p:nth-child(2)").innerHTML = "Parameter (b) : " + b;
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(1) #layer11_return p:nth-child(3)").innerHTML = "Parameter (c) : " + c;
}

function event_layer12(a,b){
    if(a==""){a=undefined;}     if(b==""){b=undefined;}
    var hasil;

    if(Boolean(a) && Boolean(b)){
        hasil = a*b;
    } else {
        hasil = undefined;
    }

    console.log(a + b);
    
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(2) #layer12_return p:nth-child(1)").innerHTML = "Parameter (a) : " + a;
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(2) #layer12_return p:nth-child(2)").innerHTML = "Parameter (b) : " + b;
    document.querySelector(".LayoutParent:nth-child(1) .SectionInlineContent:nth-child(2) #layer12_return p:nth-child(3)").innerHTML = "Hasil (a) * (b) : " + hasil;
}

function event_layer21(a,b){
    var hasil = 1;
    var status = true;
    document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent:nth-child(4) #layer21_return p").innerHTML = "";

    for(var i=0; i<arguments.length; i++){
        if(Boolean(arguments[i])){ hasil *= parseInt(arguments[i]); }
        
        if(!Boolean(arguments[i])){

        }else if(status===true){
            document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent:nth-child(4) #layer21_return p").innerHTML += " " + arguments[i] + " ";        
            status = "FalseOperation";
        } else{
            document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent:nth-child(4) #layer21_return p").innerHTML += "* " + arguments[i] + " ";        
            status = "TrueOperation";
        } 
        
        if(i==(arguments.length-1) && hasil!=1 && status=="TrueOperation") {
            document.querySelector(".LayoutParent:nth-child(2) .SectionBlockContent:nth-child(4) #layer21_return p").innerHTML += "= " + hasil;        
        }
    };
}





