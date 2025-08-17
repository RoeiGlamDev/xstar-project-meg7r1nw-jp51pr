export const BRAND_NAME = "luxury FashionTV cosmetics"; // Brand name used throughout the application

export const COLORS = {
    PRIMARY: "#FFC0CB", // Pink color for luxury FashionTV cosmetics
    SECONDARY: "#FFFFFF" // White color for luxury FashionTV cosmetics
};

/
 * Configuration for luxury FashionTV cosmetics application.
 * This includes settings related to the brand, colors, and any other relevant configurations.
 */
export const CONFIG = {
    // Base URL for the API or any other services
    API_BASE_URL: "https://api.luxuryfashiontvcosmetics.com",
    // Social media links
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/luxuryfashiontvcosmetics",
        FACEBOOK: "https://facebook.com/luxuryfashiontvcosmetics",
        TWITTER: "https://twitter.com/luxuryfashiontvcosmetics"
    },
    // Contact information
    CONTACT: {
        EMAIL: "contact@luxuryfashiontvcosmetics.com",
        PHONE: "+1-800-555-0199"
    }
};

/
 * Interface representing a product in the luxury FashionTV cosmetics catalog.
 */
export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    imageUrl: string; // Image URL for the product
    category: string; // Category of the product (e.g., lipstick, foundation)
}

/
 * Interface representing a user in the luxury FashionTV cosmetics application.
 */
export interface User {
    id: string; // Unique identifier for the user
    name: string; // User's name
    email: string; // User's email address
    favoriteProducts: Product[]; // List of user's favorite products
}

/
 * Function to create a new product for luxury FashionTV cosmetics.
 * @param product - The product details to be created.
 * @returns The created product.
 */
export function createProduct(product: Product): Product {
    // Logic to create a new product in the system
    return product; // In a real application, this would involve database operations
}