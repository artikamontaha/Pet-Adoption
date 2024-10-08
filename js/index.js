const loadcard = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(response => response.json())
    .then(data => {
    // console.log(data);  
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
    // console.log(pets);    
    const CardConteiner = document.getElementById("allCard");
    pets.forEach((pet, index) => { 
    // console.log(pet);
    const card = document.createElement('div');
    card.classList = `card card-compact`;
    card.innerHTML = `
    <div class="card bg-base-100 p-3 shadow-xl">
    <figure>
    <img class="rounded-lg w-full object-cover" src="${pet.image}" alt="${pet.pet_name}" />
    </figure>
    <div class="card-body">
    <h1 class="card-title text-lg font-bold">${pet.pet_name}</h1>
    <div class="grid gap-3">
    <p class="flex font-bold text-1xl text-gray-500 gap-2">
    <img src="https://cdn-icons-png.flaticon.com/128/747/747327.png" alt="" class="w-5 h-5">
    Breed: ${pet.breed}
    </p>
    <p class="flex font-bold text-1xl text-gray-500 gap-2">
    <img src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png" alt="" class="w-5 h-5">
    Birth: ${pet.date_of_birth || 'Undefiend'}
    </p>
    <p class="flex font-bold text-1xl text-gray-500 gap-2">
    <img src="https://cdn-icons-png.flaticon.com/128/866/866954.png" alt="" class="w-5 h-5">
    Gender: ${pet.gender || 'Undefiend'}
    </p>
    <p class="flex font-bold text-1xl text-gray-500 gap-2">
    <img src="https://cdn-icons-png.flaticon.com/128/126/126179.png" alt="" class="w-5 h-5">
    Price: ${pet.price || 'Undefiend'}
    </p>
    </div>
    </div>
    <div class="flex justify-around mb-5">
    <button onclick="HandleLikeBtn('${pet.image}')" class="btn">
    <img src="https://cdn-icons-png.flaticon.com/128/1062/1062675.png" alt="" class="w-8 h-8">
    </button>                   
    <button class="btn btn-outline">Adopt</button>
    <button class="btn" onclick="document.getElementById('modal_${index}').showModal()">Details</button>
    <dialog id="modal_${index}" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
    <img src="${pet.image}" alt="Pet Image" class="rounded-lg w-full" />
    <p class="mt-5 font-bold">Breed: ${pet.breed}</p>
    <p class=" font-bold">Name: ${pet.pet_name}</p>
    <p class=" font-bold">Date of Birth: ${pet.date_of_birth}</p>
    <p class=" font-bold">Gender: ${pet.gender}</p>
    <p class="font-bold">Price: ${pet.price}</p>
    <p class="font-bold">Vaccination Status: ${pet.vaccinated_status}</p>
    <p class="font-bold">Details Information: <br> ${pet.pet_details}</p>
    <div class="modal-action">
    <form method="dialog">
    <button class="btn md:w-[460px] ml-10 bg-[#0E7A81]">Close</button>
    </form>
    </div>
    </div>
    </dialog>
    </div>
    </div>
    `;
    
    CardConteiner.append(card);
    });
    }
    
    
    
    // document.getElementById('dogButton').addEventListener('click', function() {
    //     fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data); 
    //         console.log(data.categories); 
    //         if (data.categories) {
    //             DisplayCatagoris(data.categories);
    //         }
    // })
    // .catch(error => console.error("Error fetching data:", error));
    // });
   
    function HandleLikeBtn (img) {
        const likePets = document.getElementById("like_pets")
        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = `
        <img src=${img} class="rounded-xl">
        `
        likePets.appendChild(creatDiv)
    }

    
    
    
    const DisplayCatagoris = (categories) => {
    const categoryContainer = document.getElementById('categoris');
    
    categories.forEach((item) => {
    // console.log(item);
    
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
    
    
    
    // const loadcatagoris = () => {
    //     fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);  
    //         if (data.categories) {
    //             DisplayCatagoris(data.categories);
    //         } 
    //     })
    //     .catch(error => console.error("Error fetching data:", error));
    // }
    
    // const onlyDog = {
    //     breed: "Golden Retriever",
    //     category: "Dog",
    //     dateOfBirth: "2023-01-15",
    //     gender: "Male",
    //     image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    //     petId: 1,
    //     petDetails: "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    //     petName: "Sunny",
    //     price: 1200,
    //     vaccinatedStatus: "Fully"
    // };

    
    loadcard();
    loadAllCard()
    // loadcatagoris()