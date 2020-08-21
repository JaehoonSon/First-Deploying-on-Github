var person = {
    "name": "Jaehoon",
    "Age": 15,
    "School": "MHS",
    "Favorite Music": "ROCKSTAR"
};

person.age = 16;
person["Favorite Music"] = "King of the dead"

function runFunction (){
    document.getElementById('demo').innerHTML = Number("48 429")
    window.person["Favorite Music"]
    console.log("test");
}

function openPage(){
    window.open("https://www.w3schools.com/js/js_htmldom.asp");
}


function displayObj(){
    var myText;
    var myObj = {
        myName:"Jaehoon",
        myAge:"15",
        myFavLang: "JS and C#"
    }
    for (let x in myObj){
        myText = console.log(myObj[x])
    }
}
function constructorExample(){
    class Car {
        constructor(brandxs) {
          this.carname = brandxs;
        }
      }
      
      mycar = new Car("Ford");
      
      document.getElementById("Demo").innerHTML = mycar.carname;
}

function RANDOM2(){
    document.getElementById("button!").onclick = document.getElementByID("demo") = "hiii"
};