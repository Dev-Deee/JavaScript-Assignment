let searchForm = document.querySelector("#search-tasks input");
const productDiv = document.querySelector(".productsContainer");

searchForm.addEventListener("input", (event) => {
    let searchValue = event.target.value.toLowerCase();
    let products = productDiv.querySelectorAll(".product-card");

    products.forEach(card => {
        let titleText = card.querySelector(".titlePrice span").textContent.toLowerCase();
        if (titleText.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const PRODUCT_URL = "https://fakestoreapi.com/products";

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProduct(data);
    } catch (error) {
        console.log(error);
    }
};
getProducts(PRODUCT_URL);

function displayProduct(products) {
    products.forEach((product) => {
        const { price, description, title, image } = product;
        productDiv.innerHTML += `
        <div class="product-card">
            <img src="${image}" alt="${title}">
            <div class="titlePrice">
                <span>${title}</span>
                <span>&#8358;${price}</span>
            </div>
            <div>
                <span>${description}</span>
            </div>
        </div>`;
    });
}