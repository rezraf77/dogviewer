const DOGURL = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector('.doggos');




function addNewDoggo()
{
    const promise = fetch(DOGURL);
    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = "Cute Doggo";
        doggos.replaceChild(img,doggos.childNodes[0]);
        console.log(processedResponse);
    });
}
function addNewDoggoFromBreed()
{   const breed = document.querySelector('.select-breed').value;
    console.log(`selected breed is ${breed}`);
    const BREEDURL = `https://dog.ceo/api/breed/${breed}/images/random`;
    const promise = fetch(BREEDURL);
    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = "Cute Doggo";
        doggos.replaceChild(img,doggos.childNodes[0]);
        console.log(processedResponse);
    });
}



document.querySelector(".add-doggo").addEventListener("click",addNewDoggoFromBreed);
document.querySelector(".random").addEventListener("click",addNewDoggo);