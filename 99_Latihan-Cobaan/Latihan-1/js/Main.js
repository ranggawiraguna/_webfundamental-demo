var SelectedNavigation = (document.querySelector("header > div > div > a:nth-child(1)"));
var newPage = document.querySelector("sub > div:nth-child(1)").cloneNode(true)
changeNavigation(1);

function changeNavigation(newIndex){
    SelectedNavigation.classList.remove("SelectedNavigation");
    (document.querySelector("header > div > div > a:nth-child(" + newIndex + ")")).classList.add("SelectedNavigation");                
    SelectedNavigation = document.querySelector("header > div > div > a:nth-child(" + newIndex + ")");

    //Change newPage
    newPage = document.querySelector("sub > div:nth-child(" + newIndex + ")").cloneNode(true);
    newPage.id = (document.querySelector("header > div > div > a:nth-child(" + newIndex + ")")).innerHTML + "Page";
    newPage.style.animation = "showNavigation 1s 0.5s forwards";    newPage.style.opacity = "0";    newPage.style.height = "0";
    document.getElementById("ContentNavigation").innerHTML = "";    
    document.getElementById("ContentNavigation").appendChild(newPage);

    //Link to css and js for selected page
    newPage.innerHTML = '<link rel="stylesheet" href="./../css/' + newPage.id.replace("Page","") + '.css">\n\n' +  newPage.innerHTML + '\n';
}



