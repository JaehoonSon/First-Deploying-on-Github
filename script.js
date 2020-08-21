$txt = "";
function myFunction() {
    if(confirm("OKAY?")){
        $txt = "You are OKAY!"
    }else{
        $txt = "You are NOT OKAY!"
    }
    document.getElementById("demo").innerHTML = $txt;
   }
