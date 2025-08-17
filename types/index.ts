export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product in USD
    category: string; // Category of the product (e.g., skincare, makeup)
    imageUrl: string; // URL of the product image
    inStock: boolean; // Availability status of the product
    createdAt: Date; // Date the product was added to the inventory
    updatedAt: Date; // Date the product details were last updated
}

/
 * Interface representing a customer for luxury FashionTV cosmetics.
 */
export interface Customer {
    id: string; // Unique identifier for the customer
    name: string; // Full name of the customer
    email: string; // Email address of the customer
    phone?: string; // Optional phone number of the customer
    address: string; // Shipping address of the customer
    createdAt: Date; // Date the customer account was created
}

/
 * Interface representing an order placed by a customer.
 */
export interface Order {
    id: string; // Unique identifier for the order
    customerId: string; // ID of the customer who placed the order
    products: Array<OrderItem>; // List of products included in the order
    totalAmount: number; // Total amount for the order in USD
    orderDate: Date; // Date when the order was placed
    status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'; // Current status of the order
}

/
 * Interface representing an item in an order.
 */
export interface OrderItem {
    productId: string; // ID of the product
    quantity: number; // Quantity of the product ordered
}

/
 * Interface representing the response from the API for fetching products.
 */
export interface ProductResponse {
    products: Array<Product>; // Array of products
    totalCount: number; // Total number of products available
}

/
 * Interface representing the response from the API for fetching orders.
 */
export interface OrderResponse {
    orders: Array<Order>; // Array of orders
    totalCount: number; // Total number of orders
}

/
 * Interface representing user authentication information for luxury FashionTV cosmetics.
 */
export interface AuthUser {
    id: string; // Unique identifier for the authenticated user
    email: string; // Email address of the authenticated user
    role: 'Admin' | 'Customer'; // Role of the user in the system
}

/
 * Interface representing promotional information for luxury FashionTV cosmetics.
 */
export interface Promotion {
    id: string; // Unique identifier for the promotion
    title: string; // Title of the promotion
    description: string; // Description of the promotion
    discountPercentage: number; // Discount percentage offered
    startDate: Date; // Start date of the promotion
    endDate: Date; // End date of the promotion
}

/
 * Function to calculate the total price of products in an order.
 * @param items - Array of OrderItem
 * @param products - Array of Product
 * @returns Total price in USD
 */
export function calculateTotalPrice(items: Array<OrderItem>, products: Array<Product>): number {
    return items.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}