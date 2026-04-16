// script.js

// 1. Target the container where products will go
const container = document.getElementById('product-container');

// 2. Fetch data from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching data:", error);
        container.innerHTML = "<h3>Failed to load products.</h3>";
    }
}

// 3. Create the HTML for each product card
function displayProducts(products) {
    let htmlContent = '';

    products.forEach(product => {
        htmlContent += `
            <div class="col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-secondary mb-2 w-fit-content">${product.category}</span>
                        <h6 class="card-title text-truncate">${product.title}</h6>
                        <p class="card-text fw-bold text-primary mt-auto">$${product.price}</p>
                        <button class="btn btn-outline-dark btn-sm">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Inject the cards into the HTML
    container.innerHTML = htmlContent;
}

// Start the fetch process
fetchProducts();
