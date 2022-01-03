//Object Prototype
function User_A(id, password, fullName, email, noTelp){
    this.id = id;    
    this.password = password;    
    this.fullName = fullName;    
    this.email = email;    
    this.noTelp = noTelp;    
}

User_A.prototype.loginSession = function(){ alert(this.fullName + " is Logged in!"); }
User_A.prototype.logoutSession = function(){ alert(this.fullName + " is Logout!"); }
User_A.prototype.post = function(text){ alert(this.fullName + " post new status : " + text); }

let users_a = [];
users_a.push(new User_A("ranggapx_", "bacotan", "Rangga Wiraguna", "ranggapx@gmail.com", "082122334455"));

//Shorten Object Prototype
function User_B(id, password, fullName, email, noTelp){
    this.id = id;    
    this.password = password;    
    this.fullName = fullName;    
    this.email = email;    
    this.noTelp = noTelp;    

    User_B.prototype.loginSession = function(){ alert(this.fullName + " is Logged in!"); }

    User_B.prototype.logoutSession = function(){ alert(this.fullName + " is Logout!"); }

    User_B.prototype.post = function(text){ alert(this.fullName + " post new status : " + text); }
}

let users_b = [];
users_b.push(new User_B("fasyanzh", "gakbacot", "Fasya Nazihah", "fasyanzh@gmail.com", "088808080000"));

// Object Class Version
class User {
    constructor(id, password, fullName, email, noTelp){
        this.id = id;    
        this.password = password;    
        this.fullName = fullName;    
        this.email = email;    
        this.noTelp = noTelp;        
    }

    loginSession(){ alert(this.fullName + " is Logged in!"); }

    logoutSession(){ alert(this.fullName + " is Logout!"); }

    post(text){ alert(this.fullName + " post new status : " + text); }
}

let users = [];
users.push(new User("agusaja", "bacotbanget", "Agus Budiantoro", "agusaja@gmail.com", "08291380129"));


//Sample DOM
    //DOM-1
    const container_A = document.querySelector(".LayoutParent:nth-child(1) > div > div:nth-child(1) > div:nth-child(1)");
    users_a.forEach((user)=>{
        container_A.children[0].innerHTML = user.id;
        container_A.children[1].innerHTML = user.password;
        container_A.children[2].innerHTML = user.fullName;
        container_A.children[3].innerHTML = user.email;
        container_A.children[4].innerHTML = user.noTelp;

        container_A.parentElement.setAttribute("data-value", user.id);
    });

    container_A.parentElement.children[1].addEventListener('click', function(e){
        if(e.target.tagName.toLowerCase() == "button"){
            if(e.target.innerHTML === "LOGIN"){
                users_a[0].loginSession();
            }else if(e.target.innerHTML === "LOGOUT"){
                users_a[0].logoutSession();
            }else if(e.target.innerHTML === "POST"){
                users_a[0].post("Bacotan");
            }
        }
    });


    //DOM-2
    let container_B = document.querySelector(".LayoutParent:nth-child(1) > div > div:nth-child(2) > div:nth-child(1)");

    users_b.forEach((user)=>{
        container_B.children[0].innerHTML = user.id;
        container_B.children[1].innerHTML = user.password;
        container_B.children[2].innerHTML = user.fullName;
        container_B.children[3].innerHTML = user.email;
        container_B.children[4].innerHTML = user.noTelp;

        container_B.parentElement.setAttribute("data-value", user.id);
    });

    container_B.parentElement.children[1].addEventListener('click', function(e){
        if(e.target.tagName.toLowerCase() == "button"){
            if(e.target.innerHTML === "LOGIN"){
                users_b[0].loginSession();
            }else if(e.target.innerHTML === "LOGOUT"){
                users_b[0].logoutSession();
            }else if(e.target.innerHTML === "POST"){
                users_b[0].post("Bacotan");
            }
        }
    });

    
    //DOM-3
    let container = document.querySelector(".LayoutParent:nth-child(2) > div .user-info");
    users.forEach((user)=>{
        container.children[0].innerHTML = user.id;
        container.children[1].innerHTML = user.password;
        container.children[2].innerHTML = user.fullName;
        container.children[3].innerHTML = user.email;
        container.children[4].innerHTML = user.noTelp;

        container.parentElement.setAttribute("data-value", user.id);
    });

    container.parentElement.children[1].addEventListener('click', function(e){
        if(e.target.tagName.toLowerCase() == "button"){
            if(e.target.innerHTML === "LOGIN"){
                users[0].loginSession();
            }else if(e.target.innerHTML === "LOGOUT"){
                users[0].logoutSession();
            }else if(e.target.innerHTML === "POST"){
                users[0].post("Bacotan");
            }
        }
    });



