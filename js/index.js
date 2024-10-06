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
    pets.forEach((video) => {
        console.log(video)
        const card = document.createElement('div')
        card.classList = `card card-compact `
        card.innerHTML = `
        <figure class="h-[250px]">
    <img
     src= "${video.image}" 
      alt="${video.pet_name}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${video.pet_name}   
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>${video.pet_details}</p> 
    <div class="card-actions justify-end">
      <div class="badge badge-outline">${video.category}</div>
      <div class="badge badge-outline">Price: $${video.price}</div>
    </div>
  </div>`

  CardConteiner.append(card)


})

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

