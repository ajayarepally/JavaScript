// Fetch recipes from dummyjson.com
function dummy() {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            displayDummyCards(data.recipes);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayDummyCards(recipes) {
    const container = document.getElementById('cards-container');
    container.innerHTML = "";

    recipes.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-body" style="text-align: center;">
                <img src="${item.image}" width="100%" style=" object-fit: contain;" />
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Cuisine: ${item.cuisine}</p>
                <p class="card-text">mealType: ${item.mealType}</p>
                <p class="card-text">Rating: ${item.rating}⭐</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Fetch DragonBall characters
function place() {
    fetch('https://dragonball-api.com/api/characters')
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data); // Log the full response data to inspect its structure

            // Check if the items array exists in the response
            if (data && data.items && Array.isArray(data.items)) {
                displayDragonBallCards(data.items); // Pass the items array to display cards
            } else {
                console.error("No 'items' field in response or unexpected response structure:", data);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayDragonBallCards(characters) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ""; // Clear previous cards if any

    characters.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-body" style="text-align: center;">
                <img src="${item.image}" style="width: 50%; height: 50%; object-fit: cover; border-radius: 10px;" />
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Race: ${item.race}</p>
                <p class="card-text">Max Ki: ${item.maxKi}</p>
                <p class="card-text">Affiliation: ${item.affiliation}</p>
            </div>
        `;
        container.appendChild(card);
    });
}


// Fetch products from fakestoreapi.com
function fake() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayFakeCards(data); // ✅ 'data' is directly an array
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayFakeCards(products) {  // ✅ Fixed function declaration
    const container = document.getElementById('cards-container');
    container.innerHTML = ""; // Clear previous cards

    products.forEach(item => {  // ✅ Fixed variable name (products)
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-body" style="text-align: center;">
                <img src="${item.image}" width="100%" style="height: 200px; object-fit: contain;" />
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Category: ${item.category}</p>
                <p class="card-text">Rating: ${item.rating.rate}</p>
                <p class="card-text">Price: $${item.price}</p>
            </div>
        `;
        container.appendChild(card);
    });
}
