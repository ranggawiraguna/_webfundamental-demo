var image = [["A",5],["SH",8],["US",9],["UM",17],["UP",15]];

function showGallery(){
    image.forEach((img, index)=>{
        var i = 1;
        var imageContainer = document.querySelector(".sub-feature:nth-child(" + (index+2) + ") > div");
        
        while(i<=img[1]){
            imageContainer.innerHTML += '<div style="background-image: url(./../src/Images/img/' + (img[0]+i) + '.jpg);" onclick="toggleOverlay(\'' + (img[0]+i) + '\')"><span>'+(img[0]+i)+'</span></div>\n';
            i++;
        }
    });
}


var lastOverlayName = "";

function toggleOverlay(name){
    scrollPosition = window.scrollY;

    if(name){
        lastOverlayName = name;
        document.getElementById("OverlayImage").style.transition = "transform 0.25s, opacity 0.5s, background-color 0.5s 0.1s";    

        document.querySelector("header").style.zIndex = "0";
        document.getElementById("OverlayImage").style.zIndex = "1";
        document.querySelector("#OverlayImage > img:nth-child(3)").src = "./../src/Images/img/"+name+".jpg";
    } else {
        document.getElementById("OverlayImage").style.transition = "transform 0s 1s, opacity 0.5s, background-color 0s 1s";    

        document.querySelector("header").style.zIndex = "1";
        document.getElementById("OverlayImage").style.zIndex = "0";
        setTimeout(() => { document.querySelector("#OverlayImage > img:nth-child(3)").src = ""; }, 500);
    }

    document.body.classList.toggle("noscroll");

    document.querySelector("#OverlayImage").classList.toggle("Show");
}

function actionOverlay(action){
    var listImage;

    if(lastOverlayName.includes("A")){
        listImage = image[0];
    } else if(lastOverlayName.includes("SH")) {
        listImage = image[1];
    } else if(lastOverlayName.includes("US")) {
        listImage = image[2];
    } else if(lastOverlayName.includes("UM")) {
        listImage = image[3];
    } else if(lastOverlayName.includes("UP")) {
        listImage = image[4];
    }

    if(action=="next"){
        lastOverlayName = listImage[0] + ((parseInt(lastOverlayName.replace(listImage[0],"")) % listImage[1]) + 1) ;
    }else if(action=="previous"){
        lastOverlayName = listImage[0] + ((parseInt(lastOverlayName.replace(listImage[0],"")) % listImage[1]) - 1) ;
    }
    
    document.querySelector("#OverlayImage > img:nth-child(3)").src = "./../src/Images/img/"+lastOverlayName+".jpg";
    console.log(lastOverlayName);
}


