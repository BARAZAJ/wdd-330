import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

// Create an instance of ProductData with the category "tents"
const dataSource = new ProductData("tents");

// Function to add a product to the cart
function addProductToCart(product) {
  // Retrieve the existing cart from localStorage, or initialize it as an empty array if it's not set
  const cart = getLocalStorage("so-cart") || [];

  // Add the new product to the cart
  cart.push(product);

  // Save the updated cart back to localStorage
  setLocalStorage("so-cart", cart);
}

// Event handler to add the product to the cart when the button is clicked
async function addToCartHandler(e) {
  try {
    // Find the product by ID using the dataset value from the button
    const product = await dataSource.findProductById(e.target.dataset.id);

    // Debug: Log the product to ensure it's fetched correctly
    console.log("Product added to cart:", product);

    // Add the product to the cart
    addProductToCart(product);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}

// Add event listener to the "Add to Cart" button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);



