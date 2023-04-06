// // Define the API endpoint
// const apiUrl = "http://localhost:3001/Pets";

// // Retrieve the list of pets from the API
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(pets => displayPets(pets))
//   .catch(error => console.error(error));

// // Display the list of pets in a table
// function displayPets(pets) {
//   const table = document.createElement("table");

//   // Create the table headers
//   const headers = ["Name", "Breed", "Age", "Sex", "Description", ""];
//   const headerRow = document.createElement("tr");
//   headers.forEach(header => {
//     const th = document.createElement("th");
//     th.textContent = header;
//     headerRow.appendChild(th);
//   });
//   table.appendChild(headerRow);

//   // Create a row for each pet
//   pets.forEach(pet => {
//     const row = document.createElement("tr");

//     // Add the pet data to the row
//     const nameCell = document.createElement("td");
//     nameCell.textContent = pet.name;
//     row.appendChild(nameCell);

//     const breedCell = document.createElement("td");
//     breedCell.textContent = pet.breed;
//     row.appendChild(breedCell);

//     const ageCell = document.createElement("td");
//     ageCell.textContent = pet.age;
//     row.appendChild(ageCell);

//     const sexCell = document.createElement("td");
//     sexCell.textContent = pet.sex;
//     row.appendChild(sexCell);

//     const descriptionCell = document.createElement("td");
//     descriptionCell.textContent = pet.description;
//     row.appendChild(descriptionCell);

//     // Add edit and delete buttons to the row
//     const editCell = document.createElement("td");
//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => editPet(pet));
//     editCell.appendChild(editButton);
//     row.appendChild(editCell);

//     const deleteCell = document.createElement("td");
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => deletePet(pet.id));
//     deleteCell.appendChild(deleteButton);
//     row.appendChild(deleteCell);

//     table.appendChild(row);
//   });

//   document.body.appendChild(table);
// }

// // Add a new pet to the list
// function addPet() {
//   const name = prompt("Enter the pet's name:");
//   const breed = prompt("Enter the pet's breed:");
//   const age = prompt("Enter the pet's age:");
//   const sex = prompt("Enter the pet's sex:");
//   const description = prompt("Enter a description of the pet:");

//   fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name, breed, age, sex, description })
//   })
//   .then(response => response.json())
//   .then(pet => displayPets([pet]))
//   .catch(error => console.error(error));
// }

// // Edit an existing pet in the list
// function editPet(pet) {
//   const name = prompt("Enter the pet's name:", pet.name);
//   const breed = prompt("Enter the pet's breed:", pet.breed);
//   const age = prompt("Enter the pet's age:");
//   const sex = prompt("Enter the pet's sex:");
//   const description = prompt("Enter a description of the pet:");

//   fetch(apiUrl, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name, breed, age, sex, description })
//   })
//   .then(response => response.json())
//   .then(pet => displayPets([pet]))
//   .catch(error => console.error(error));
// }

// function deletePet(pet) {
//     const name = prompt("Enter the pet's name:", pet.name);
//     const breed = prompt("Enter the pet's breed:", pet.breed);
//     const age = prompt("Enter the pet's age:");
//     const sex = prompt("Enter the pet's sex:");
//     const description = prompt("Enter a description of the pet:");
  
//     fetch(apiUrl, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ name, breed, age, sex, description })
//     })
//     .then(response => response.json())
//     .then(pet => displayPets([pet]))
//     .catch(error => console.error(error));
//   }

fetch("http://localhost:3001/Pets")
   .then (response => response.json())
   .then (data =>{

    const petin = document.querySelector(".Petstore");
     for(let i=0;i<data.length;i++){
      let Name = data[i].name;
      let Breed = data[i].breed;
      let Gender = data[i].gender;
      let Description = data[i].description;
      let image = data[i].imageURL;
      const card =document.createElement("div")
      card.classList.add("card");
      card.innerHTML+=`
      <img  src='${image}'style='width:150px; height:150px;'>
      
         <p>${Name}</p>
         <p>${Breed}</p>
         <p>${Gender}</p>
         <p>${Description}</p>
         `;
        petin.appendChild(card); 
    }
    })
    // Post f
    const form = document.querySelector('#pet-form');
    console.log(form);
    form.addEventListener('submit',handlesubmit);
    function handlesubmit(e){
    e.preventDefault()
    let petObj= {
        name:e.target.name.value,
        breed:e.target.breed.value,
        imageURL:e.target.image.value,
        Gender:e.target.gender.value,
        Description:e.target.description.value,
    }
    console.log("hrtr");
    submit(petObj)
 }
 function submit(petObj) {
    fetch("http://localhost:3001/Pets",{
     method:'POST',
     headers: {
        "Content-Type": "application/json"
     },
      body: JSON.stringify(petObj),
 })
 .then (response => response.json())
 .then (data => console.log(data))
 }

   //Delete f
 const Delete= document.getElementById("deleteid");
 Delete.addEventListener("click", myFunction);
