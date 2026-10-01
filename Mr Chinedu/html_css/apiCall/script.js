const PRODUCT_URL = "https://dummyjson.com/products";

// function getProducts(url){
//     fetch(url)
//         .then((response)=>(response.json()))
//         .then((data)=>(console.log(data)))
//         .catch((error)=>(console.log(error)))
//
// }

const getProducts = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayProduct(data.products);
    }catch(error){
        console.log(error);
    }
};
getProducts(PRODUCT_URL);


const productDiv = document.querySelector(".productsContainer")

function  displayProduct(products){
    // productDiv.innerHTML = "";
    
    products.forEach((product )=>{
        const{price, description, title, images} = product
        productDiv.innerHTML += `
    <div>
        <img src="${images[0]}" alt="${title}">
        <div class ="titlePrice">
            <span> ${title}</span>
            <span>price &#8358 ${price}</span>
        </div>
        <div>
            <span>"${description}"</span>
        </div>
    </div>`;
    })
}
