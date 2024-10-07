const loadcard = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(response => response.json())
    .then(data => {
        console.log(data);  
        if (data.categories) {
            DisplayCatagoris(data.categories);
        } 
    })
    .catch(error => console.error("Error fetching data:", error));
}


const loadAllCard = () => {
fetch("https://openapi.programming-hero.com/api/peddy/pets")
.then((res) => res.json())
.then((data) => Displaycard(data.pets))
.catch((error) => console.error(error))
}

const Button = {
    category: "Cat",
    category_icon: "https://i.ibb.co/N7dM2K1/cat.png",
    id: 1
};

const pet = {
"petId": 1,
"breed": 'Golden Retriever',
"category": 'Dog',
"date_of_birth": '2023-01-15',
"price": 1200,
"gender": 'Male',
"image": 'https://i.ibb.co.com/p0w744T/pet-1.jpg',
"pet_details": 'This friendly male Golden Retriever is energetic and loyal, making him a perfect companion...',
"pet_name": 'Sunny',
"vaccinated_status": 'Fully'
};

const Displaycard = (pets) => {
console.log(pets);    
const CardConteiner = document.getElementById("allCard");
pets.forEach((pet) => { 
console.log(pet);
const card = document.createElement('div');
card.classList = `card card-compact`;
card.innerHTML = `
<div class="card bg-base-100 md:w-96 w-56 h-[500px] shadow-xl">
<figure>
<img class="rounded-lg w-full object-cover" src="${pet.image}" alt="${pet.pet_name}" />
</figure>
<div class="card-body">
<h1 class="card-title text-lg font-bold">${pet.pet_name}</h1>
<div class="grid gap-3">
<p class="flex font-bold text-1xl text-gray-500  gap-2"><img src="https://cdn-icons-png.flaticon.com/128/747/747327.png" alt="" class="w-5 h-5">Breed: 
${pet.breed}
</p>
<p class="flex font-bold text-1xl text-gray-500  gap-2">
    <img src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png" alt="" class="w-5 h-5">Birth: ${pet.date_of_birth || 'Undefiend'}</p>
<p class="flex font-bold text-1xl text-gray-500  gap-2"><img src="https://cdn-icons-png.flaticon.com/128/866/866954.png" alt="" class="w-5 h-5">Gender: ${pet.gender || 'Undefiend'}</p>

<p class="flex font-bold text-1xl text-gray-500  gap-2"><img src="https://cdn-icons-png.flaticon.com/128/126/126179.png" alt="" class="w-5 h-5">Price: ${pet.price || 'Undefiend'}</p>
</div>
</div>
<div class="flex justify-around mb-5">
<button class="btn">
<img src="https://cdn-icons-png.flaticon.com/128/1062/1062675.png" alt="" class="w-8 h-8">
</button>                   
<button class="btn btn-outline">Adopt</button>
<button class="btn btn-outline">Details</button>
</div>
</div>
`;

CardConteiner.append(card);
});
}


const DisplayCatagoris = (categories) => {
    const categoryContainer = document.getElementById('categoris');
    
    categories.forEach((item) => {
        console.log(item);
      
        const card = document.createElement('div');
        card.classList.add("category-card"); 
        card.innerHTML = `
        <div class="category-content flex font-bold gap-2 text-2xl">
            <img src="${item.category_icon}" alt="icon">
            <button class="btn_all">${item.category}</button>
        </div>
        `;

        categoryContainer.append(card);
    });
}



loadcard();
loadAllCard()

