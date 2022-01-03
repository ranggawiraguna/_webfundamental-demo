function showOneAlert(){
    alert("This box is the Alert Box!");
}

function showManyAlert(){
    alert("This box is the Alert Box!");
    alert("Again, This box is the Alert Box!");
    alert("Lastly, This box is the Alert Box!");    
} 

function showOnePrompt(){
    var return1 = prompt("What is your name?");

    alert("Hallo " + return1 + "\n");    
}

function showManyPrompt(){
    var return1 = prompt("What is your name?");
    var return2 = prompt("Where do you live?");
    var return3 = prompt("What are your hobbies?");

    alert("Hallo " + return1 + ",\n" + 
          "You live in " + return2 + ", " + 
          "and your hobby is " + return3 + "\n" );
}

function showConfirm(){
    var loop = true;

    while(loop == true){
        var return1 = confirm("Kamu Yakin?");

        if(return1==true){
            alert("Yaudah lanjutin kalo emang yakin");
        }else if(return1==false){
            alert("Jangan dipaksa kalo gak yakin mah");
        }

        loop = confirm("Mau coba lagi?");
    }

    alert("Terimakasih telah mencoba!");
}


