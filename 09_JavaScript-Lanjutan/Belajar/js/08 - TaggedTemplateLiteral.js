let name = "Rangga Wiraguna";
let nim = "1803015106";

//Basic Tagged Template Literal
function processText(strings, ...args){
    let result = '';
    strings.forEach((str,i)=>{
        result += `${str}${args[i] || ''}`; //Operator or disini akan menyeleksi nilai yang truthy
    });

    return result;
}

let welcomeText = processText`Hallo ${name}, Selamat datang di Bacotan, Nim anda adalah ${nim}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(4)").innerHTML = welcomeText;



function processText_2(strings, ...args){
    return strings.reduce((result,str,i)=> `${result}${str}${args[i] || ''}` , '');
}

let welcomeText_2 = processText_2`Hallo ${name}, Selamat datang di Bacotan, Nim anda adalah ${nim}`;
document.querySelector(".LayoutParent:nth-child(1) > div:nth-child(5)").innerHTML = welcomeText_2;




//Example Tagged Template Literal
function processText_2(strings, ...args){
    return strings.reduce((result,str,i)=> `${result}${str}<span>${args[i] || ''}</span>` , '');
}
document.querySelector(".LayoutParent:nth-child(2) > div").innerHTML = processText_2`Hallo ${name}, Selamat datang di Bacotan, Nim anda adalah ${nim}`;










