// const loadcard = () => {
//     fetch("https://openapi.programming-hero.com/api/peddy/categories")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); 
//         DisplayCatagoris(data.Objectcategories); 
//     })
//     .catch(error => console.error("Error fetching data:", error));
// }

const loadAllCard = () => {
fetch("https://openapi.programming-hero.com/api/peddy/pets")
.then((res) => res.json())
.then((data) => Displaycard(data.pets))
.catch((error) => console.error(error))
}

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
pets.forEach((pet) => { // Change 'video' to 'pet'
console.log(pet);
const card = document.createElement('div');
card.classList = `card card-compact`;
card.innerHTML = `
<div class="card bg-base-100 w-96 h-[500px] shadow-xl">
<figure>
<img class="rounded-lg w-full object-cover" src="${pet.image}" alt="${pet.pet_name}" />
</figure>
<div class="card-body">
<h2 class="card-title text-lg font-bold">${pet.pet_name}</h2>
<div class="grid gap-3">
<p class="flex font-bold text-1xl text-gray-500 p-3 gap-2"><img src="https://cdn-icons-png.flaticon.com/128/747/747327.png" alt="" class="w-8 h-8">
${pet.breed}
</p>
<p class="flex font-bold text-1xl text-gray-500 p-3 gap-2">
    <img src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png" alt="" class="w-8 h-8">${pet.breed || 'Undefiend'}</p>
<p class="flex font-bold text-1xl text-gray-500 p-3 gap-2"><img src="https://cdn-icons-png.flaticon.com/128/866/866954.png" alt="" class="w-8 h-8">${pet.gender || 'Undefiend'}</p>

<p class="flex font-bold text-1xl text-gray-500 p-3 gap-2"><img src="https://cdn-icons-png.flaticon.com/128/126/126179.png" alt="" class="w-8 h-8">${pet.price || 'Undefiend'}</p>
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
const categoryConteiner = document.getElementById('categoris')
categories.forEach((item) => {
console.log(item)
const button = document.createElement('img');
button.classList = "img"
button.innerText = item.category
categoryConteiner.append(Image)

});
}


// loadcard();
loadAllCard()

