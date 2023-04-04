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

     for(let i=0;i<data.length;i++){
      let Name = data[i].name;
      let Breed = data[i].breed;
      let Age = data[i].age;
      let Sex = data[i].sex;
      let Description = data[i].description;
      let image = data[i].imageURL;
      document.querySelector(".Petstore").innerHTML+=`
          <p>${Name}</p>
         <p>${Breed}</p>
         <p>${Age}</p>
         <p>${Sex}</p>
         <p>${Description}</p>
         <img src='${image}'>
         `;
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
        Age:e.target.age.value,
        Sex:e.target.sex.value,
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
      body: JSON.stringify(shoeObj),
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