function myFunction(e) {
e.preventDefault();
    fetch("http://localhost:3001/Pets", {
        method: "DELETE",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(myFunction),
    })
    .then(response=> response.json())
    .then(data =>console.log(data))
}


// document.addEventListener("DOMContentLoaded", () => {
//     const pets = document.querySelector('#dom-pets')
//       const petInfo = document.querySelector('#pet-info')
//       const petForm = document.querySelector('#pet-form')
//       petForm.addEventListener('submit', createNewPet)
//     fetch('http://localhost:3001/Pets')
//       .then(response => response.json())
//       .then(pets => pets.forEach(slapItOnTheDOM))
//     function slapItOnTheDOM(pet) {
//         const petLi = document.createElement('li');
//         petLi.dataset.id = pet.id
//         petLi.innerHTML = `<span>${pet.name} the ${pet.species}</span>`
//         pets.appendChild(petLi);
//     const buttond = document.createElement('button')
//         buttond.dataset.id = pet.id
//         buttond.setAttribute("id", `delete-button-${pet.id}`)
//         buttond.innerText = "DELETE"
//         pets.appendChild(buttond);
//         buttond.addEventListener('click', () => deletePet(pet))
//     const buttonu = document.createElement('button')
//         buttonu.dataset.id = pet.id
//         buttonu.setAttribute("id", `update-button-${pet.id}`)
//         buttonu.innerText = "UPDATE"
//         pets.appendChild(buttonu);
//         buttonu.addEventListener('click', () => editPet(Pet))
//       }
//     function gatherFormData(){
//         return {
//           gender: event.target.gender.value,
//           image: event.target.imageURL.value,
//           name: event.target.name.value,
//           breed: event.target.breed.value,
//           description: event.target.description.value
//         }
//       }
//     /////// CREATE ///////
//     function createNewPet(event) {
//         event.preventDefault();
//         let newPet = gatherFormData();
//         return fetch('http://localhost:3001/Pets', {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify(newPet)
//         })
//         .then(res => res.json())
//         .then(pet => (slapItOnTheDOM(pet)));
//       }
//     /////// UPDATE ///////
//     function editPet(pet) {
//           console.log(`${pet.name} edit button has been clicked!`)
//           const eForm = document.createElement('form')
//           eForm.id = "update-form"
//           eForm.innerHTML = `<h2> Update ${pet.name}</h2>Name:<br><input type="text" name="name" value="${pet.name}"><br>Breed:<br><input type="text" name="breed" value="${pet.breed}"><br>Description:<br><input type="text" name="description" value="${animal.description}"><br>Gender:<br><input type="text" name="gender" value="${animal.gender}"><br>Image:<br><input type="text" name="imageURL" value="${animal.imageURL}"><br><input type="submit" name="">`
//           petInfo.append(eForm)
//           eForm.addEventListener('submit', (event) => updatePet(event, pet))
//       }
//     function updatePet(event, pet) {
//         event.preventDefault();
//         let updatedPet = gatherFormData()
//         updateOnBackend(updatedPet, pet.id)
//         .then(updateOnFrontEnd)
//       }
//     function updateOnBackend(updatedPet, id){
//         console.log("fetch began")
//         return fetch(`http://localhost:3001/Pets/${id}`, {
//         method: "PATCH",
//         body: JSON.stringify(updatedPet),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//       .then(res => res.json())
//     }
//     function updateOnFrontEnd(pet){
//         console.log(`${pet.name} is being updated`)
//         const petSpan = pets.querySelector(`li[data-id="${pet.id}"]>span`)
//         petSpan.innerText = `${pet.name} the ${pet.breed}` 
//         console.log(`${pet.name} has been updated`)
//       }
//     /////// DELETE ///////
//         function deletePet(pet) {
//         console.log(`${pet.name} is going away`)
//         const petLi = document.querySelector(`[data-id="${pet.id}"]`);
//         const buttond = document.querySelector(`#delete-button-${pet.id}`);
//         const buttonu = document.querySelector(`#update-button-${pet.id}`);
//     return  fetch(`http://localhost:3001/Pets/${pet.id}`, {
//           method: "DELETE"
//         })
//         .then(response => response.json())
//         .then(() => {
//           petLi.remove();
//           buttond.remove()
//           buttonu.remove()
//         })
//         .then(console.log(`${pet.name} is gone`))
//     }
//     })
