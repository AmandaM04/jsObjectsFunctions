var favAnimal = {
    name: "zoe",
    animal: "cat"
}
// console.log("favanimal", favanimal.animal);

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
console.log("instructorPets", instructorPets);

var petDiv = document.getElementById("pet-names");

for(i=0; i<instructorPets.length; i++) {
    console.log("animal", instructorPets[i].petName);
    petDiv.innerHTML += '<h1>' + 
    instructorPets[i].petName + '</h1>' 
}



