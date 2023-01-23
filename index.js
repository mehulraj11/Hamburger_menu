document.querySelector(".ham-container").addEventListener("click", function(){
    var togl = document.querySelector("ul");
    var hamWidth = document.querySelector(".ham-width");
    var hamMenuLength= document.querySelector(".ham-menu");
    var hamMenuLength = document.querySelectorAll(".ham-menu").length;
    if(togl.style.visibility === "visible"){
        togl.style.visibility = "hidden";
        hamWidth.style.backgroundColor = "white";
        for(var i =0; i<hamMenuLength; i++){
            document.querySelectorAll(".ham-menu")[i].style.borderColor = "black";
        }
    }
    else{
        togl.style.visibility = "visible";
        hamWidth.style.backgroundColor = "black";
        hamWidth.style.borderRadius = "0px";
        document.querySelector("ul").style.borderRadius = "0px";
        for(var i =0; i<hamMenuLength; i++){
            document.querySelectorAll(".ham-menu")[i].style.borderColor = "white";
        }
    }
})