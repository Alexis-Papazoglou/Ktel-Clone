
// display functions for text in table page

function display1function(){
    document.getElementById("par2").style.display = "block";
    document.getElementById("par3").style.display = "none";
    document.getElementById("part2").style.marginTop = "-5%";
    document.getElementById("part").style.marginTop = "-5%";
}

function display2function(){
    document.getElementById("par2").style.display = "none";
    document.getElementById("par3").style.display = "block";
    document.getElementById("part2").style.marginTop = "20px";
    document.getElementById("part").style.marginTop = "20px";
}

// functions for dropdown on table page

function redirect(){
    var e = document.getElementById("apo-s");
    var value = e.options[e.selectedIndex].value;

    var e = document.getElementById("pros-s");
    var value2 = e.options[e.selectedIndex].value;

    console.log(value,value2);

    window.location.href="http://localhost/%CE%9A%CE%A4%CE%95%CE%9B%20Page/"+value+value2+".php";
}



//search fucntion

function getInputValue(){

    var a = document.getElementById("input-anazitisi").value;

    switch(a) {
        case "Larisa":
            window.location.href="http://localhost/%CE%9A%CE%A4%CE%95%CE%9B%20Page/ThLa.php"
            break;
        case "Athina":
            window.location.href="http://localhost/%CE%9A%CE%A4%CE%95%CE%9B%20Page/ThAth.php"
            break;
    }
      
}




