console.log("functions");

//funciton expressions
var a = function(){
    console.log(3);
};

//function declarations - the one we will use for now
function b(/*inputs go in here and they are variables*/){
    console.log("b", 2)
}

var num = 3;

function numPrinter(monkeyButt){
    //monkeyButt = num =3
    console.log("my number: ", monkeyButt);
}

numPrinter(num);

function cat(){
    return "love them";
}

var message = cat();
console.log("message", message);


var petDiv = document.getElementById("pet-names");

var instructorPets = [
    {
        instructorName: "Amanda",
        petName: "Trina",
        animalType: "dog",
        isFavorite: false
    },
    {
        instructorName: "Amanda",
        petName: "Dutches",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Seymour",
        animalType: "one eyed dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: false
    },
];

//display each pet as card
// for (var i=0; i<instructorPets.length; i++){ 
//  if (isFavorite === true); {

//  } else {

//  }

// }


function domStringMaker(animalArray){
    //take pet names and create dom string
    //call printToDom function
    for (var i=0; i<animalArray.length; i++){ 
        var animalString = "";
      if(animalArray[i].isFavorite){
        animalString += '<div class="pets isFavorite">';
      } else {
        animalString += '<div class="pets isNotFavorite">';
      }   
        animalString += "<h1>" + animalArray[i].petName + "</h1>";
        animalString += "<h3>" + animalArray[i].instructorName + "</h3>";
        animalString += "<h3>" + animalArray[i].animalType + "</h3>";
        animalString += '<div>';
    //  printToDom(animalString, "pet-names");
    }
}

function printToDom(stringToPrint, divId) {
    //take string and innerHTML to the divIDd
    var petDiv = document.getElementById(divId);
    console.log("petDiv", petDiv);
    petDiv.innerHTML += stringToPrint;
}

domStringMaker(instructorPets);
