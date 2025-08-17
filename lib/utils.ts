import { CSSProperties } from 'react';

/
 * Utility functions for luxury FashionTV cosmetics application
 * This module includes common utility functions such as className concatenation 
 * and formatters tailored for the luxury cosmetics industry.
 */

/
 * A function to concatenate class names for styling components.
 * @param {...string} classes - The class names to concatenate.
 * @returns {string} - A single string of concatenated class names.
 */
export function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Formats a given price to a currency string with luxury styling.
 * @param {number} price - The price to format.
 * @returns {string} - The formatted price string.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Interface representing a cosmetic product in luxury FashionTV cosmetics.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Function to create a formatted product display for the luxury FashionTV cosmetics.
 * @param {CosmeticProduct} product - The cosmetic product to display.
 * @returns {string} - The HTML representation of the product for luxury FashionTV cosmetics.
 */
export function createProductDisplay(product: CosmeticProduct): string {
    return 
        <div class="product-card">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image" />
            <h2 class="product-name">${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <span class="product-price">${formatPrice(product.price)}</span>
        </div>
    ;
}

/
 * Styles for luxury FashionTV cosmetics components.
 */
export const styles: { [key: string]: CSSProperties } = {
    container: {
        backgroundColor: 'white',
        color: 'pink',
        fontFamily: 'serif',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        fontSize: '2em',
        marginBottom: '20px',
        color: 'pink',
    },
    productCard: {
        border: '1px solid pink',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        transition: 'transform 0.2s',
    },
    productImage: {
        maxWidth: '100%',
        borderRadius: '5px',
    },
    productName: {
        fontWeight: 'bold',
        fontSize: '1.5em',
    },
    productDescription: {
        color: '#555',
    },
    productPrice: {
        color: 'pink',
        fontWeight: 'bold',
        fontSize: '1.2em',
    },
};