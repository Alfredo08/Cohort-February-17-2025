
let dogForm = document.querySelector('.dog-info');

/*
let fetchDogInfo = (URL) => {
    fetch(URL)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            console.log(response);
            throw Error("Something went wrong");
            
        })
        .then((data) => {
            let results = document.querySelector(".results");
            results.innerHTML = "";
            for(let i = 0; i < data.message.length; i ++){
                results.innerHTML += `
                    <img src="${data.message[i]}" alt="Dog image">
                `;
            }
            console.log("This prints last!");
        })
        .catch((error) => {
            console.log(error);
        });
    console.log("This prints first!");
}
*/


let fetchDogInfo = async (URL) => {
    try{
        let response = await fetch(URL);
        let data = await response.json();
        if(! response.ok){
            throw Error("Something went wrong", data);
        }
        let results = document.querySelector(".results");
        results.innerHTML = "";
        for(let i = 0; i < data.message.length; i ++){
            results.innerHTML += `
                <img src="${data.message[i]}" alt="Dog image">
            `;
        }
    }
    catch(error){
        console.log(error);
    }
}


dogForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let numOfDogs = document.querySelector('#numOfDogs').value;
    let URL = "https://dog.ceo/api/breeds/image/rando/" + numOfDogs;
    fetchDogInfo(URL);
});